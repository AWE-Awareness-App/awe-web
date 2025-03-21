import React, { useState } from 'react';

interface PaymentCardProps {
    handleClose: () => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ handleClose }) => {
    const [selectedPayment, setSelectedPayment] = useState('');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleClose}>
                    ✕
                </button>

                <div className="mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        AWE
                    </div>
                </div>

                {/* Title and Description */}
                <h2 className="text-2xl font-bold mb-2">PAYMENTS</h2>
                <p className="text-gray-600 mb-6">
                    Get ready to join a community to help you gain better digital habits and real connections. Please invite a friend or family member to sign up so you can be connected, motivate each other and share success and progress.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Billing Details Form */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Full Name</h3>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <h3 className="text-lg font-semibold mb-4">Street Address</h3>
                        <input
                            type="text"
                            placeholder="Enter billing address"
                            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <h3 className="text-lg font-semibold mb-4">State</h3>
                        <input
                            type="text"
                            placeholder="Enter state"
                            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <h3 className="text-lg font-semibold mb-4">City</h3>
                        <input
                            type="text"
                            placeholder="City here"
                            className="w-full p-3 mb-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <h3 className="text-lg font-semibold mb-4">Postal/Zip Code</h3>
                        <input
                            type="text"
                            placeholder="Pin here"
                            className="w-full p-3 mb-4 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        {/* Set as Default Toggle */}
                        <div className="flex items-center mb-4">
                            <input type="checkbox" className="mr-2" />
                            <label className="text-gray-600">SET AS DEFAULT</label>
                        </div>

                        {/* Delete and Save Buttons */}
                        <div className="flex space-x-4">
                            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300">
                                Delete
                            </button>
                            <button className="bg-[#252B61] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Save
                            </button>
                        </div>
                    </div>

                    {/* Payment Methods */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">PAYMENT METHODS</h3>
                        <div
                            className={`flex items-center p-3 mb-4 border rounded-lg cursor-pointer ${selectedPayment === 'visa' ? 'border-blue-500' : ''
                                }`}
                            onClick={() => setSelectedPayment('visa')}
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                                alt="Visa"
                                className="w-12 h-4 mr-4"
                            />
                            <span>Visa</span>
                        </div>
                        <div
                            className={`flex items-center p-3 mb-4 border rounded-lg cursor-pointer ${selectedPayment === 'mastercard' ? 'border-blue-500' : ''
                                }`}
                            onClick={() => setSelectedPayment('mastercard')}
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                alt="MasterCard"
                                className="w-12 h-8 mr-4"
                            />
                            <span>MasterCard</span>
                        </div>

                        {/* Pay Now Button */}
                        <button className="bg-[#252B61] text-white w-full py-6 rounded-lg hover:bg-blue-700">
                            Pay Now
                        </button>
                    </div>
                </div>

                {/* Terms and Privacy Policy */}
                <p className="text-gray-500 text-sm mt-6">
                    By filling details, you agree to the{' '}
                    <a href="/terms-of-service" className="text-blue-500 underline">
                        TERMS OF SERVICE
                    </a>{' '}
                    and acknowledge you've read our{' '}
                    <a href="/privacy-policy" className="text-blue-500 underline">
                        PRIVACY POLICY
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default PaymentCard;