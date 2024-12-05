"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { Timeline } from "./ui/timeline";
import BlurIn from "./ui/blur-in";
import { TracingBeam } from "./ui/tracing-beam";
import { PinContainer } from "./ui/3d-pin";
import { AspectRatio } from "./ui/aspect-ratio";
import { TeamComments } from "./team-comments";

export function AboutDescription() {
  const data = [
    {
      title: "Inspiração",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Meu nome é Matheus Braga e vou compartilhar brevemente a história da Vistune até o lançamento de sua primeira plataforma, o Aplicativo. Em meados de 2020, decidi embarcar em um projeto que transformaria completamente minha vida. Inicialmente, meu objetivo era desenvolver uma plataforma de automação, que eliminaria as tarefas repetitivas e tediosas dentro das empresas, permitindo que as máquinas as realizassem por meio de algumas configurações. Essa iniciativa foi bem-sucedida e aumentou significativamente a eficiência dos setores onde foi aplicada.
            <br /><br />
            No entanto, logo me deparei com um desafio. Ao avançar a automação para o contato humano, como interações em comentários no Instagram, respostas no WhatsApp e, principalmente, a tomada de decisões por algoritmos, percebi que faltava um elemento crucial: o &quot;Fator Humano&quot;, ou seja, a capacidade de compreender o comportamento humano através dos meus algoritmos e automações. Foi nessa fase que conheci a Inteligência Artificial Generativa.
            <br /><br />
            Foi amor à primeira vista, e logo me concentrei em dominar o desenvolvimento nessa área, passando alguns anos estudando e criando algoritmos de IA. Chegamos a 2022, ano em que já possuía um sólido embasamento teórico tanto em automações quanto em Inteligência Artificial. Durante esse período, desenvolvi a primeira versão do que hoje conhecemos como Cleo, nosso modelo de atendimento ao cliente.
            <br /><br />
            No final desse mesmo ano, o mundo foi positivamente impactado pelo lançamento do ChatGPT, produto da OpenAI, e tive a sorte de ser um dos primeiros desenvolvedores a me cadastrar e receber acesso a esses recursos. Isso proporcionou o embasamento necessário para a criação da primeira versão da Vistune, cujo desenvolvimento se estendeu ao longo do ano de 2023.          </p>
        </div>
      ),
    },
    {
      title: "Primeira Falha",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            A primeira versão foi concluída no início de 2024. Contávamos com algumas funções interessantes, como integrações com certos aplicativos, recursos de bate-papo e algumas tabelas de dados. Contudo, essa versão apresentava muitos problemas, como bugs, alucinações nos modelos e outros erros comuns em IA. Hoje, estamos gratos por essas falhas, pois acreditamos que elas nos levaram à versão atual, mais robusta e completa, algo que talvez não tivéssemos alcançado se aquela primeira versão fosse um pouco mais bem-sucedida.
            <br /><br />
            Essa primeira versão esteve disponível por apenas dois meses e não ultrapassou a fase de validação com poucos usuários de teste. Praticamente todos os serviços foram reprovados, isso mesmo, quase todos. Embora isso possa ser frustrante para alguns, acredite, eu fiquei bastante satisfeito. Sabia que era possível corrigir cada erro e, melhor ainda, oferecer soluções que transformariam aquela ideia em algo de excelência.
          </p>
        </div>
      ),
    },
    {
      title: "Ponto Chave",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Nesse estágio, Yan se juntou à Vistune e, juntos, recalculamos a rota. Decidimos descartar a última plataforma e reiniciar todo o trabalho do zero. Agora, ciente dos erros, eu sabia que era necessário simplesmente refazer todo o processo novamente.
            <br /><br />
            E assim fizemos! Linha por linha, função por função, a Vistune AI foi reescrita. Após 10 meses, chegamos aqui com nosso primeiro produto pronto para uso, o primeiro de muitos. Estamos satisfeitos com o progresso alcançado ao longo dessa jornada e, como se diz no Brasil, estamos com a &quot;faca nos dentes&quot; para continuar desenvolvendo as três plataformas da Vistune.
          </p>
        </div>
      ),
    },
    {
      title: "Futuro",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            O futuro é belo, e não só pelo trabalho da Vistune, estamos cruzando uma virada tecnológica, a aplicação da Inteligencia artificial em todas as camadas da Sociedade no mundo. Não podemos esperar nada diferente de algo realmente belo para cada um de nós.
            <br /><br />
            Agora, quanto à contribuição da Vistune nesse contexto, esperamos ajudar dezenas de países, e para isso, configuraremos nossas plataformas, serviços, suporte e site em 10 idiomas. Além disso, planejamos lançar duas novas plataformas em 2025: a Vistune University e o Marketplace, que proporcionarão aos usuários do Aplicativo mais recursos de aprendizagem e a oportunidade de usar o conhecimento para gerar renda.
            <br /><br />
            Não faltam ideias nem vontade de fazer tudo acontecer da melhor forma! Os erros nos tornaram mais fortes do que nunca, e acreditamos que este é o momento certo para disponibilizar nossos serviços e ajudar o máximo de pessoas possível a se adaptarem ao novo mundo.
          </p>
        </div>
      ),
    },
  ];

  return (
    <>
      <BlurIn
        word="Nossos Pilares"
        className="text-2xl md:text-5xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="max-w-7xl mx-auto antialiased relative">
        <p className="mb-6 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          A Vistune AI transcende o conceito de uma simples empresa de Inteligência Artificial. Estamos desenvolvendo algo inovador, que contribui para a sociedade de maneira ampla, fundamentado em pilares inegociáveis que orientam todas as nossas ações.
        </p>
      </div>
      <div className="w-full mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <TeamComments />
      <div className="w-full">
        <Timeline data={data} notitle={true} />
      </div>
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-5">
          Vistune AI
        </h1>
        <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
          <span className="font-semibold">• Onde a Vistune se encontra atualmente?</span>
          <br /><br />
          Atualmente, a Vistune AI está concentrada em dois objetivos principais: o lançamento de nossa plataforma principal, o Aplicativo, no mercado brasileiro, e o desenvolvimento do sistema de automações como uma nova funcionalidade do Flow. Nosso aplicativo está totalmente operacional, com todas as funções e serviços prontos para uso ativo. Acreditamos no seu potencial de agregar valor ao mercado na forma atual, e ainda mais com a aplicação de nossos modelos Cleo e Vision, que oferecem funções de atendimento ao cliente e análise de dados, respectivamente.          <br /><br />
          <span className="font-semibold">• Quais as próximas atualizações?</span>
          <br /><br />
          Como mencionado anteriormente, nosso objetivo agora é concluir o sistema de automações no Flow. Esse serviço permitirá a criação de fluxos de conversas, comandos para agentes de IA, integração com webhooks e muito mais! Além disso, em seguida, disponibilizaremos o Whitelabel do aplicativo, a infraestrutura em 10 idiomas e a Vistune University, nessa ordem. Esperamos finalizar tudo isso ainda no primeiro semestre de 2025.
        </p>
      </div>
      <div className="h-[30rem] w-full flex items-center z-20 justify-center ">
        <PinContainer
          title="Em Breve"
          href=""
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-current sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-center text-base text-current">
              Vistune University
            </h3>
            <div className="text-base !m-0 !p-0 text-center font-normal">
              <span className="text-neutral-500 ">
                Conhecimento gratuito e acessível para todos usuários.
              </span>
            </div>
            <AspectRatio ratio={16 / 11} className="bg-transparent">
              <Image
                src="https://assets.aceternity.com/pro/hero-sections.png"
                alt="Photo by Drew Beamer"
                fill
                className="blur-sm h-full w-full rounded-md object-cover mt-3"
              />
            </AspectRatio>
          </div>
        </PinContainer>
        <PinContainer
          title="Disponível na Versão 1.0.32"
          href="https://app.vistune.ai/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-current sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-base text-center text-current">
              Aplicativo
            </h3>
            <div className="text-base !m-0 !p-0 font-normal text-center">
              <span className="text-neutral-500 ">
                Se adapte ao Novo Mundo com as ferramentas da Vistune.
              </span>
            </div>
            <AspectRatio ratio={16 / 11} className="bg-transparent">
              <Image
                src="/system/app-dashboard.jpg"
                alt="Photo by Drew Beamer"
                fill
                className="h-full w-full rounded-md object-cover mt-3"
              />
            </AspectRatio>
          </div>
        </PinContainer>
        <PinContainer
          title="Em Breve"
          href=""
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-current sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-semibold text-center text-base text-current">
              Marketplace
            </h3>
            <div className="text-base !m-0 !p-0 text-center font-normal">
              <span className="text-neutral-500 ">
                Comercialize suas criações e serviços em nossa plataforma.
              </span>
            </div>
            <AspectRatio ratio={16 / 11} className="bg-transparent">
              <Image
                src="https://assets.aceternity.com/templates/startup-2.webp"
                alt="Photo by Drew Beamer"
                fill
                className="blur-sm h-full w-full rounded-md object-cover mt-3"
              />
            </AspectRatio>
          </div>
        </PinContainer>
      </div>
      <div className="max-w-7xl mx-auto antialiased pt-4 relative">
        <p className="mt-3 font-normal text-base text-current dark:text-neutral-300 text-center">
          <span className="font-semibold">• Qual o motivo de termos três plataformas?</span>
          <br /><br />
          Em resumo: uma plataforma para aprender, outra para criar e, por fim, uma para comercializar criações. Detalhando, para alcançar nosso objetivo de ajudar o maior número de pessoas, é essencial oferecer aulas e materiais acessíveis a todos, daí a importância da Vistune University. Nesse espaço, podemos disponibilizar vídeos, lives, documentos e comunidades sobre diversos assuntos, não apenas criados pela Vistune, mas também por Criadores de Conteúdo, pessoas competentes que compartilham da mesma filosofia de democratizar o acesso ao conhecimento.
          <br /><br />
          Com uma plataforma rica em conteúdo sobre todas as funcionalidades e aplicações da Vistune, teremos um excelente acervo para nossos usuários esclarecerem dúvidas e realmente aprenderem as melhores práticas. É aí que entra o nosso segundo e principal espaço: o Aplicativo. Através do App, você pode aproveitar todas as funcionalidades da Vistune e efetivamente utilizar nossa tecnologia, bem como a de outras empresas, como OpenAI, Meta, Google, entre outras.          <br /><br />
          Um dos serviços mais incríveis do Aplicativo são os Flows, que, em conjunto com o treinamento da IA, tornam cada criação sua única, capaz de ajudar não apenas você mas também muitas outras pessoas. Então, eu pergunto: por que não lucrar com isso? Você provavelmente já ligou os pontos: essa é a terceira e última plataforma, o Marketplace. Um espaço criado para você comercializar suas criações no aplicativo, além de oferecer serviços, mentorias e muito mais! Estamos prontos para transformar tudo isso em realidade e contamos com você para participar desse futuro, adaptando-se à nova realidade. Conte com a Vistune AI.
        </p>
      </div>
    </>
  );
}

