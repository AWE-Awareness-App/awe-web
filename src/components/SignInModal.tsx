import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { signIn } from "next-auth/react"

interface SignInModalProp {
    isSignInModalOpen: boolean;
    onClose: () => void;
    onSwitchToSignUpModal: () => void;
}

const SignInModal: React.FC<SignInModalProp> = ({
    isSignInModalOpen,
    onClose,
    onSwitchToSignUpModal,
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const validateEmail = (e: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            return setError('Please enter a valid email address.');
        }
        if (!password) {
            return setError('Password is required.');
        }
        setError(null);

        const result = await signIn('credentials', {
            redirect: false,
            email: email,
            password,
            callbackUrl: '/'
        });

        if (result?.error) {
            if (result.error === 'CredentialsSignin') {
                setError('Invalid email or password.');
            } else {
                setError(result.error);
            }
        } else if (result?.ok && result.url) {
            window.location.href = result.url;
        }
    };

    return (
        <Modal
            show={isSignInModalOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            tabIndex={-1}
            className="inset-0 
            z-50 
            flex 
            items-center 
            justify-center
            max-w-6xl
            mx-auto
            rounded-lg"
            dismissible
        >
            <div className="p-6 md:p-8">
                <ModalHeader className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                    <div className="text-2xl font-bold flex items-center">
                        Welcome Back
                        <span className="ml-2">👋</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Thank you for using AWE. Please share with your network and
                        community. Have fun and enjoy. Don't forget not to stay on the
                        internetmore than you should - that even includes our community. We
                        care.
                    </p>
                </ModalHeader>
                <ModalBody className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Column*/}
                        <div className="w-1/2 md:w-1/2 border-gray-200 dark:border-gray-600 md:border-r md:pr-6">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Sign in
                            </h3>
                            <form>
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="name@company.com"
                                        onChange={e => setEmail(e.target.value)}
                                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="••••••••"
                                        onChange={e => setPassword(e.target.value)}
                                        className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    />
                                    <div className="text-right mt-1">
                                        <button className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                                            Forgot your password?
                                        </button>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-blue-700 px-4 py-2.5 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
                                >
                                    Sign in
                                </button>
                            </form>
                        </div>
                        {/* Right Column*/}
                        {/*<div className="w-1/2 md:w-1/2 items-center justify-center">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Sign in with social icons
                            </h3>
                            <div className="space-y-2">
                                <button className="w-64 h-10 px-2 flex items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white-100">
                                    <img
                                        src="/images/apple-icon.png"
                                        alt="Continue with Apple"
                                        className="size-8"
                                    />
                                    Continue with Apple
                                </button>
                                <button className="w-64 h-10 px-2 flex items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white-100">
                                    <img
                                        src="/images/microsoft-icon.svg"
                                        alt="Microsoft"
                                        className="size-7"
                                    />
                                    Continue with Microsoft
                                </button>
                                <button className="w-64 h-10 px-2 flex items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white-100">
                                    <img
                                        src="/images/facebook-icon.png"
                                        alt="Facebook"
                                        className="size-7"
                                    />
                                    Continue with Facebook
                                </button>
                                <button className="w-64 h-10 px-2 flex items-center justify-center gap-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 bg-white-100">
                                    <img
                                        src="/images/google-icon.svg"
                                        alt="Continue with Google"
                                        className="size-8"
                                    />
                                    Continue with Google
                                </button>
                            </div>
                        </div>*/}
                    </div>
                </ModalBody>
                <ModalFooter className="justify-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Don’t have an account?{" "}
                        <button
                            type="button"
                            onClick={() => {
                                onSwitchToSignUpModal();
                            }}
                            className="text-blue-600 hover:underline"
                        >
                            Sign Up
                        </button>
                    </p>
                </ModalFooter>
            </div>
        </Modal>
    );
};

export default SignInModal;