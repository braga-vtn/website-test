"use client";
import React from "react";
import { VideoHome } from "./video-home";
import { Button } from "./button";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import { ImagesSlider } from "./ui/images-slider";

export function BrandDecription() {
  const images = [
    "/logos/vistune/lockup-white.jpg",
    "/logos/vistune/lockup.jpg",
    "/logos/vistune/logomark-white.jpg",
    "/logos/vistune/logomark.jpg",
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/logos.zip';
    link.download = 'logos.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-7xl mx-auto antialiased relative">
      <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-5">
        Normas de Utilização
      </h1>
      <p className="mt-5 font-normal text-base text-current dark:text-neutral-300 text-center">
        O uso do logotipo da Vistune AI é restrito e deve seguir condições específicas para assegurar uma representação adequada e consistente da marca. É essencial que o logotipo seja utilizado exclusivamente em contextos diretamente relacionados aos nossos serviços, sempre respeitando o critério do bom senso. Deve ser empregado exatamente como fornecido, reconhecendo que pertence à Vistune. Qualquer desvio pode comprometer a integridade da marca e causar confusão entre os consumidores.
        <br /><br />
        Por outro lado, várias práticas devem ser evitadas para não infringir as diretrizes de uso do logotipo da Vistune AI. É proibido usar o logotipo de forma que apresente de maneira enganosa a relação com a Vistune ou que sugira falsamente endosso ou patrocínio de produtos ou serviços. O logotipo não deve ser mais destacado que suas próprias marcas, nem utilizado fora do contexto de nossos serviços. Além disso, o logotipo não deve aparecer em mercadorias tangíveis, como materiais promocionais ou itens físicos, nem ser combinado com outros elementos para criar a impressão de um novo logotipo.
      </p>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-10 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <ImagesSlider className="h-[40rem]" images={images} />
        </div>
      </div>
      <Button className="mx-auto mt-6" onClick={handleDownload}>
        Baixar logos <ArrowDownToLine className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
}