import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PaymentCanceled: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Payment Canceled | Your App Name</title>
        <meta name="description" content="Payment was canceled" />
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className="text-red-500 text-7xl mb-6">✕</div>
        <h1 className="text-3xl font-bold mb-4">Payment Canceled</h1>
        <p className="text-gray-600 mb-8">
          Your payment was not completed. You have not been charged.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Back to Checkout
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentCanceled;
