"use client";
import ShimmerButton from "./ui/shimmer-button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function StartUse() {
  const words = [
    {
      text: "Teste",
    },
    {
      text: "grátis",
    },
    {
      text: "o",
    },
    {
      text: "nosso",
    },
    {
      text: "Aplicativo.",
      className: "text-neutral-500 dark:text-neutral-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        O Mundo está em suas mãos com a Vistune
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="z-10 flex min-h-12 items-center justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Entrar no Aplicativo
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}
