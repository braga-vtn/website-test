"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { VideoHome } from "./video-home";

export function OmnichannelDescription() {
  return (
    <TracingBeam className="px-6 my-10">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24">
          Como Funciona
        </h1>
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          Ao conectar seus aplicativos na seção &quot;Integrações&quot;, todas as mensagens recebidas por esses apps são automaticamente refletidas no Bate-papo da Vistune, centralizando tudo em um só lugar. Assim, não há mais necessidade de alternar entre aplicativos para verificar mensagens novas, garantindo que a Vistune economize seu recurso mais valioso: o tempo.
          <br /><br />
          Assim como é possível visualizar as mensagens recebidas, você pode enviar respostas para esses canais. Basta selecionar o canal desejado, digitar sua mensagem e enviar. Funções avançadas, como o aprimoramento de mensagens por inteligência artificial, estão sempre disponíveis para você.
        </p>
      </div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome />
        </div>
        <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center">
          Conforme explicado, para ativar o Omnichannel, basta conectar suas contas na seção &quot;Integrações&quot;. É importante lembrar que essas integrações estão disponíveis exclusivamente para o Plano Advanced, sem custos adicionais para integrações realizadas!
        </p>
      </div>
    </TracingBeam >
  );
}
