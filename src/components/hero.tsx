"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { VideoHome } from "./video-home";

export const Hero = () => {
  const router = useRouter();

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col min-h-screen pt-16 md:pt-30 relative overflow-hidden">
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
        <Balancer>O Novo Mundo com a Vistune AI</Balancer>
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
        className="text-center mt-6 text-base md:text-xl text-current dark:text-muted-dark max-w-3xl mx-auto relative z-10"
      >
        <Balancer>
          A Vistune AI oferece a você as melhores ferramentas e soluções de Inteligência Artificial do mundo, com uma abordagem simples e prática.
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
        <Button className="hover:bg-neutral-800 dark:hover:bg-neutral-950" onClick={() => handleRedirect("https://app.vistune.ai")}>Testar Agora</Button>
        <Button
          variant="simple"
          as={Link}
          href="/company/about"
          className="flex space-x-2 items-center group"
        >
          <span>Sobre a Vistune</span>
          <HiArrowRight className="text-current group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome />
        </div>
      </div>
    </div>
  );
};
