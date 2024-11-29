import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { SectionHero } from "@/app/(landing-page)/_components/hero";
import { SectionInsights } from "@/app/(landing-page)/_components/section-insights";
import { HeroWhitelabel } from "@/components/hero-whitelabel";
import { Testimonials } from "@/components/testimonials";
import { CallToAction } from "@/app/(landing-page)/_components/call-to-action";

const config = {
  badge: "Automação com IA",
  headline: "Atendimento que Conecta e Converte",
  headlineDesc: `Descubra como a IA da Vistune transforma conversas em oportunidades reais para sua marca.`,
  ctaText: "Agendar Reunião",
  videoSrc: "/system/example-video.mp4",
  carouselText1: "85% dos clientes voltam a interagir após usar nosso sistema.",
  carouselText2: "Redução de 60% nos custos operacionais de atendimento.",
  carouselText3: "Aumento de 40% na taxa de conversão de leads.",
  carouselSrc1: "/blog/blog-1.jpg",
  carouselSrc2: "/blog/blog-3.jpg",
  carouselSrc3: "/blog/blog-2.jpg",
  endCtaText1: "Junte-se às empresas que já estão liderando",
  endCtaButtonText: "Agende uma Demonstração",
  endCtaText2: [
    { text: "Pronto" },
    { text: "para" },
    { text: "transformar" },
    { text: "suas", className: "text-neutral-500 dark:text-neutral-500" },
    { text: "Interações?", className: "text-neutral-500 dark:text-neutral-500" },
  ],
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Background />
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <SectionHero badge={config.badge} headline={config.headline} headlineDesc={config.headlineDesc} ctaText={config.ctaText} videoSrc={config.videoSrc} />
      </Container>
      <div className="-mt-40 md:mt-0">
        <SectionInsights carouselText1={config.carouselText1} carouselText2={config.carouselText2} carouselText3={config.carouselText3} carouselSrc1={config.carouselSrc1} carouselSrc2={config.carouselSrc2} carouselSrc3={config.carouselSrc3} />
        <HeroWhitelabel />
        <Container className="flex min-h-screen flex-col mt-10 md:mt-0 items-center justify-between ">
          <Testimonials />
        </Container>
        <CallToAction endCtaText1={config.endCtaText1} endCtaText2={config.endCtaText2} endCtaButtonText={config.endCtaButtonText} />
      </div>
    </div>
  );
}
