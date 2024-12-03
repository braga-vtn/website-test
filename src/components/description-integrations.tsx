"use client";
import { VideoHome } from "./video-home";
import { TracingBeam } from "./ui/tracing-beam";
import { GradualSpacing } from "./ui/gradual-spacing";
import CardImage from "./card-image";
import React from "react";
import Image from "next/image";

interface ImageTextPairProps {
  text: string;
  imageUrl: string;
  reverse?: boolean;
}

const ImageTextPair: React.FC<ImageTextPairProps> = React.memo(({ text, imageUrl, reverse }) => (
  <div className={`flex items-center w-full justify-between space-x-4 mb-10 ${reverse ? 'flex-row-reverse' : ''}`}>
    <Image
      src={imageUrl}
      alt={imageUrl}
      quality={100}
      width={1000}
      height={1000}
      className="h-48 w-48"
      priority={true}
    />
    <div className="p-4 max-w-7xl mx-auto w-full">
      <p className="font-normal text-base text-current dark:text-neutral-300 text-center">
        {text}
      </p>
    </div>
  </div>
));

// Definindo o display name para o componente memoizado
ImageTextPair.displayName = 'ImageTextPair';

export const DescriptionIntegrations = () => {
  const pairs = [
    { text: 'O WhatsApp é uma ferramenta prática e amplamente utilizada, especialmente no Brasil. Na Vistune, nosso modelo de atendimento ao cliente, a Cleo, está completamente integrado a todas as funcionalidades do WhatsApp. Conectar o seu WhatsApp à Vistune proporciona autonomia ao nosso sistema para gerenciá-lo de forma eficaz.', imageUrl: '/logos/whatsapp.png' },
    { text: 'O Instagram é uma plataforma global que conecta você aos seus seguidores por meio de postagens e do direct, seu recurso de mensagens diretas. Na Vistune, integramos configuramos a Cleo para monitorar comentários e realizar atendimentos via direct, em larga escala.', imageUrl: '/logos/instagram.png', reverse: true },
    { text: 'A Shopify é uma plataforma excepcional e, além disso, um canal valioso para a extração de dados. Com essa integração, nosso modelo de atendimento obtém acesso a informações sobre pedidos, produtos e clientes, permitindo fornecer um atendimento preciso e eficaz.', imageUrl: '/logos/shopify.png' },
    { text: 'O Google Analytics é uma ferramenta que, se você não visualizasse os dados, dificilmente acreditaria em sua existência. É impressionante como armazena eventos e métricas do seu negócio! Por isso, por meio dessa integração, conseguimos extrair métricas para nossos dashboards e alimentar nosso modelo de análise de dados, o Vision, com informações sobre o seu negócio.', imageUrl: '/logos/google-analytics.png', reverse: true },
    { text: 'Utilize a integração com o Facebook sempre que necessitar monitorar o desempenho de suas páginas na plataforma. A Vistune extrai as principais métricas de todas as suas páginas e, além de exibi-las em nosso dashboard, alimenta também o Vision!', imageUrl: '/logos/facebook.png' },
    { text: 'O Telegram é um aplicativo alternativo conhecido por suas extensas capacidades de integração com bots e automações. Como é amplamente utilizado em comunidades, integramos o Telegram para oferecer suporte àqueles que desejam adicionar nosso modelo de atendimento aos seus canais.', imageUrl: '/logos/telegram.png', reverse: true },
    { text: 'O Google Sheets é uma ferramenta versátil que permite armazenar dados em tabelas de maneira simples e gratuita. Ao integrá-lo à Vistune, todas as tabelas, conversas e outros dados podem ser exportados para o Sheets. Essa funcionalidade oferece inúmeras aplicações interessantes, como a criação de gráficos em outros aplicativos, controle aprimorado e muito mais.', imageUrl: '/logos/google-sheets.png' },
    { text: 'O Meta Ads é uma fonte fundamental de dados para o Vision. Nosso modelo de análise é utilizado continuamente para examinar diversos parâmetros das campanhas. Conectando sua conta à Vistune, você pode explorar essa funcionalidade de maneira abrangente.', imageUrl: '/logos/meta-2.png', reverse: true },
    { text: 'Semelhante ao Meta Ads, o Google Ads fornece ao Vision as métricas das suas campanhas de tráfego. Esses dados são essenciais para a tomada de decisões, e você pode contar com nosso modelo de análise de dados para isso, basta conectar sua conta à Vistune.', imageUrl: '/logos/google-ads.png' },
    { text: 'Chamamos essa integração de Instagram Insights. Trata-se do mesmo aplicativo mencionado anteriormente, porém, essa versão é exclusivamente voltada para a extração de métricas de desempenho da conta. Utilizaremos esses dados para exibição em dashboards e para alimentar o Vision.', imageUrl: '/logos/instagram-insights.png', reverse: true },
    { text: 'Transformou seu Gmail em um canal de atendimento ao cliente? Se sim, essa integração é ideal para você. A Cleo está capacitada para responder aos seus e-mails da mesma forma que faz no WhatsApp, Instagram e outras plataformas. Após conectar sua conta à Vistune, todos os e-mails serão geridos pelo nosso modelo de atendimento.', imageUrl: '/logos/gmail.png' },
    { text: 'A Yampi é uma empresa brasileira amplamente utilizada por lojas de e-commerce que também utilizam a Shopify. Se você opera nessa estrutura, recomendamos integrar este aplicativo à Vistune, pois isso complementará as informações sobre pedidos e clientes para a Cleo em seus atendimentos.', imageUrl: '/logos/yampi.png', reverse: true },
  ];

  return (
    <TracingBeam className="px-6 mb-10">
      {pairs.map((pair, index) => (
        <ImageTextPair key={index} text={pair.text} imageUrl={pair.imageUrl} reverse={pair.reverse} />
      ))}
    </TracingBeam >
  );
};
