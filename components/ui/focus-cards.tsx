"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: {
      content: React.ReactNode;
      bg?: string;
    };
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-xl relative overflow-hidden h-72 w-full transition-all duration-300 ease-out border border-white/10 bg-transparent backdrop-blur-md p-6",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div
        className={cn(
          "w-full h-full flex flex-col items-center justify-center text-white text-center gap-2 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-90"
        )}
      >
        {card.content}
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardProps = {
  content: React.ReactNode;
};

export function FocusCards({ cards }: { cards: CardProps[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto w-full px-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}