"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import BlurIn from "./ui/blur-in";

export function ComputerOmnichannel() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
              Conecte todas redes sociais <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Em um Bate-Papo
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/system/app/chat-2.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <BlurIn
        word="Um lugar Omnichannel"
        className="text-2xl md:text-5xl font-bold bg-clip-text pb-1 text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <p className="my-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          Omnichannel representa a integração de diferentes canais de comunicação, como WhatsApp, Instagram, Telegram e outros, em um único lugar, como o nosso bate-papo. Imagine a eficiência de gerenciar todas as mensagens de diversos canais e, além disso, permitir que a Cleo, nosso modelo de inteligência artificial especializado em atendimento ao cliente, responda a todas essas interações.
        </p>
      </div>
    </div>
  );
}
