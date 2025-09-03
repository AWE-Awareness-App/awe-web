import React, { useState } from "react";

const faqItems = [
  {
    question: "Is the Free Reset really free?",
    answer:
      "Yes, it is completely free. No payment, sign-up, or subscription required.",
  },
  {
    question: "Do I need to turn on my camera or microphone?",
    answer:
      "No. You can participate with your camera and microphone off. Just log in, listen, and follow along.",
  },
  {
    question: "What happens in a session?",
    answer:
      "You’ll be guided through 25 minutes of breath and awareness practices designed to calm your nervous system and restore focus.",
  },
  {
    question: "How is this different from meditation?",
    answer:
      "The Free Reset uses science-based nervous system regulation techniques, which may include breath, movement, and awareness practices, not just meditation.",
  },
];

const FreeResetSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleJoinClick = () => {
    window.open("https://1f25s.share.hsforms.com/2fbqnWiwPTcCvE08IMMCa4A", "_blank", "noopener noreferrer");
  };

  return (
    <div className="bg-white min-h-screen pb-12">
      {/* Banner Section */}
      <div className="bg-[#4b76b7] py-12 px-4 flex flex-col items-center text-white">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-4">
          Free Reset: A 25-Minute Guided Nervous System Reset Program
        </h1>
        <p className="max-w-2xl text-center mb-6">
          Live, science based, and completely free. Shift out of stress mode and restore calm focus.<br />
          No camera, no mic. Just listen and follow along.
        </p>
        <div className="font-bold text-lg mb-3">Price: Free</div>
        <button
          className="bg-black text-white py-2 px-5 rounded-md font-semibold transition hover:bg-gray-900"
          onClick={handleJoinClick}
        >
          Join Free Reset
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-10">
        {/* What it is */}
        <h2 className="font-bold text-xl text-[#2350a0] mb-2">What it is</h2>
        <p className="mb-3">
          The Free Reset is a <b>25-minute guided nervous system reset session</b>. It is completely free and live online, designed to help anyone experience the benefits of nervous system regulation.
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li>No camera or microphone required</li>
          <li>No pressure to participate</li>
          <li>Just log in, listen, and reset</li>
        </ul>

        {/* How it works */}
        <div className="bg-[#e6f0fa] rounded-lg p-6 mb-8">
          <h3 className="font-bold text-lg text-[#2350a0] mb-2">How it works</h3>
          <ol className="list-decimal pl-5">
            <li>
              <b>Sign up</b> — receive a confirmation with session info and the weekly theme.
            </li>
            <li>
              <b>Join live</b> — log in quietly. No camera or microphone required.
            </li>
            <li>
              <b>Reset</b> — follow 25 minutes of guided breath and awareness practices that calm your nervous system and improve focus.
            </li>
          </ol>
        </div>

        {/* Why it works */}
        <h2 className="font-bold text-xl text-[#2350a0] mb-2">Why it works</h2>
        <p className="mb-6">
          Resets use simple <b>breath, focus, and awareness techniques</b> that directly engage your <b>autonomic nervous system</b>.
          This helps shift your body out of fight or flight and into a calmer state, lowering stress hormones and restoring focus.
        </p>

        {/* What you will experience */}
        <h2 className="font-bold text-xl text-[#2350a0] mb-2">What you will experience</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Clear instructions that are easy to follow from anywhere</li>
          <li>No pressure to participate — simply log in, listen, and reset</li>
          <li>Noticeable changes in how your body feels in about 25 minutes</li>
          <li>New weekly themes to help you experiment with different techniques</li>
        </ul>

        {/* FAQ Section */}
        <h2 className="font-bold text-xl text-[#2350a0] mb-4">Frequently Asked Questions</h2>
        <div className="mb-12">
          {faqItems.map((item, idx) => (
            <div key={item.question} className="mb-2">
              <button
                className="w-full text-left bg-white border rounded px-4 py-2 font-semibold"
                onClick={() => handleFaqClick(idx)}
                aria-expanded={openIndex === idx}
              >
                ▶ {item.question}
              </button>
              {openIndex === idx && (
                <div className="bg-gray-50 border-l px-4 py-2">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-black text-white py-2 px-5 rounded-md font-semibold transition hover:bg-gray-900"
            onClick={handleJoinClick}
          >
            Join Free Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeResetSection;