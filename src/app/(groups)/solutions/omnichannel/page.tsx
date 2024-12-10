import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { ComputerOmnichannel } from "@/components/computer-omnichannel";
import { ConnectionOmnichannel } from "@/components/connection-omnichannel";
import { VideoHome } from "@/components/video-home";
import { OmnichannelDescription } from "@/components/omnichannel-description";
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
        <ComputerOmnichannel />
        <ConnectionOmnichannel /> 
        <OmnichannelDescription />
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
