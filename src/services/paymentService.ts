const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export interface CheckoutSessionRequest {
  workshopId: string;
  successUrl: string;
  cancelUrl: string;
  connectAccountId: string;
}

export interface CheckoutSessionResponse {
  sessionId: string;
}

export interface WebhookResponse {
  received: boolean;
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'An error occurred');
  }
  return response.json();
};

const createCheckoutSession = async (data: CheckoutSessionRequest, token: string): Promise<CheckoutSessionResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/payments/checkout-session`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      }
    );
    return handleResponse(response);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to create checkout session');
  }
};

const verifyWebhookSignature = async (signature: string, payload: any): Promise<WebhookResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/payments/webhook`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'stripe-signature': signature
        },
        body: JSON.stringify(payload)
      }
    );
    return handleResponse(response);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to verify webhook signature');
  }
};

export const paymentService = {
  createCheckoutSession,
  verifyWebhookSignature
};
