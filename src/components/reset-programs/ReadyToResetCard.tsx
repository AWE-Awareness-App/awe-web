import React from "react";
import { useRouter } from "next/router";

const ReadyToResetCard: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="mt-12 mb-8 flex justify-center"
      style={{ width: "100%" }}
    >
      <div
        className="w-full max-w-5xl bg-[#faf5ed] rounded-xl shadow-md py-10 px-6 flex flex-col items-center"
        style={{ minHeight: 170 }}
      >
        <h2 className="font-bold text-2xl text-center mb-2">Ready to Reset?</h2>
        <p className="text-center mb-5">
          Start free today or choose a program that fits your needs.
        </p>
        <button
          className="bg-black text-white py-2 px-5 rounded-md font-semibold transition hover:bg-gray-900"
          onClick={() => router.push("/reset-programs/free-reset")}
        >
          Join a Free Reset
        </button>
      </div>
    </div>
  );
};

export default ReadyToResetCard;