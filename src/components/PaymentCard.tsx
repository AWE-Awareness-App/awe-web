import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const PaymentCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        state: '',
        city: '',
        zip: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-xl w-[80%] max-w-5xl flex flex-col md:flex-row shadow-lg relative">
                {/* Left Section */}
                <div className="w-full md:w-1/2 pr-4">
                    <h2 className="text-xl font-bold mb-2">Payments</h2>
                    <p className="text-sm mb-6 text-gray-600">
                        Get ready to join a community to help you gain better digital habits and real connections.
                        Please invite a friend or family member to also sign up so you can be connected,
                        motivate each other and share success and progress.
                    </p>

                    <InputField
                        label="Full Name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                    />
                    <InputField
                        label="Street Address"
                        placeholder="Enter billing address"
                        value={formData.address}
                        onChange={handleChange}
                        name="address"
                    />
                    <InputField
                        label="State"
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={handleChange}
                        name="state"
                    />
                    <InputField
                        label="City"
                        placeholder="City here"
                        value={formData.city}
                        onChange={handleChange}
                        name="city"
                    />
                    <InputField
                        label="Postal/Zip Code"
                        placeholder="Pin here"
                        value={formData.zip}
                        onChange={handleChange}
                        name="zip"
                    />

                    <div className="flex items-center space-x-2 mb-4">
                        <input type="checkbox" className="accent-blue-600" />
                        <label className="text-sm">Set as default</label>
                    </div>

                    <div className="flex space-x-4">
                        <Button text="Delete" onClick={()=>{}}/>
                        <Button text="Save" onClick={()=>{}}/>
                    </div>

                    <p className="text-xs mt-4 text-gray-500">
                        By filling details, you agree to the <span className="underline font-medium">Terms of Service</span>
                        and acknowledge you've read our <span className="underline font-medium">Privacy Policy</span>.
                    </p>
                </div>

                {/* Divider */}
                <div className="border-l mx-4 hidden md:block"></div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
                    <h3 className="text-lg font-medium mb-4">Payment methods</h3>

                    <div className="flex flex-col space-y-4 w-[75%]">
                        <div className="border p-3 rounded-md flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center space-x-2">
                                <img src="/images/visa.png" alt="Visa" className="w-8" />
                                <span>Visa</span>
                            </div>
                            <span>›</span>
                        </div>

                        <div className="border p-3 rounded-md flex items-center justify-between hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center space-x-2">
                                <img src="/images/mastercard.png" alt="MasterCard" className="w-8" />
                                <span>MasterCard</span>
                            </div>
                            <span>›</span>
                        </div>
                    </div>

                    <Button text="Pay Now" onClick={()=>{}} />
                </div>

                {/* Close Icon */}
                <button className="absolute top-4 right-4 text-xl font-bold">&times;</button>
            </div>
        </div>
    );
};

export default PaymentCard;
