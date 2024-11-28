"use client";
import ShimmerButton from "./ui/shimmer-button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function StartUniversity() {
  const words = [
    {
      text: "Em",
    },
    {
      text: "Breve",
    },
    {
      text: "a",
    },
    {
      text: "Vistune",
      className: "text-neutral-500 dark:text-neutral-500",
    },
    {
      text: "University.",
      className: "text-neutral-500 dark:text-neutral-500",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Conhecimento gratuito na palma da mão
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
