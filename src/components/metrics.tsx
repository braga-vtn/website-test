"use client"
import React from "react";
import CardImage from "./card-image";
import BlurIn from "./ui/blur-in";
import { NumberTicker } from "./ui/number-ticker";
import { Progress } from "./ui/react-progress";

export const Metrics = () => {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <BlurIn
        word="Números Que Falam Mais Alto"
        className="text-2xl md:text-5xl mt-20 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="flex items-center mt-20 w-full">
        <div className="relative w-1/3 text-semibold text-9xl">
          <NumberTicker value={85} />%
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <Progress value={progress} className="w-96 mb-5" />
          <p className="text-lg font-medium">
            dos clientes retomam a interação conosco depois de utilizarem nosso sistema.
          </p>
        </div>
      </div>
      <div className="flex items-center w-full justify-between space-x-4 mb-10">
        <CardImage size="medium1" url={"/system/marketplace-1.jpg"} />
        <div className="flex flex-col p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal w-full text-base text-current dark:text-neutral-300">
            Redução de
          </p>
          <div className="flex items-baseline relative w-1/3 text-semibold text-9xl">
            <NumberTicker value={60} />
            <span>%</span>
          </div>
          <p className="font-normal w-full text-base text-current dark:text-neutral-300">
            dos clientes voltam a interagir após usar nosso sistema.
          </p>
        </div>
      </div>
      <div className="flex items-center w-full justify-between space-x-4 mb-10">
        <div className="flex flex-col p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal w-full text-base text-current dark:text-neutral-300">
            Aumento de
          </p>
          <div className="flex items-baseline relative w-1/3 text-semibold text-9xl">
            <NumberTicker value={40} />
            <span>%</span>
          </div>
          <p className="font-normal w-full text-base text-current dark:text-neutral-300">
            na taxa de conversão de leads
          </p>
        </div>
        <CardImage size="medium1" url={"/system/marketplace-1.jpg"} />
      </div>
    </>
  );
};
