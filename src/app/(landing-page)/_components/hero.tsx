"use client";
import Balancer from "react-wrap-balancer";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import { Button } from "@/components/button";
import { CardVideo } from "./card-video";
import { BadgeLandingPage } from "./badge";
import { GlobeLandingPage } from "./globeLandingPage";

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
      <GlobeLandingPage />
    </div>
  );
};
