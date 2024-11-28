import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Metadata } from "next";
import { GlobeMarketplace } from "@/components/globe-marketplace";
import CardImage from "@/components/card-image";
import { Soon } from "@/components/soon";
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
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="mt-20 h-full w-full">
          <GlobeMarketplace />
        </div>
        <div className={`flex items-center justify-between space-x-4 mb-10`}>
          <CardImage size="medium1" url={"/system/marketplace-1.jpg"} />
          <div className="p-4 max-w-7xl mx-auto w-full">
            <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
              Imagine que a Vistune tenha uma loja como essa. Eu sei é dificil acreditar que há uma empresa de tecnologia aí, mas apenas imagine. As prateleiras estão recheadas com produtos como fluxos, automações, agentes, modelos, treinamentos e outras soluções desenvolvidas no nosso aplicativo. Também existe uma seção dedicada a templates e pacotes. Assim como em qualquer mercado, os produtos apresentam preços e características variadas.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          <p className="mt-2 font-normal text-base text-current dark:text-neutral-300 text-center">
            Pense que, ao encher seu carrinho com produtos e templates desejados para sua conta na Vistune, você chega ao caixa e encontra um jornal repleto de anúncios de serviços oferecidos pelos &quot;Criadores de Conteúdo&quot; da Vistune. Esses serviços também podem ser contratados, permitindo que você saia da loja com tudo o que precisa. Esse é o conceito do nosso Marketplace. Vamos retornar à nossa realidade: essa loja realmente existe, mas em uma plataforma digital, onde os produtos e serviços são virtuais, ainda assim criados por membros da Vistune e &quot;Criadores de Conteúdo&quot;. Com a internet, não há trânsito ou distância, permitindo que você adquira e negocie itens produzidos em qualquer lugar do mundo!
            <br /><br />
            Para postar algum item em nosso Marketplace, você precisa ser um <a href="/products/creator" className="font-semibold hover:underline">Criador de Conteúdo</a>. A intermediação dos pagamentos é realizada exclusivamente pela Vistune, assegurando a segurança tanto para o usuário quanto para o &quot;Criador de Conteúdo&quot;. Nosso objetivo com o Marketplace é controlar o mercado paralelo que surge com a Vistune de maneira respeitosa e organizada, permitindo que possamos evoluir juntos.
          </p>
        </div>
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
