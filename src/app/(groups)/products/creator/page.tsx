import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { CreatorContent } from "@/components/title-creator-content";
import { FlipWords } from "@/components/ui/flip-words";
import { Soon } from "@/components/soon";
import { Metadata } from "next";
import { CreatorContentDescription } from "@/components/creator-description";

export const metadata: Metadata = {
  title: "Pricing - Everything AI",
  description:
    "Everything AI is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
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
