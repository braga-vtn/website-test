"use client";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { VideoHome } from "./video-home";

export const ResourcesHelp = () => {
  return (
    <div className="flex flex-col min-h-screen pt-8 md:pt-24 relative overflow-hidden">
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
        <Balancer>FAQ</Balancer>
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
          Veja algumas dúvidas frequentes que nossos usuários tem sobre as aplicações da Vistune AI.
        </Balancer>
      </motion.p>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative text-center">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome />
        </div>
      </div>
    </div>
  );
};
