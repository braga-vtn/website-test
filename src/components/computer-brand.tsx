"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function ComputerBrand() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold mb-2 text-black dark:text-white">
              A Marca da Vistune <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Em seu Negócio
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/system/website/brand.jpg`}
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
