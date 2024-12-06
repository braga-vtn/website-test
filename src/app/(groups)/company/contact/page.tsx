"use client";
import { Background } from "@/components/background";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { ContactForm } from "@/components/contact";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto">
            <Image
              src={theme === 'light' ? '/logos/simbolo_vistune_black.svg' : '/logos/simbolo_vistune_white.svg'}
              width={130}
              height={130}
              alt="logo"
              className="sticky mx-auto bg-transparent z-6 cursor-pointer"
            />
            <p
              className={cn(
                "font-normal text-base text-center text-neutral-500 dark:text-neutral-200 mt-8"
              )}
            >
            </p>
          </div>
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
}
