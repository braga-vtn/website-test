"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function ComputerReferral() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold mb-4 text-black dark:text-white">
              Indique e ganhe prêmios <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Plano de Indicação
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/system/website/app-referral.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
