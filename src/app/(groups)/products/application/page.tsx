import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { ComputerApplication } from "@/components/computer-application";
import { Features } from "@/components/features";
import { VideoApplication } from "@/components/video-application";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { Spotlight } from "@/components/ui/Spotlight";
import CardImage from "@/components/card-image";
import { StartUse } from "@/components/start-use";
import { Cover } from "@/components/ui/cover";

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
        <ComputerApplication />
        <GradualSpacing
          className="font-display text-center text-4xl mt-20 font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="Conheça o Aplicativo"
        />
        <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
        </p>
        <CardImage />
        <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Spotlight is the new trend.
          </h1>
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
          <CardImage />
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <CardImage />
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
          <CardImage />
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <CardImage />
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
          <CardImage />
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <CardImage />
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
          <CardImage />
        </div>
        <div className="flex justify between items-center space-x-4 mb-10">
          <CardImage />
          <div className=" p-4 max-w-7xl mt-24 mx-auto relative z-10 w-full pt-20 md:pt-0">
            <p className="mt-4 font-normal text-base text-neutral-300 text-center mx-auto">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Integer dictum curae tristique; dictumst turpis augue mauris. Dis id aenean maecenas quam cras proin pellentesque. Fusce neque et magnis pretium purus. Elit litora pharetra hac congue ultricies. Non quis vel curabitur vulputate elit class diam in. Taciti per quisque, porttitor quam fermentum conubia. Hac adipiscing orci imperdiet cras iaculis urna duis nascetur.
            </p>
          </div>
        </div>
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
