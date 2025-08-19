import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Head from 'next/head';

const PaymentSuccess: NextPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const { session_id: sessionId } = router.query;
        
        if (!sessionId) {
          throw new Error('No session ID found');
        }

        // Here you would typically verify the payment with your backend
        // For now, we'll just simulate a successful verification
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
      } catch (err) {
        console.error('Payment verification error:', err);
        setError('Failed to verify payment. Please contact support if the issue persists.');
        setIsLoading(false);
      }
    };

    verifyPayment();
  }, [router.query]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg">Verifying your payment...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className="text-red-500 text-5xl mb-4">✕</div>
        <h2 className="text-2xl font-bold mb-4">Payment Verification Failed</h2>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          onClick={() => router.push('/')}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Payment Successful | Your App Name</title>
        <meta name="description" content="Payment successful" />
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className="text-green-500 text-7xl mb-6">✓</div>
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-4">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          A confirmation email has been sent to your registered email address.
        </p>
        <button
          onClick={() => router.push('/dashboard')}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </>
  );
};

export default PaymentSuccess;
