import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Metadata } from "next";
import { TitleDefault } from "@/components/title-default";
import { DescriptionContent } from "@/components/description-content";
import { Soon } from "@/components/soon";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <TitleDefault title="Adapte ao Novo Mundo" description="A Vistune disponibiliza aulas e cursos gratuitos sobre diversas aplicações com Inteligência Artificial." />
        <DescriptionContent />
      </Container>
      <div className="relative">
        <div className="relative z-30">
          <Soon />
        </div>
        <Background />
      </div>
    </div>
  );
}
