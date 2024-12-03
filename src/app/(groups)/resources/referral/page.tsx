import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Metadata } from "next";
import { StartUse } from "@/components/start-use";
import { ComputerReferral } from "@/components/computer-referral";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { VideoHome } from "@/components/video-home";
import CardImage from "@/components/card-image";
import BlurIn from "@/components/ui/blur-in";
import { DescriptionReferral } from "@/components/description-referral";

export const metadata: Metadata = {
  title: "Pricing - Everything AI",
  description:
    "Everything AI is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <ComputerReferral />
        <DescriptionReferral />
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
