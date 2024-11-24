"use client";
import { Logo } from "../Logo";
import { Button } from "../button";
import { NavBarItem } from "./navbar-item";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import ShinyButton from "../ui/shiny-button";
import { useRouter } from "next/navigation";

type subItems = {
  title: string;
  link: string;
};

type Props = {
  navItems: {
    link?: string;
    title: string;
    submenu: boolean;
    subItems?: subItems[];
    target?: "_blank";
  }[];
};

export const DesktopNavbar = ({ navItems }: Props) => {
  const { scrollY } = useScroll();
  const [showBackground, setShowBackground] = useState(false);
  const router = useRouter();

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  });

  return (
    <div
      className={cn(
        "w-full flex relative justify-between px-4 rounded-full bg-transparent transition duration-200",
        showBackground &&
        "bg-white/60 dark:bg-black/60 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] dark:shadow-[0px_-2px_0px_0px_var(--neutral-950),0px_2px_0px_0px_var(--neutral-950)]"
      )}
    >
      <AnimatePresence>
        {showBackground && (
          <motion.div
            key={String(showBackground)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 h-full w-full bg-neutral-100 dark:bg-black pointer-events-none [mask-image:linear-gradient(to_bottom,white,transparent,white)] rounded-full"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row gap-2 items-center">
        <Logo />
        <div className="flex items-center gap-1.5">
          <NavBarItem navItems={navItems} />
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <Button variant="disable" disable>
          <p className="text-neutral-500">Marketplace</p>
        </Button>
        <Button variant="disable" disable>
          <p className="text-neutral-500">University</p>
        </Button>
        <ShinyButton onClick={() => handleRedirect("https://app.vistune.ai/")}>Aplicativo</ShinyButton>
        <ModeToggle />
      </div>
    </div>
  );
};
