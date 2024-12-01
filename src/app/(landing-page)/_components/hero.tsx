"use client";
import Balancer from "react-wrap-balancer";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { Button } from "@/components/button";
import { CardVideo } from "./card-video";
import { BadgeLandingPage } from "./badge";
import { GlobeLandingPage } from "./globeLandingPage";
import BlurIn from "@/components/ui/blur-in";
import CardImage from "@/components/card-image";

type Props = {
  badge: string;
  headline: string;
  headlineDesc: string;
  ctaText: string;
  videoSrc: string;
}

export const SectionHero = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center"
      >
        <BadgeLandingPage text={props.badge} />
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>{props.headline}</Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          {props.headlineDesc}
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <Button>{props.ctaText}</Button>
      </motion.div>
      <CardVideo src={props.videoSrc} />
      <div className={`flex items-center w-full justify-between space-x-4 mb-10 flex-row-reverse`}>
        <GlobeLandingPage />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <h2 className="text-lg md:text-4xl text-black dark:text-white max-w-4xl">
            Agilidade nas <span className="font-semibold">Conexões</span>
          </h2>
          <p className="mt-4 font-normal text-base text-current dark:text-neutral-300">
            Conectar, converter e a Vistune faz o resto
            <br /><br />
            Vivemos em um mundo onde cada interação com o cliente pode ser decisiva. Com a Vistune, as conversas deixam de ser apenas um diálogo e passam a ser uma oportunidade de criar conexões duradouras e resultados
            concretos.
          </p>
        </div>
      </div>
      <BlurIn
        word="Por que Escolher a Vistune?"
        className="text-2xl md:text-5xl mt-20 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="max-w-7xl mx-auto antialiased pt-2 relative">
        <p className="font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          Nossas soluções são desenhadas para transformar interações em experiências inesquecíveis
        </p>
      </div>
      <div className="flex items-center justify-between w-full space-x-4 mb-10">
        <CardImage size="medium1" url={"/system/marketplace-1.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-semibold w-full text-base text-current dark:text-neutral-300">
            Respostas Rápidas e Precisas <br />
          </p>
          <p className="font-normal w-full text-base text-current dark:text-neutral-300">
            Com a Cleo, sua empresa responde em segundos, encantando clientes.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full space-x-4 mb-10">
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-semibold w-full text-base text-current dark:text-neutral-300">
            Personalização que Engaja <br />
          </p>
          <p className="font-normal w-full text-base text-current dark:text-neutral-300">
            IA que entende e adapta cada resposta às necessidades dos seus clientes.
          </p>
        </div>
        <CardImage size="medium1" url={"/system/marketplace-1.jpg"} />
      </div>
      <div className="flex items-center justify-between space-x-4 w-full mb-10">
        <CardImage size="medium1" url={"/system/marketplace-1.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-semibold w-full text-base text-current dark:text-neutral-300">
            Redução de Custos Operacionais <br />
          </p>
          <p className="font-normal w-full text-base text-current dark:text-neutral-300">
            Atenda mais clientes, com menos recursos, sem perder a qualidade.
          </p>
        </div>
      </div>
      <BlurIn
        word="Veja a Transformação em Tempo Real"
        className="text-2xl md:text-5xl mt-20 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="max-w-7xl mx-auto antialiased pt-2 relative">
        <p className="font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
        Uma imagem vale mais que mil palavras. Explore como a Cleo interage com seus clientes em diversos cenários.
        </p>
      </div>
      <CardVideo src={"/system/example-video.mp4"} />
    </div>
  );
};
