"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { VideoHome } from "./video-home";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "next-themes";
import { ComputerPlayground } from "./computer-playground";
import BlurIn from "./ui/blur-in";
import CardImage from "./card-image";

export function PlaygroundDescription() {
  const { theme } = useTheme();

  return (
    <>
      <div className="h-screen relative w-screen bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.3}
            maxSize={1.8}
            particleDensity={15}
            className="w-full h-full"
            particleColor={theme == "dark" ? "#FFFFFF" : "#000000"}
          />
        </div>
        <ComputerPlayground />
      </div>
      <TracingBeam className="px-6 my-10">
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24">
            O que é o Playground?
          </h1>
          <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
            O Playground da Vistune é uma ferramenta que atua como uma verdadeira ponte entre o mundo real e o virtual. Através dele, você pode se comunicar diretamente com modelos de Inteligência Artificial em diversas aplicações, desde textos, imagens, arquivos e vídeos. Na Vistune, não limitamos o acesso apenas aos modelos que desenvolvemos, como a Cleo e o Vision. Além deles, oferecemos acesso aos melhores modelos gerais disponíveis, incluindo os desenvolvidos pela OpenAI, como o ChatGPT, pelo Google, com o Gemini, pela Claude, pela Meta, com o LLama, entre muitos outros.
            <br /><br />
            Nosso objetivo com o Playground é oferecer acesso facilitado ao que há de melhor em Inteligência Artificial direcionada à produtividade. Além disso, uma das características distintivas é a utilização de Agentes de IA, que podem ser criados por você para contribuir ainda mais no seu dia a dia, executando tarefas com comportamentos específicos. A Vistune coloca você na linha de frente da tecnologia em IA.
          </p>
        </div>
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-10 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
            <VideoHome />
          </div>
          <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center">
            Compreender que a Inteligência Artificial é uma ferramenta poderosa para aumentar sua produtividade e qualidade é o primeiro passo para se adaptar ao novo mundo que surge a cada avanço tecnológico. Isso é semelhante ao impacto que a internet trouxe, por exemplo.
          </p>
        </div>
      </TracingBeam >
      <BlurIn
        word="Principais ferramentas"
        className="text-2xl md:text-5xl font-bold bg-clip-text pb-1 mt-10 text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className={`flex items-center justify-between space-x-4 mb-10`}>
        <CardImage size="medium" url={"/system/website/playground-form.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            As respostas geradas pela Inteligência Artificial podem incluir uma variedade de conteúdos, como fórmulas matemáticas, tabelas, imagens, links, código de programação, entre outros. O Playground da Vistune está cuidadosamente adaptado para renderizar essas mensagens de forma correta, facilitando assim a leitura e compreensão dos conteúdos recebidos.
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10 flex-row-reverse`}>
        <CardImage size="medium" url={"/system/website/playground-function-message.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            Uma caixa de ferramentas que gerencia sua interação com a Inteligência Artificial. Por meio desse espaço, você pode enviar mensagens de texto ou arquivos, além de qualificar suas mensagens usando IA, entre outras funções. Ao dominar esse menu, você assume o controle total do Playground!
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10`}>
        <CardImage size="medium" url={"/system/website/playground-control.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            Intercale entre os melhores modelos de IA disponíveis no mundo! No Playground, você pode criar e usar agentes de IA personalizados. Aproveite o que cada modelo tem de melhor a oferecer, e além disso, gere instruções utilizando um modelo interno da Vistune, especialmente desenvolvido para essa finalidade.
          </p>
        </div>
      </div>
    </>
  );
}
