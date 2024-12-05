"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BlurIn from "./ui/blur-in";

const faqItems = [
  {
    id: "item-1",
    title: "Como ter o Whitelabel da Vistune?",
    description: "Embora nosso Whitelabel ainda não esteja disponível, quando for lançado, poderá ser acessado no aplicativo, na seção de Assinatura, em Adicionais."
  },
  {
    id: "item-2",
    title: "Como é descontado os tokens e como é feito a contabilidade do uso?",
    description: "Na Vistune, todas as operações são controladas por tokens. Por exemplo, ao enviar uma mensagem no Playground pelo aplicativo, uma quantidade específica de tokens é descontada de sua conta. Essa quantidade varia conforme o modelo utilizado e as camadas de dados empregadas. Assim, o consumo de tokens é diversificado e ajustado de acordo com o seu uso."
  },
  {
    id: "item-3",
    title: "Como eu conecto o meu WhatsApp na Vistune?",
    description: "Para conectar o WhatsApp à Vistune, é necessário assinar o plano Advanced no aplicativo. Com esse plano, a página de integrações se torna acessível, e ao clicar no ícone do WhatsApp, o QR Code estará disponível para ser escaneado."
  },
  {
    id: "item-4",
    title: "Como acessar a Vistune University?",
    description: "A Vistune University ainda não está disponível, com previsão de lançamento para o primeiro semestre de 2025."
  },
  {
    id: "item-5",
    title: "Como convidar pessoas para minha conta?",
    description: "Para convidar alguém para sua conta, é necessário que a pessoa já tenha uma conta na Vistune. Em seguida, basta acessar o aplicativo, ir até Configurações e selecionar a seção Equipe, onde você encontrará um botão que permite adicionar o e-mail e definir as permissões que a pessoa terá."
  },
  {
    id: "item-6",
    title: "Como acessar o Marketplace?",
    description: "O Marketplace ainda não está disponível, com previsão de lançamento para o segundo semestre de 2025."
  },
  {
    id: "item-7",
    title: "Em quantos dias eu recebo o premio pela indicação?",
    description: "Agradecemos antecipadamente por todas as suas indicações. Respondendo à sua pergunta: o prazo pode ser de até 14 dias, o que assegura ao indicado o direito de reembolso."
  },
  {
    id: "item-8",
    title: "Eu preciso ter uma conta para cada plataforma da Vistune?",
    description: "Não é necessário. A Vistune conta com o desenvolvimento de três plataformas: o aplicativo, a Vistune University e o Marketplace. No entanto, essas plataformas são interconectadas, permitindo que você acesse todas elas com a mesma conta."
  },
  {
    id: "item-9",
    title: "Como funciona a API?",
    description: "Atualmente, o acesso à nossa API está limitado a poucos endpoints. No entanto, o objetivo da Vistune é disponibilizar uma ampla gama de ferramentas e funções para desenvolvedores por meio da API. Para mais detalhes, consulte nossa documentação!"
  },
  {
    id: "item-10",
    title: "Como ser um Criador de Conteúdo?",
    description: "A função de Criador de Conteúdo ainda não está disponível na Vistune. Esta funcionalidade será lançada juntamente com a Vistune University."
  }
];

export function HelpDescription() {
  return (
    <>
      <BlurIn
        word="Dúvidas Frequentes"
        className="text-2xl md:text-5xl mb-4 mt-20 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
      />
      <div className="max-w-7xl mx-auto antialiased relative">
        <p className="mb-6 font-normal text-base text-current dark:text-neutral-300 text-center mx-auto">
          A Vistune University oferece vídeos e materiais sobre diversos tópicos relacionados à Vistune. Se sua dúvida não for esclarecida aqui, recomendamos visitar nossa plataforma de cursos e buscar o assunto desejado.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full z-20 relative">
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="border px-5 rounded-2xl bg-neutral-50 dark:bg-neutral-950 my-4">
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}