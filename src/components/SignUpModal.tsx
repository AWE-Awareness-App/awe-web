import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";

interface SignUpModalProp {
  isSignUpModalOpen: boolean;
  onClose: () => void;
  onSwitchToSignInModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProp> = ({
  isSignUpModalOpen,
  onClose,
  onSwitchToSignInModal,
}) => {
  return (
    <Modal
      show={isSignUpModalOpen}
      onClose={onClose}
      tabIndex={-1}
      className="inset-0 
            z-50 
            flex 
            items-center 
            justify-center
            max-w-5xl
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
            Get Ready to join a community to help you gain better digital habits
            and real connections. Please invite a friend or family member to
            also sign up so you can be connected, motivate each other and share
            access and progress.
          </p>
        </ModalHeader>
        <ModalBody className="space-y-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column*/}
            <div className="w-1/2 md:w-1/2 border-gray-200 dark:border-gray-600 md:border-r md:pr-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sign Up
              </h3>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
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
                    className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <button
                  className="mt-4 w-full bg-blue-700 text-white py-2 rounded"
                  type="button"
                >
                  Sign up
                </button>
                <p className="text-xs mt-2 text-gray-500">
                  By signing up, you agree to the{" "}
                  <a href="#" className="underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
            {/* Right Column*/}
            <div className="w-1/2 md:w-1/2 items-center justify-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Sign up with social icons
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
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="justify-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                onSwitchToSignInModal();
              }}
              className="text-blue-600 hover:underline"
            >
              Sign in
            </button>
          </p>
        </ModalFooter>
      </div>
    </Modal>
  );
};

export default SignUpModal;
