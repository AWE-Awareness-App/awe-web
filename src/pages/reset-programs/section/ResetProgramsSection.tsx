import React from "react";
import ResetProgramCard from "@/components/reset-programs/ResetProgramCard";
import { trackEvent } from "@services/Analytics";
import { useRouter } from "next/router";

const programCards = [
  {
    tag: "Free",
    title: "Free Reset",
    price: "$0",
    description:
      "25 minutes, live online. No camera, no talking. Just listen and follow along.",
    benefit: "Feel calmer, clearer, and more grounded in one session.",
    buttonText: "Join Free Reset",
    bgColor: "#e6f0fa",
    buttonUrl: "https://book-free-reset.example.com",
  },
  {
    tag: "Subscription",
    title: "Starter Session",
    price: "$49/month",
    description:
      "Weekly guided resets to help you build a consistent habit of calm.",
    benefit: "Stay grounded with reminders and rotating themes.",
    buttonText: "Join Starter Session",
    bgColor: "#b8d1ea",
    buttonUrl: "https://book-starter-session.example.com",
  },
  {
    tag: "Package",
    title: "Reset Bundle",
    price: "$149",
    description:
      "Three guided sessions plus a personal welcome call.",
    benefit: "Try a short arc that helps you notice real change.",
    buttonText: "Join Reset Bundle",
    bgColor: "#faeedc",
    buttonUrl: "https://book-reset-bundle.example.com",
  },
  {
    tag: "Personalized",
    title: "Foundations",
    price: "$299",
    description:
      "A private consultation plus one month of guided resets.",
    benefit: "Understand your nervous system and start building resilience.",
    buttonText: "Join Foundations",
    bgColor: "#cbe7d6",
    buttonUrl: "https://book-foundations.example.com",
  },
];

const ResetProgramsSection: React.FC = () => {
    const router = useRouter();
    const handleButtonClick = (action: string, card: typeof programCards[number]) => {
        trackEvent?.({
            category: "User Actions",
            action,
            label: action,
        });
        if (card.tag === "Free") {
            router.push("/reset-programs/free-reset");
        } else {
            window.alert("Coming soon!");
        }
    };
  return (
    <div className="max-w-5xl mx-auto flex flex-wrap gap-x-6 gap-y-8 justify-center">
      {programCards.map((card) => (
        <ResetProgramCard
          key={card.title}
          {...card}
          onClick={() =>
              handleButtonClick(`Book Now - ${card.title}`, card)
          }
        />
      ))}
    </div>
  );
};

export default ResetProgramsSection;
