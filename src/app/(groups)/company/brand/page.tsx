import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Metadata } from "next";
import { TitleDefault } from "@/components/title-default";
import { BrandDecription } from "@/components/brand-description";
import { ComputerBrand } from "@/components/computer-brand";

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
        <ComputerBrand />
        <BrandDecription />
      </Container>
    </div>
  );
}
