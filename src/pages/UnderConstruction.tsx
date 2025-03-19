import React from "react";

const UnderConstruction: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">🚧 Under Construction 🚧</h1>
            <div className="flex items-center space-x-3 p-4">
                <img src="images/awe-1.jpg" alt="Logo" className="h-16 w-16" />
                <span className="text-2xl font-bold text-blue-900">AWE | Awareness, Wellness, Enjoyment</span>
            </div>
            <p className="text-lg text-gray-600">We're working hard to bring you something amazing. Stay tuned!</p>
        </div>
    );
};

export default UnderConstruction;
