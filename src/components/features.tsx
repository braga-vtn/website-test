import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";

export const Features = () => {
  const features = [
    {
      title: "Converse com as melhores IAs",
      description:
        "Nosso playground conta com modelos da OpenAI, Meta, Google, Claude e outros. Aproveite também, para usar os seus agentes de IA!",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 md:col-span-4 border-b border-r dark:border-neutral-800",
    },
    {
      title: "Conheça a Cleo",
      description:
        "Conecte seu aplicativo de mensagens, como o WhatsApp, e a Cleo responderá suas mensagens.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 md:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Analise os seus dados",
      description:
        "Nossos modelos coletarão dados de todos os aplicativos que você integrar, proporcionando a visualização dessas informações em gráficos.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 md:col-span-3 border-r dark:border-neutral-800",
    },
    {
      title: "Integre à Vistune",
      description:
        "Oferecemos várias integrações com aplicativos que aumentam a conexão da Vistune com o seu negócio.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3",
    },
  ];
  return (
    <div className="relative z-20 py-10 md:py-40">
      <Heading as="h2">Diversos recursos exclusivos</Heading>
      <Subheading className="text-center ">
        Incorpore nossas soluções em sua rotina diária, incluindo bate-papo com IA, dashboards, agentes, modelos, entre outros recursos.
      </Subheading>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-6 mt-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <GridLineHorizontal
          style={{
            top: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineHorizontal
          style={{
            bottom: 0,
            left: "-10%",
            width: "120%",
          }}
        />

        <GridLineVertical
          style={{
            top: "-10%",
            right: 0,
            height: "120%",
          }}
        />
        <GridLineVertical
          style={{
            top: "-10%",
            left: 0,
            height: "120%",
          }}
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Heading as="h3" size="sm" className="text-left">
      {children}
    </Heading>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-lg mx-0 md:text-sm my-2">
      {children}
    </Subheading>
  );
};
