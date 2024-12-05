"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import { VideoHome } from "./video-home";

export function ComputerAbout() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold mb-2 text-black dark:text-white">
              Conheça um pouco mais <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Sobre a Vistune AI
              </span>
            </h1>
          </>
        }
      >
        <VideoHome />
      </ContainerScroll>
    </div>
  );
}
