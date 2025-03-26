import React, { useState } from "react";
import PopUpBox from "../components/PopUpBox.tsx";
import LoginModal from "../components/LoginModal.tsx";

const BlankPage: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="block text-gray-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsLoginOpen(true)}
      >
        Login
      </button>
      <LoginModal
        email="email"
        password="password"
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
      <button
        data-modal-target="popup-modal"
        data-modal-show="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-gray-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        PopUpBox
      </button>

      <PopUpBox
        title="Terms of Service"
        description="Your terms content goes here."
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />

      {/* {isOpen &&
        ReactDOM.createPortal(
          <PopUpBox title="jk" description="kk" />,
          document.body
        )} */}
    </div>
  );
};

export default BlankPage;
