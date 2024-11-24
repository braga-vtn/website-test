"use client";

import { useTheme } from "next-themes";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src={theme === 'light' ? '/logos/simbolo_vistune_black.svg' : '/logos/simbolo_vistune_white.svg'}
        width={20}
        height={20}
        alt="logo"
        className="sticky top-0 bg-transparent z-6 cursor-pointer"
      />
      <span className="font-medium text-black dark:text-white">Vistune AI</span>
    </Link>
  );
};
