import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { CreatorContent } from "@/components/title-creator-content";
import { FlipWords } from "@/components/ui/flip-words";
import { Soon } from "@/components/soon";
import { Metadata } from "next";
import { CreatorContentDescription } from "@/components/creator-description";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default function PricingPage() {
  const words = ["vídeos", "comunidades", "canais", "produtos"];

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <CreatorContent />
        <CreatorContentDescription />
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
