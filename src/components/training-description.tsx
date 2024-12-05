"use client";
import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import CardImage from "./card-image";

export function TrainingDescription() {
  return (
    <TracingBeam className="px-6 my-10">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-12">
          Treinamento da IA
        </h1>
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          Para entender como treinar uma Inteligência Artificial, podemos compará-la à memória humana. Durante a juventude, frequentamos a escola e aprendemos sobre uma variedade de temas. Por exemplo, em uma aula de História sobre o colapso do mercado imobiliário em 2008, conhecido como a crise do subprime. Se você participou dessa aula e eu perguntar sobre uma crise imobiliária, é provável que se lembre desse evento.
          <br /><br />
          Da mesma forma, os modelos recorrem ao conhecimento adquirido quando estimulados por perguntas. Portanto, treinar um modelo vai além de apenas enviar arquivos e textos; é crucial que esse material esclareça para a IA o tema abordado. Assim, sempre que questionada sobre o tópico, ela poderá responder com precisão.
        </p>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10`}>
        <CardImage size="medium" url={"/system/website/training-file.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            Arquivos podem ser uma maneira eficaz de realizar treinamentos. Uma estratégia valiosa é usar os exemplos de perguntas quando se treina por arquivos, o que fornece ao modelo casos semelhantes de uso e aprimora significativamente sua precisão.
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10 flex-row-reverse`}>
        <CardImage size="medium" url={"/system/website/training-text.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            A simplicidade que funciona: o texto é a maneira mais básica, mas altamente eficaz, de alimentar a Inteligência Artificial com informações relevantes. Compreender que a IA buscará os textos mais semelhantes à pergunta ajuda na criação de textos estratégicos para garantir respostas precisas.
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10`}>
        <CardImage size="medium" url={"/system/website/training-site.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            Deseja que a IA conheça um site? Esse é o caminho. Todas as URLs adicionadas serão analisadas, não se limitando a uma única página; todas as páginas do site serão lidas pelo sistema da Vistune, garantindo uma extração abrangente de informações.
          </p>
        </div>
      </div>
      <div className={`flex items-center justify-between space-x-4 mb-10 flex-row-reverse`}>
        <CardImage size="medium" url={"/system/website/training-example.jpg"} />
        <div className="p-4 max-w-7xl mx-auto w-full">
          <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
            Para aprimorar um treinamento, você pode incluir exemplos de perguntas relacionadas ao tema que está sendo adicionado. Isso é extremamente útil, pois permite que a Inteligência Artificial associe seu conhecimento a perguntas reais com maior facilidade.
          </p>
        </div>
      </div>
    </TracingBeam >
  );
}
