import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function ComputerApplication() {
  return (
    <div className="overflow-hidden bg-transparent w-full">
      <MacbookScroll
        title={
          <span>
            Um aplicativo de IA completo <br /> Feito para você.
          </span>
        }
        showGradient={false}
      />
    </div>
  );
}
