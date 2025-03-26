import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";

interface LoginModalProp {
  email: string;
  password: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProp> = ({
  email,
  password,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      show={isOpen}
      onClose={onClose}
      tabIndex={-1}
      className="inset-0 
            z-50 
            flex 
            items-center 
            justify-center"
      size="md"
      popup
    >
      <ModalHeader>
        <p> Welcome Back</p>
        <p>
          Thank you for using AWE. Please share with your network and community.
          Have fun and enjoy. Don't forget not to stay on the internetmore than
          you should - that even includes our community. We care.
        </p>
      </ModalHeader>
      <ModalBody>
        <div>
          {/* Left Column*/}
          <div>
            <h3 className="">Sign in</h3>
            <form>
              <div className="">
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" placeholder="name@company.com" />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="••••••••" />
                <div>
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
              <button type="submit">Sign in</button>
            </form>
          </div>
          {/* Right Column*/}
          <div>
            <h3>Sign in with social icons</h3>
            <div>
              <button>
                <img src="/icons/apple.svg" alt="Apple" />
                Continue with Apple
              </button>
              <button>
                <img src="/icons/microsoft.svg" alt="Microsoft" />
                Continue with Microsoft
              </button>
              <button>
                <img src="/icons/google.svg" alt="Google" />
                Continue with Google
              </button>
              <button>
                <img src="/icons/facebook.svg" alt="Facebook" />
                Continue with Facebook
              </button>
              <button>Sign in with email</button>
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button onClick={onClose}>I Accept</button>
        <button onClick={onClose}>Decline</button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginModal;
