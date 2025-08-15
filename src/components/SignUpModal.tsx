import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import SSOButtons from "./SSOButtons";

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
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [password,  setPassword]  = useState("");
  const [error,     setError]     = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          role: "PATIENT",
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Sign up failed");
      }

      // Auto login
      await signIn("credentials", {
        redirect: true,
        email,
        password,
        callbackUrl: "/",
      });
    } catch (err: any) {
      setError(err.message || "Unexpected error");
    }
  };

  return (
    <Modal
      show={isSignUpModalOpen}
      onClose={onClose}
      tabIndex={-1}
      className="inset-0 z-50 flex items-center justify-center max-w-lg mx-auto rounded-lg"
      dismissible
    >
      <div className="p-6 md:p-8 w-full">
        {/* Centered Welcome Back + paragraph */}
        <ModalHeader className="mb-4">
          <div className="text-center w-full">
            <div className="text-2xl font-bold flex items-center justify-center">
              Welcome Back <span className="ml-2">👋</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Get Ready to join a community to help you gain better digital habits
              and real connections. Please invite a friend or family member to
              also sign up so you can be connected, motivate each other and share
              access and progress.
            </p>
          </div>
        </ModalHeader>

        <ModalBody>
          {/* Centered Sign Up heading */}
          <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-4">
            Sign Up
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-sm text-red-600 text-center">{error}</div>}

            {/* First & Last Name in one row with gap */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Email */}
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
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Password */}
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
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Sign up button */}
            <button className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded" type="submit">
              Sign up
            </button>

            {/* Terms */}
            <p className="text-xs text-center text-gray-500">
              By signing up, you agree to the{" "}
              <Link
                href="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Terms and conditions
              </Link>
              .
            </p>
          </form>

          {/* Continue with + icons (reusable component) */}
          <div className="mt-6 text-center">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Continue with
            </h4>
            <SSOButtons />
          </div>
        </ModalBody>

        <ModalFooter className="justify-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignInModal}
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
