import React, { useState } from "react";
import ReactDOM from "react-dom";
import PopUpBox from "../components/PopUpBox.tsx";

const BlankPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        data-modal-target="static-modal"
        data-modal-toggle="static-modal"
        className="block text-gray-700 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Login
      </button>

      {isOpen &&
        ReactDOM.createPortal(
          <PopUpBox title="jk" description="kk" />,
          document.body
        )}
    </div>
  );
};

export default BlankPage;
