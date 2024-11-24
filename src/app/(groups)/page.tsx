import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { BlogCards } from "@/components/blog-cards";
import { TeamComments } from "@/components/team-comments";
import { ContainerHome } from "@/components/container-home";
import { Cover } from "@/components/ui/cover";
import { TimelineHome } from "@/components/timeline-home";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Background />
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        <Companies />
        <TeamComments />
        <TimelineHome />
        <ContainerHome />
        <BlogCards />
      </Container> 
      <div className="relative">
        <div className="z-30">
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white z-30">
            <div className="my-48">Adapte com a<br />Vistune ao <Cover>Futuro</Cover></div>
          </h1>
        </div>
        <Background />
      </div>
    </div>
  );
}
