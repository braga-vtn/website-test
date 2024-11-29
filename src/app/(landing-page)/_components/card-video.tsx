"use client";
import React from "react";
import { VideoHome } from "@/components/video-home";

type Props ={
  src?: string;
}

export function CardVideo(props: Props) {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome src={props.src} />
        </div>
      </div>
    </div >
  );
}
