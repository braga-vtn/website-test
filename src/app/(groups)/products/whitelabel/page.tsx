import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { ComputerWhitelabel } from "@/components/computer-whitelabel";
import { FlipWords } from "@/components/ui/flip-words";
import { Soon } from "@/components/soon";
import BlurIn from "@/components/ui/blur-in";
import { HeroWhitelabel } from "@/components/hero-whitelabel";
import { WhitelabelDescription } from "@/components/whitelabel-description";
import { VideoHome } from "@/components/video-home";

export const metadata: Metadata = {
  title: "Pricing - Everything AI",
  description:
    "Everything AI is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function PricingPage() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <ComputerWhitelabel />
        <BlurIn
          word="Sua Marca na Vistune"
          className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
        />
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          <p className="my-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
            Considere que nosso Aplicativo possua sua logo, domínio, nome do seu negócio e clientes. Esse é o Whitelabel da Vistune! Adaptamos nosso App para que todas as funcionalidades operem em diferentes domínios e marcas. Naturalmente, esse é um modelo de negócio vantajoso, permitindo que você lucre com todas as assinaturas e adicionais adquiridos pelos seus usuários.
          </p>
        </div>
        <HeroWhitelabel />
        <WhitelabelDescription />
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
            <VideoHome />
          </div>
        </div>
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
