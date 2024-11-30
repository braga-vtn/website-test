"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { VideoHome } from "./video-home";
import { OrbitingSolution } from "./orbiting-solution";

export function ModelsDescription() {
  return (
    <>
      <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24 pb-2">
        Nossos Modelos
      </h1>
      <div className={`flex items-center justify-between space-x-4 mb-10`}>
        <OrbitingSolution text="Cleo" />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="font-normal text-base text-current dark:text-neutral-300 text-center">
            Se você realiza o atendimento ao cliente do seu negócio ou possui uma equipe dedicada a essa função, é ciente do esforço necessário para garantir respostas de qualidade, velocidade no atendimento e a constante busca por informações sobre o cliente.
            <br /><br />
            Além disso, é um desafio ampliar o investimento em marketing resultando em maior demanda de atendimentos sem recursos humanos adequados. Para solucionar esse problema, apresentamos a Cleo, nosso modelo de inteligência artificial, que oferece respostas precisas, humanizadas, rápidas e sem restrições de volume de respostas por minuto.
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10 flex-row-reverse`}>
        <OrbitingSolution text="Vision" />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="font-normal text-base text-current dark:text-neutral-300 text-center">
            Já considerou contratar um analista de dados para suas campanhas ou sentiu a necessidade de um olhar técnico em suas operações para alcançar os resultados desejados? A Vistune apresenta o Vision, nosso modelo de inteligência artificial dedicado exclusivamente a analisar suas métricas e sugerir melhorias no desempenho de suas campanhas de anúncios, vendas, alcance de clientes e muito mais.
            <br /><br />
            O Vision monitora de perto todas as métricas do seu negócio através de integrações com o Google e a Meta, permitindo que o sistema acesse e metrifique cada aspecto relevante. Com esses dados em mãos, nosso modelo realiza análises detalhadas. Confie no Vision para uma avaliação profunda e precisa da sua empresa a qualquer hora.
          </p>
        </div>
      </div>
      <TracingBeam className="px-6 mb-10">
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24">
            Utilidade
          </h1>
          <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
            A Vistune reconhece que modelos especializados, como a Cleo e o Vision, podem contribuir significativamente tanto na vida pessoal quanto no ambiente corporativo. Por exemplo, a Cleo, em conjunto com nosso sistema de bate-papo, é capaz de gerenciar e organizar milhares de atendimentos por minuto, um feito que nenhuma equipe, por mais eficiente que seja, consegue igualar. Tais modelos não são destinados a substituir a mão de obra humana, mas sim a possibilitar que as empresas ampliem seus investimentos em marketing e aumentem o volume de clientes sem sobrecarregar suas equipes.
            <br /><br />
            Da mesma forma, o Vision, que se concentra na análise de dados, atua como um braço direito para a empresa ao oferecer insights valiosos que muitas vezes passam despercebidos por humanos em meio a inúmeras métricas, um problema inexistente para um modelo de IA. A Vistune se empenha em aumentar continuamente a capacidade desses modelos, bem como em desenvolver novos modelos especializados.
          </p>
        </div>
      </TracingBeam >
    </>
  );
}
