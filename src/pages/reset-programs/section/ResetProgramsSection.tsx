import React from "react";
import ResetProgramCard from "@/components/reset-programs/ResetProgramCard";
import { trackEvent } from "@services/Analytics";
import { useRouter } from "next/router";
import { programCards } from "@/data/programCardsData";

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