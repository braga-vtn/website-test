"use client";
import { VideoHome } from "./video-home";
import { TracingBeam } from "./ui/tracing-beam";
import { GradualSpacing } from "./ui/gradual-spacing";
import CardImage from "./card-image";

export const DescriptionReferral = () => {
  return (
    <>
      <GradualSpacing
        className="font-display text-center text-4xl font-bold md:text-5xl"
        text="Como funciona?"
      />
      <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
        O Plano de Indicação da Vistune funciona da seguinte maneira: toda vez que alguém utilizar o seu cupom no checkout para adquirir uma assinatura ou um adicional, uma parte do valor faturado será direcionada a você na forma de prêmios. As premiações são oferecidas em dois formatos: tokens para uso no aplicativo ou recompensas em dinheiro. Esta é a forma mais eficaz que encontramos para retribuir o seu apoio à Vistune!
      </p>
      <TracingBeam className="px-6 mb-10">
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-10 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] pointer-events-none" />
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
            <VideoHome />
          </div>
          <p className="mt-4 font-normal text-base text-current dark:text-neutral-300 text-center">
            Os resgates das premiações podem levar até 14 dias para serem compensados em sua conta.
          </p>
        </div>
        <div className={`flex items-center justify-between space-x-4 mb-10`}>
          <CardImage size="medium" url={"/system/website/referral-coupon.jpg"} />
          <div className="p-4 max-w-7xl mx-auto w-full">
            <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
              Conforme explicado anteriormente, o cupom é a maneira pela qual seus indicados podem obter um desconto em sua compra, enquanto você também é recompensado pela indicação. Cada cupom é único, ou seja, cada usuário da Vistune possui um diferente. Você tem a flexibilidade de alterar seu cupom a qualquer momento e, caso esteja disponível, a mudança será feita instantaneamente e estará pronta para uso!
            </p>
          </div>
        </div>
        <div className={`flex items-center justify-between space-x-4 mb-10 flex-row-reverse`}>
          <CardImage size="medium" url={"/system/website/referral-rescue.jpg"} />
          <div className="p-4 max-w-7xl mx-auto w-full">
            <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
              O resgate da premiação também é solicitado pelo Aplicativo. Você pode selecionar qual o formato de premiação deseja - entre tokens e dinheiro -, preencher o formulário e aguardar a confirmação do resgate. Assim que o premio por concebido, você receberá um email de confirmação!
            </p>
          </div>
        </div>
        <div className={`flex items-center justify-between space-x-4 mb-10`}>
          <CardImage size="medium" url={"/system/website/referral-report.jpg"} />
          <div className="p-4 max-w-7xl mx-auto w-full">
            <p className="mt-20 font-normal text-base text-current dark:text-neutral-300 text-center">
              Se precisar, você pode solicitar a qualquer momento uma revisão do seu pedido de resgate. Nossa equipe entrará em contato o mais breve possível. Esta medida foi criada para garantir que, em caso de algum engano, tudo seja resolvido da melhor forma possível!
            </p>
          </div>
        </div>
      </TracingBeam >
    </>
  );
};