export const projects = [
  {
    title: "Missão",
    description:
      "Na Vistune AI, nossa missão é transformar a maneira como o mundo interage com a tecnologia. Estamos comprometidos em desenvolver soluções de inteligência artificial que ampliam possibilidades, simplificam a complexidade e capacitam nossos usuários a alcançar novos patamares. Acreditamos que a inovação em IA deve ser acessível e com impacto positivo para todos.",
  },
  {
    title: "Visão",
    description:
      "Nossa visão é ser pioneiros em criar um futuro onde a inteligência artificial potencializa o potencial humano de maneira ética e sustentável. A Vistune AI busca liderar a revolução tecnológica, estabelecendo-se como referência em criar tecnologias que não apenas entendem o mundo, mas também melhoram a vida cotidiana das pessoas em todas as esferas.",
  },
  {
    title: "Valores",
    description:
      "Estamos comprometidos em desenvolver inovações que respeitam princípios éticos e valorizam a dignidade humana, utilizando a tecnologia para servir as pessoas. Sabemos que relações sólidas se baseiam na confiança, e por isso, promovemos sempre a transparência em nossas operações e comunicações.",
  },
  {
    title: "Inovação",
    description:
      "Na Vistune AI, a inovação não é apenas uma palavra - é o núcleo de nossa existência. Estamos constantemente explorando novas fronteiras da inteligência artificial, de aprendizado profundo a algoritmos de alta eficiência, para oferecer ferramentas que redefinem os padrões e criam valor de forma real e tangível para nossos usuários.",
  },
  {
    title: "Sustentabilidade",
    description:
      "Na Vistune AI, reconhecemos a importância de facilitar a transição de profissionais para um mundo onde habilidades em IA são fundamentais. Acreditamos que, ao adaptar as profissões ao uso eficaz da IA, estamos construindo alicerces sólidos para carreiras sustentáveis e repletas de oportunidades.",
  },
  {
    title: "Comunidade",
    description:
      "A Vistune AI se orgulha de apoiar a formação e o desenvolvimento de comunidades em tecnologia e IA. Através da Vistune University, nos esforçamos para democratizar o conhecimento e inspirar a próxima geração de inovadores em inteligência artificial. Acreditamos que o progresso é realmente impactante quando compartilhado.",
  },
];
