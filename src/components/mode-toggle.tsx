"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon } from "lucide-react";
import { IconSunLow } from "@tabler/icons-react";
import { motion } from "framer-motion";
import ShinyButton from "./ui/shiny-button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="rounded-full cursor-pointer px-2" onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}>
        {theme === "light" && (
          <motion.div
            key={theme}
            initial={{
              x: 40,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <IconSunLow className="h-4 w-4 flex-shrink-0  dark:text-neutral-500 text-neutral-700" />
          </motion.div>
        )}

        {theme === "dark" && (
          <motion.div
            key={theme}
            initial={{
              x: 40,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeOut",
              duration: 0.3,
            }}
          >
            <MoonIcon className="h-4 w-4 flex-shrink-0 dark:text-neutral-500 text-neutral-700" />
          </motion.div>
        )}
      </div>
    )
  );
}
