"use client";

import { Background } from "@/components/background";
import ShimmerButton from "@/components/ui/shimmer-button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

type words = {
  text: string;
  className?: string;
}

type Props = {
  endCtaText1: string;
  endCtaButtonText: string;
  endCtaText2: words[];
}
export function CallToAction(props: Props) {

  return (
    <div className="relative">
      <div className="relative z-30">
        <div className="flex flex-col items-center justify-center h-[40rem]">
          <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
            {props.endCtaText1}
          </p>
          <TypewriterEffectSmooth words={props.endCtaText2} />
          <div className="z-10 flex min-h-12 items-center justify-center">
            <ShimmerButton className="shadow-2xl">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                {props.endCtaButtonText}
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
}
