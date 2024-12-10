import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Metadata } from "next";
import { ComputerApplication } from "@/components/computer-application";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import CardImage from "@/components/card-image";
import { StartUse } from "@/components/start-use";
import React from "react";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

interface ImageTextPairProps {
  text: string;
  imageUrl: string;
  reverse?: boolean;
}

const ImageTextPair: React.FC<ImageTextPairProps> = React.memo(({ text, imageUrl, reverse }) => (
  <div className={`flex items-center justify-between space-x-4 mb-10 ${reverse ? 'flex-row-reverse' : ''}`}>
    <CardImage size="medium" url={imageUrl} />
    <div className="p-4 max-w-7xl mx-auto w-full">
      <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
        {text}
      </p>
    </div>
  </div>
));

// Definindo o display name para o componente memoizado
ImageTextPair.displayName = 'ImageTextPair';

export default function PricingPage() {
  const pairs = [
    { text: 'O Dashboard é autoexplicativo, apresentando as métricas coletadas pelo Vision, nosso avançado modelo de análise de dados. Ele disponibiliza dezenas de gráficos que permitem uma análise aprofundada em diversos campos como marketing, vendas, produtos, redes sociais e muitos outros.', imageUrl: '/system/website/app-dashboard.jpg' },
    { text: 'Descubra uma nova maneira de usar um bate-papo, integrando-o aos principais canais de comunicação, como Instagram, WhatsApp e outros, em um único local. Todas as mensagens são monitoradas e respondidas pela Cleo, nosso modelo de atendimento. Com o bate-papo, você acessa inúmeras funções exclusivas da Vistune para aprimorar seu comercial com inteligência artificial.', imageUrl: '/system/website/app-chat.jpg', reverse: true },
    { text: 'O Flow, ou "caixa de infinitas possibilidades", como preferir, é a página que mais concentra nossos esforços de desenvolvimento. Esta ferramenta permite que você gerencie os modelos da Vistune e crie agentes de inteligência artificial, além de automações para diversas áreas. Imagine ter uma inteligência artificial ao seu dispor, com funções exclusivas criadas por você — isso é o Flow.', imageUrl: '/system/website/app-flow.jpg' },
    { text: 'Agora que mencionamos modelos e agentes, é hora de você conhecer o Treinamento. Com essa funcionalidade, você pode aperfeiçoar a inteligência artificial usando textos, arquivos, sites e muitos outros recursos. Esse treinamento é distribuído pela rede neural dos modelos e agentes que você selecionar, possibilitando a melhoria da sua experiência com os agentes e o aprimoramento do atendimento feito pela Cleo. É como dizem: ensine uma criança no caminho certo e ela permanecerá nele — aqui, é bastante semelhante.', imageUrl: '/system/website/app-training.jpg', reverse: true },
    { text: 'Se você cria agentes, modelos e realiza treinamentos, precisará de um local para testar seus desenvolvimentos. Para isso, oferecemos o Playground, que não serve apenas para testes, mas também para você experimentar o auge da tecnologia com os melhores modelos de inteligência artificial para textos, imagens e vídeos em um único lugar. O Playground funciona como um parceiro essencial no seu dia a dia, fornecendo funções exclusivas da Vistune que facilitam suas atividades.', imageUrl: '/system/website/app-playground.jpg' },
    { text: 'Como você pode imaginar, os modelos de inteligência artificial são mais eficazes quanto mais dados eles possuem. Além disso, para executar funções em outros aplicativos, como enviar uma mensagem no WhatsApp, é necessário conectá-los à Vistune. Para isso, apresentamos as Integrações, que ligam a Vistune aos seus aplicativos favoritos.', imageUrl: '/system/website/app-integrations.jpg', reverse: true },
    { text: 'Indique e ganhe de forma simples. Temos um plano de indicações que oferece um percentual da venda realizada por meio da sua indicação. Com um cupom único, ao ser utilizado em uma compra na Vistune, você recebe sua recompensa de duas maneiras: em tokens ou dinheiro, conforme sua preferência. Essa é a nossa maneira de agradecer pela confiança e expandir o número de usuários ativos.', imageUrl: '/system/website/app-referrer.jpg' },
    { text: 'A Vistune adota a filosofia de desenvolver suas soluções alinhadas aos interesses dos usuários. Para reafirmar esse compromisso, disponibilizamos um Roadmap público que reúne as principais atualizações previstas. Essa página está acessível apenas no aplicativo, mas abrange atualizações e novas funcionalidades para toda a Vistune.', imageUrl: '/system/website/app-roadmap.jpg', reverse: true },
  ];

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <ComputerApplication />
        <GradualSpacing
          className="font-display text-center text-4xl mt-20 font-bold md:text-7xl"
          text="Conheça o Aplicativo"
        />
        <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          O aplicativo da Vistune consiste em um conjunto de ferramentas desenvolvidas para uso com Inteligência Artificial. Cada funcionalidade, desde a mais simples até a mais avançada, é continuamente aprimorada por um modelo interno nosso, que busca otimizar o aplicativo e identificar possíveis bugs. Através do nosso aplicativo, você terá acesso a várias seções que possibilitam uma experiência criativa com múltiplas formas de aproveitar a Vistune tanto no dia a dia quanto em sua empresa.
        </p>
        <CardImage size="giant" url="/system/website/app.jpg" />
        <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24 pb-2">
          Principais Páginas
        </h1>
        {pairs.map((pair, index) => (
          <ImageTextPair key={index} text={pair.text} imageUrl={pair.imageUrl} reverse={pair.reverse} />
        ))}
      </Container>
      <div className="relative">
        <div className="relative z-30">
          <StartUse />
        </div>
        <Background />
      </div>
    </div>
  );
}