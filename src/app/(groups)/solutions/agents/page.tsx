import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { SolutionAgents } from "@/components/title-solutions-agents";
import { VideoHome } from "@/components/video-home";
import BlurIn from "@/components/ui/blur-in";
import { AgentsDecription } from "@/components/agents-description";
import { StartUse } from "@/components/start-use";
import TextRevealByWord from "@/components/ui/text-reveal";

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
        <div className="h-screen z-20">
          <SolutionAgents />
        </div>
        <AgentsDecription /> 
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
