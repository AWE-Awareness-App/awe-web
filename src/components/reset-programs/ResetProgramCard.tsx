import React from "react";

type ResetProgramProps = {
  tag: string;
  title: string;
  price: string;
  description: string;
  benefit: string;
  buttonText: string;
  onClick: () => void;
  bgColor: string;
};

const ResetProgramCard: React.FC<ResetProgramProps> = ({
  tag,
  title,
  price,
  description,
  benefit,
  buttonText,
  onClick,
  bgColor,
}) => (
  <div
    className={`flex flex-col justify-between rounded-xl shadow-lg p-6 mb-6`}
    style={{ background: bgColor, minWidth: 280, maxWidth: 350, minHeight: 320 }}
  >
    <div>
      <div className="mb-3">
        <span className="inline-block bg-white bg-opacity-60 px-4 py-1 rounded-full text-sm font-medium">
          {tag}
        </span>
      </div>
      <h2 className="font-bold text-xl text-[#1a2951] mb-1">{title}</h2>
      <div className="font-bold text-lg mb-2">{price}</div>
      <div className="mb-2">{description}</div>
      <div className="mb-2">
        <span className="font-bold">Benefit:</span> {benefit}
      </div>
    </div>
    <button
      onClick={onClick}
      className="mt-4 bg-black text-white py-2 px-5 rounded-md font-semibold transition hover:bg-gray-900"
    >
      {buttonText}
    </button>
  </div>
);

export default ResetProgramCard;