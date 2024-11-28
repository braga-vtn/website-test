"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { FlipWords } from "./ui/flip-words";

export function CreatorContentDescription() {
  const words = ["vídeos", "comunidades", "canais", "produtos"];

  return (
    <TracingBeam className="px-6 mt-20">
      <div className="max-w-7xl mx-auto antialiased relative">
        <div className="h-auto mt-20 mb-10 flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
            Crie
            <FlipWords words={words} /> <br />
            nas plataformas da Vistune
          </div>
        </div>
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          Na Vistune, promovemos o acesso gratuito a conhecimento de qualidade, como evidenciado pela Vistune University, que oferece acesso livre a aulas, lives, comunidades e materiais disponibilizados tanto pela equipe da Vistune quanto pelos criadores de conteúdo. Esse movimento reforça nossa filosofia de preparar nossos usuários para o Novo Mundo. Para você, &quot;Criador de Conteúdo&quot;, trata-se de uma oportunidade de se tornar uma referência em sua área, visto que a Vistune University será reconhecida como uma plataforma adequada para o aprendizado. Sendo um produtor ativo com uma comunidade envolvida e uma variedade de aulas, você será respeitado por todos.
          <br /><br />
          Assim, entendemos que tanto criadores quanto usuários podem ser beneficiados, o que, por sua vez, impacta positivamente toda a sociedade. Muitos usuários demonstram interesse em reuniões privadas, mentorias e outros serviços, e para isso, oferecemos o Marketplace da Vistune, cujo objetivo é proporcionar uma plataforma segura de negociação entre usuários e criadores.
          <br /><br />
          Para se juntar à Vistune como &quot;Criador de Conteúdo&quot;, será necessário participar de uma reunião com um de nossos membros para discutir seus objetivos. Além disso, você deverá compartilhar vídeos ou materiais relacionados ao seu propósito, produzidos por você ou sua equipe, para que possamos avaliá-los. Não há cobrança para se tornar membro, pois nosso compromisso vai além disso; focamos na qualidade do conteúdo compartilhado, garantindo que os usuários tenham acesso a informações válidas e bem formuladas.
          <br /><br />
          Consequentemente, todo o conteúdo e as conversas nas comunidades são monitorados por inteligência artificial e por nossa equipe para garantir ordem, respeito e a qualidade do material postado pelos Criadores de Conteúdo. As regras e normas adicionais serão explicadas durante a reunião por videoconferência. Ajudar nem sempre é um caminho fácil, mas se você sente o desejo de transformar o mundo em um lugar melhor, a Vistune está ao seu lado para tornar isso uma realidade.
        </p>
      </div>
    </TracingBeam >
  );
}
