import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";

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
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1">Página não criada</Heading>
          <Subheading className="text-center">
            Em breve, esta página será desenvolvida e novos recursos estarão à sua disposição para utilização.
          </Subheading>
        </div>
        <div className="h-48" />
      </Container>
    </div>
  );
}
