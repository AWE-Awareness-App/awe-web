import { useState } from 'react';
import { useRouter } from 'next/router';
import { paymentService, CheckoutSessionRequest } from '../services/paymentService';

interface UsePaymentProps {
  token?: string | null;
  onUnauthenticated?: () => void;
}

export const usePayment = ({ token, onUnauthenticated }: UsePaymentProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCheckout = async (workshopId: string, connectAccountId: string) => {
    if (!token) {
      if (onUnauthenticated) {
        onUnauthenticated();
      } else {
        router.push('/auth/signin?redirect=checkout');
      }
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const baseUrl = window.location.origin;
      const requestData: CheckoutSessionRequest = {
        workshopId,
        connectAccountId,
        successUrl: `${baseUrl}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${baseUrl}/payment/canceled`
      };

      const { sessionId } = await paymentService.createCheckoutSession(
        requestData,
        token
      );

      // Redirect to Stripe Checkout
      window.location.href = `https://checkout.stripe.com/c/pay/${sessionId}`;
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'Failed to process payment');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleCheckout,
    isLoading,
    error
  };
};
