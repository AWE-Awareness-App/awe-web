import React from "react";

const SSOButtons: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="p-2 rounded-lg border border-gray-300 bg-white hover:shadow">
        <img src="/images/apple-icon.png" alt="Apple" className="w-8 h-8" />
      </button>
      <button className="p-2 rounded-lg border border-gray-300 bg-white hover:shadow">
        <img src="/images/microsoft-icon.svg" alt="Microsoft" className="w-7 h-7" />
      </button>
      <button className="p-2 rounded-lg border border-gray-300 bg-white hover:shadow">
        <img src="/images/facebook-icon.png" alt="Facebook" className="w-7 h-7" />
      </button>
      <button className="p-2 rounded-lg border border-gray-300 bg-white hover:shadow">
        <img src="/images/google-icon.svg" alt="Google" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default SSOButtons;
