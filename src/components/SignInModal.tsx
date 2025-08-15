import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { signIn } from "next-auth/react";
import SSOButtons from "./SSOButtons"; // new import

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      return setError("Please enter a valid email address.");
    }
    if (!password) {
      return setError("Password is required.");
    }
    setError(null);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });

    if (result?.error) {
      if (result.error === "CredentialsSignin") {
        setError(
          "The email or password you entered is incorrect. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } else if (result?.ok && result.url) {
      window.location.href = result.url;
    }
  };

  return (
    <Modal
      show={isSignInModalOpen}
      onClose={onClose}
      tabIndex={-1}
      className="inset-0 z-50 flex items-center justify-center max-w-lg mx-auto rounded-lg"
      dismissible
    >
      <div className="p-6 md:p-8 text-center">
        <ModalHeader className="mb-4">
          <div className="text-center w-full">
            <div className="text-2xl font-bold flex items-center justify-center">
              Welcome Back <span className="ml-2">👋</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Thank you for using AWE. Please share with your network and
              community. Have fun and enjoy. Don't forget not to stay on the
              internet more than you should — that even includes our community.
              We care.
            </p>
          </div>
        </ModalHeader>

        <ModalBody>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Sign in
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {error && (
              <div className="text-sm text-red-600 text-center">{error}</div>
            )}

            <div>
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
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
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
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
              <div className="mt-1">
                <button className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                  Forgot your password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Continue with
            </h4>
            <SSOButtons />
          </div>

          <div className="my-6 border-t border-gray-300"></div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignUpModal}
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </ModalBody>
      </div>
    </Modal>
  );
};

export default SignInModal;
