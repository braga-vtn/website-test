"use client";
import { VideoHome } from "./video-home";
import { TracingBeam } from "./ui/tracing-beam";
import CardImage from "./card-image";

export const DescriptionContent = () => {
  return (
    <TracingBeam className="px-6 my-10">
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24">
          Como acessar o conteúdo?
        </h1>
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          Todos os nossos materiais estão disponíveis na Vistune University, onde uma vasta gama de assuntos é abordada de forma gratuita para você e seus colaboradores. Usuários da Vistune que recebem o selo de Criadores de Conteúdo também podem estabelecer canais e comunidades, oferecendo aulas, lives e materiais que auxiliem em suas necessidades específicas.
          <br /><br />
          A Vistune acredita no poder transformador da educação. Por isso, garantimos acesso gratuito a todos os conteúdos, para qualquer pessoa ou empresa. Além disso, certificamo-nos de que cada conteúdo adicionado seja verificado por nossa equipe responsável, garantindo que além de gratuito, o material seja qualificado. Aproveite também a troca de experiências com outros usuários por meio da comunidade na Vistune University, onde você terá um canal aberto para interagir tanto com outros usuários quanto com membros da equipe da Vistune.
        </p>
      </div>
      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-10 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <VideoHome />
        </div>
      </div>
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          Na Vistune University, você encontrará o canal oficial da Vistune. Esse canal oferece vídeos e materiais explicativos sobre todas as funcionalidades do nosso aplicativo. São dezenas de vídeos disponíveis para ajudar você a entender como utilizar cada página da forma mais eficaz possível.
          <br /><br />
          Nesse mesmo canal, discutimos diariamente possíveis atualizações e notícias do mercado focado em Inteligência Artificial, entre outros tópicos relevantes. Além disso, contamos com uma aba dedicada a dúvidas e suporte, onde estamos sempre à disposição para resolver qualquer problema o mais rápido possível. Sinta-se à vontade para solicitar conteúdos específicos à Vistune; teremos o prazer de produzir e disponibilizar material para você.
        </p>
      </div>
    </TracingBeam >
  );
};
