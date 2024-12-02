"use client";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { BackgroundLines } from "./ui/background-lines";

const people = [
  {
    id: 1,
    name: "Criador de Conteúdo",
    designation: "Exemplo de Agente",
    image:
      "/system/avatar/future-1.jpg",
  },
  {
    id: 2,
    name: "Analista de Dados",
    designation: "Exemplo de Agente",
    image:
      "/system/avatar/future-2.jpg",
  },
  {
    id: 3,
    name: "Pesquisador de Mercado",
    designation: "Exemplo de Agente",
    image:
      "/system/avatar/future-3.jpg",
  },
  {
    id: 4,
    name: "Moderador de Conteúdo",
    designation: "Exemplo de Agente",
    image:
      "/system/avatar/future-4.jpg",
  },
  {
    id: 5,
    name: "Organizador de Tarefas",
    designation: "Exemplo de Agente",
    image:
      "/system/avatar/future-5.jpg",
  },
  {
    id: 6,
    name: "Simplificador de Relatórios",
    designation: "Exemplo de Agente",
    image:
      "/system/avatar/future-6.jpg",
  },
];

export const SolutionAgents = () => {
  return (
    // Remova 'pointer-events-none' se precisar de interações no BackgroundLines
    <BackgroundLines className="absolute z-10 inset-0 h-full w-full flex items-center justify-center">
      <div className="text-center -mt-20 z-20">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative font-bold tracking-tight">
          Um Verdadeiro Braço Direito, <br /> Conheça os Agentes de IA.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400">
        Uma Inteligência Artificial personalizada para auxiliar em tarefas específicas do seu dia a dia.
        </p>
        <div className="flex flex-row items-center justify-center my-4 w-full relative z-30">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </BackgroundLines>
  );
};
