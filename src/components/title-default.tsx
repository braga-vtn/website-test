"use client";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
}
export const TitleDefault = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen pt-16 md:pt-48 relative overflow-hidden">
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
        <Balancer>{props.title}</Balancer>
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
          {props.description}
        </Balancer>
      </motion.p>
    </div>
  );
};
