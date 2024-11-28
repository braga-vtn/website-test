"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { VideoHome } from "./video-home";

export function UniversityDescription() {
  return (
    <TracingBeam className="px-6">
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome />
        </div>
      </div>
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          Se estivéssemos na década de 1980, provavelmente discutiríamos como incorporar a internet em nossas rotinas diárias. As mudanças destacam uma das grandes qualidades da humanidade: a constante evolução. Na Vistune, entendemos isso como nossa missão. Estamos comprometidos em oferecer uma plataforma com aulas diárias sobre diversos nichos, comunidades e outros recursos que ajudam você a se adaptar ao uso da inteligência artificial tanto no cotidiano quanto em seu negócio.
        </p>
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24">
          Nosso Objetivo
        </h1>
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          Na Vistune, estamos desenvolvendo constantemente três plataformas: o Aplicativo, a University e o Marketplace. Todas se complementam e interagem amplamente em suas funcionalidades. Na University, nosso objetivo é ensinar ou contribuir de alguma forma — seja por meio de nosso canal ou dos Criadores de Conteúdo — para aprimorar o seu uso da inteligência artificial. Isso pode ocorrer através do nosso aplicativo, na comercialização ou no consumo de produtos e serviços do marketplace, ou simplesmente ao agregar conhecimento ao seu dia a dia.
          <br /><br />
          Para entender a Vistune University, é importante compreender o papel dos &quot;Criadores de Conteúdo&quot;. Na Vistune como disse, nossas plataformas estão integradas, o que levou a ter a função &quot;Criador de Conteúdo&quot;. Esta função permite que usuários selecionados criem canais e comunidades para postar vídeos e materiais, similar ao YouTube. No entanto, todo o conteúdo é gratuito e passa por validação da equipe da Vistune para garantir a qualidade. Além disso, os criadores têm acesso ao marketplace, onde podem comercializar conteúdos pagos, mentorias e serviços.
          <br /><br />
          Como filosofia, a Vistune busca sempre contribuir para que o uso de inteligência artificial seja conduzido de forma responsável na sociedade de qualquer país. Com esse compromisso e visando garantir acesso a todos, disponibilizamos gratuitamente nossa plataforma e todo o seu conteúdo. Esperamos que, cada vez mais, as pessoas acompanhem as aulas e participem da comunidade, pois nosso maior retorno é auxiliar as pessoas na adaptação ao novo mundo.
        </p>
      </div>
    </TracingBeam >
  );
}
