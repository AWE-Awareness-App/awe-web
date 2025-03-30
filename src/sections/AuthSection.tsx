import React, { useState } from "react";
import SignInModal from "../components/SignInModal.tsx";
import SignUpModal from "../components/SignUpModal.tsx";

interface AuthSectionProp {
  onClose: () => void;
}

const AuthSection: React.FC<AuthSectionProp> = ({ onClose }) => {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative">
        {/* Login Modal */}
        <SignInModal
          isSignInModalOpen={showSignIn}
          onClose={() => {
            setShowSignIn(false);
            onClose(); // also close the entire AuthSection overlay
          }}
          onSwitchToSignUpModal={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />

        {/* Sign Up Modal */}
        <SignUpModal
          isSignUpModalOpen={showSignUp}
          onClose={() => {
            setShowSignUp(false);
            onClose();
          }}
          onSwitchToSignInModal={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />
      </div>
    </div>
  );
};

export default AuthSection;
