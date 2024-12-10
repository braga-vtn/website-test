import { Metadata } from "next";
import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { WorldProductApi } from "@/components/world-product-api";
import { StartUniversity } from "@/components/start-university";
import BlurIn from "@/components/ui/blur-in";
import Image from "next/image";
import { GlobeApiProducts } from "@/components/globe-api-products";
import { Soon } from "@/components/soon";
import { VideoHome } from "@/components/video-home";

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
        <WorldProductApi />
        <BlurIn
          word="O Mundo da Vistune, devs </>"
          className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
        />
        <div className="max-w-7xl mx-auto antialiased pt-4 relative">
          <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
            Meu nome é Matheus Braga e sou o desenvolvedor fundador da Vistune. Tendo acumulado diversas experiências com APIs de outras empresas, trabalhei extensivamente com integrações entre sistemas de terceiros. Assim, conheço de perto os desafios que uma documentação deficiente, alta latência e outros problemas podem causar em um sistema. Portanto, asseguramos que nosso serviço será competente e bem documentado, atendendo tanto desenvolvedores quanto entusiastas.
          </p>
          <GlobeApiProducts />
          <h1 className="text-2xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mt-24">
            Possibilidades
          </h1>
          <p className="mt-16 font-normal text-base text-current dark:text-neutral-300 text-center">
            Nossa política é promover o máximo acesso possível aos nossos recursos. Portanto, disponibilizamos funções como a criação de modelos, agentes e treinamentos em alinhamento com o que produzimos internamente. Estamos comprometidos em oferecer a você a oportunidade de criar produtos tão incríveis quanto os nossos, ou até superiores. Nosso objetivo não é a exclusividade, mas sim contribuir efetivamente para o desenvolvimento da sociedade, direta ou indiretamente, através da aplicação da inteligência artificial em diversos campos.
            <br /><br />
            Se você possuir o whitelabel, terá acesso a diversos endpoints, como criar e editar contas, adicionar tokens, bloquear acessos, atribuir funcionalidades adicionais e muito mais. Por padrão, o whitelabel é configurado para um perfil que exige mínimas alterações pelo proprietário, mas caso necessário, é possível modificar certas funções de administrador por meio da API.
            <br /><br />
            Nossos endpoints são organizados em três categorias: básica &quot;Plano Advanced&quot;, avançada &quot;Plano Developer&quot; e administrador &quot;Whitelabel&quot;. Estas categorias definem quais endpoints seu secret-token está autorizado a acessar e utilizar. De nossa parte, você contará com recursos computacionais robustos, uma documentação completa e um suporte dedicado que trabalhará ao seu lado para alcançar seus objetivos. Juntos, vamos transformar o mundo!
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
