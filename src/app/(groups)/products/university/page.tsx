import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { StartUse } from "@/components/start-use";
import { TitleUniversity } from "@/components/title-university";
import { UniversityDescription } from "@/components/university-description";
import { StartUniversity } from "@/components/start-university";
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
      <Container className="flex flex-col items-center justify-between pb-20">
        <TitleUniversity />
        <UniversityDescription />
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
