import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Metadata } from "next";
import { TitleDefault } from "@/components/title-default";
import { StartUse } from "@/components/start-use";
import { VideoHome } from "@/components/video-home";
import { SolutionTraining } from "@/components/title-solutions-training";
import { TrainingDescription } from "@/components/training-description";

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
        <SolutionTraining />
        <TrainingDescription />
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
