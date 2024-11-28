"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Soon() {
  const words = [
    {
      text: "Em",
    },
    {
      text: "Breve",
    },
    {
      text: "na",
    },
    {
      text: "Vistune.",
      className: "text-neutral-500 dark:text-neutral-500",
    }
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Estamos em pleno desenvolvimento
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
