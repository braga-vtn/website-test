"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import BlurIn from "./ui/blur-in";
import { VideoHome } from "./video-home";

export function AgentsDecription() {
  return (
    <>
      <BlurIn
        word="Agentes de IA"
        className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          No início do automobilismo, os carros eram produzidos manualmente por equipes de dezenas de pessoas, o que encarecia o produto devido a dois fatores principais: alto custo de produção e baixa quantidade de veículos fabricados. Hoje em dia, graças aos avanços tecnológicos, milhares de carros são fabricados de forma eficiente. A Vistune aplica essa mesma filosofia à sua rotina. Sugerimos que atividades volumosas ou repetitivas sejam configuradas por você para que uma inteligência artificial cuide delas, economizando seu tempo – e, como dizem, tempo é dinheiro – além de aumentar a produtividade.
        </p>
      </div>
      <div className="p-4 z-30 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-8 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome />
        </div>
        <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          Dizem que o segredo do sucesso está na qualidade, e não na quantidade. Com a utilização de agentes de IA, aproveitamos o melhor de ambos os aspectos. Com boas instruções, esses agentes não apenas mantêm uma ótima qualidade, mas também aumentam drasticamente a produtividade!
        </p>
      </div>
      <TracingBeam className="px-6 mt-20">
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          <BlurIn
            word="Produtividade e Eficiência"
            className="text-2xl md:text-5xl mt-20 -mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
          />
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <div className="text-base max-w-7xl text-center prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-2xl max-w-7xl h-72 mx-auto mb-10 mt-20 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Antes de exemplificar os agentes de IA na Vistune, é ideal que você entenda o princípio de funcionamento deles. Primeiro ponto: agentes não são modelos de IA, entenda que os agentes são apenas uma modificação de um modelo, e uma modificação superficial por sinal. Claro que na Vistune você tem recursos adicionais como visualizar sites, ouvir vídeos no Youtube, treinamento e outros. Porém mesmo essas funções são superficiais e não alteram de fato um modelo de IA.
        </p>
        <p>
          Então, se não estamos lidando com um modelo, como exatamente definimos agentes de IA? Na Vistune, a estrutura funciona da seguinte maneira: utilizamos um Modelo Global, como os desenvolvidos por empresas como OpenAI ou Google, e combinamos com instruções e funções personalizadas. Essas instruções e funções, que você pode adicionar aqui na Vistune, permitem que os modelos de IA se comportem de acordo com suas necessidades específicas. Assim, chegamos ao que chamamos de Agentes de IA.
        </p>
      </>
    ),
    badge: "React",
    image:
      "/system/website/agents-1.jpg",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Para que servem os agentes, você pergunta? Eu respondo: imagine que você precisa escrever as descrições das suas postagens no Instagram. Assim como muitos, você provavelmente já passou algum tempo escolhendo as melhores palavras, emojis e formatação. Agora, imagine que uma Inteligência Artificial, devidamente treinada para essa tarefa, possa criar em segundos várias ideias de descrição para você. Incrível, não é? Além de ser extremamente prático, é também qualificado para melhorar sua produtividade.
        </p>
        <p>
          Escale essa imaginação, agora você é o responsável pela descrição de 50 postagens por dia. Haja criatividade para diversificar sem perder a essencia e qualidade. Sem falar no arduo trabalho que gera para produzir esse material. Com nossos Agentes de IA, você realizaria isso, antes do café da manhã.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
    "/system/website/agents-2.jpg",
  }
];

