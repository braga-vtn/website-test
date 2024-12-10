"use client";
import { useEffect, useState } from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export const Companies = () => {
  let [logos, setLogos] = useState([
    [
      {
        title: "Amazon",
        src: "/partners/amazon.png",
      },
      {
        title: "Facebook",
        src: "/partners/facebook.png",
      },
      {
        title: "Shopify",
        src: "/partners/shopify.png",
      },
      {
        title: "Visa",
        src: "/partners/visa.png",
      },
    ],
    [
      {
        title: "Coca Cola",
        src: "/partners/cocacola.png",
      },
      {
        title: "Gillette",
        src: "/partners/gillette.png",
      },
      {
        title: "Microsoft",
        src: "/partners/microsoft.png",
      },
      {
        title: "Uber",
        src: "/partners/uber.png",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 3000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts or isAnimating changes
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 py-10 md:pt-40 md:pb-24">
      <Heading as="h2">Aprovado por Grandes Empresas</Heading>
      <Subheading className="text-center text-current dark:text-muted-dark">
        Vistune AI é utilizada diariamente por +12k de usuários.
      </Subheading>

      <div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-20">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                y: -40,
                opacity: 0,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.title}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.title}
                width="1000"
                height="1000"
                className="grayscale md:h-48 md:w-48 h-48 w-48 object-contain filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
