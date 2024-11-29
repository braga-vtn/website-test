import Link from "next/link";
import React from "react";

export const FooterLandingPage = () => {
  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-10 pb-20 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-center items-center ">
          <div className="text-center">
            <div className="mr-4  md:flex mb-4">
            </div>
            <div>Copyright &copy; 2024 Vistune Labs</div>
            <div className="mt-2">All rights reserved</div>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl md:text-9xl lg:text-[18rem] mb-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        VISTUNE AI
      </p>
    </div>
  );
};
