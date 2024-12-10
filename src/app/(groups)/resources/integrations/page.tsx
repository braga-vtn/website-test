import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { TitleDefault } from "@/components/title-default";
import { DescriptionIntegrations } from "@/components/description-integrations";
import { StartUse } from "@/components/start-use";

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
        <TitleDefault title="Integre a Vistune aos seus Apps" description="Na Vistune, vários apps estão integrados de maneira nativa, oferecendo funcionalidades únicas em cada um deles." />
        <DescriptionIntegrations />
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
