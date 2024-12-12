import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { buttonVariants } from "./ui/button";
import { HeartIcon, TriangleIcon } from "lucide-react";

export const Footer = () => {
  const sections = [
    {
      title: "Produtos",
      links: [
        { name: "Aplicativo", href: "/products/application" },
        { name: "Vistune University", href: "/products/university" },
        { name: "API", href: "/products/api" },
        { name: "Whitelabel", href: "/products/whitelabel" },
        { name: "Criador de Conteúdo", href: "/products/creator" },
        { name: "Marketplace", href: "/products/marketplace" },
      ],
    },
    {
      title: "Soluções",
      links: [
        { name: "Modelos", href: "/solutions/models" },
        { name: "Omnichannel", href: "/solutions/omnichannel" },
        { name: "Agentes", href: "/solutions/agents" },
        { name: "Playground", href: "/solutions/playground" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { name: "Aulas e Cursos", href: "/resources/content" },
        { name: "Plano de Indicação", href: "/resources/referral" },
        { name: "Integrações", href: "/resources/integrations" },
        { name: "Treinamento da IA", href: "/resources/training" },
        { name: "Dúvidas e ajuda", href: "/resources/help" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "/company/about" },
        // { name: "Carreira", href: "/company/career" },
        { name: "Contato", href: "/company/contact" },
        { name: "Marca", href: "/company/brand" },
        // { name: "Parceiros", href: "/company/partners" },
        { name: "Documentação", href: "/documentation" },
        { name: "Blog", href: "/blog" },
        // { name: "Status", href: "/status" },
      ],
    },
    {
      title: "Políticas e Termos",
      links: [
        { name: "Termos de Uso", href: "/policies/terms-of-use" },
        { name: "Política de Privacidade", href: "/policies/privacy-policy" },
        { name: "Termo de Serviço", href: "/policies/terms-of-service" },
        { name: "Política de Uso", href: "/policies/use-policy" },
        { name: "Termos Comerciais", href: "/policies/business-terms" },
        { name: "Política de Compartilhamento", href: "/policies/sharing-publication-policy" },
        { name: "Divulgação de Vulnerabilidades", href: "/policies/coordinated-vulnerability-disclosure-policy" },
        { name: "Adendo de Processamento de Dados", href: "/policies/data-processing-addendum" },
        { name: "Termos de Crédito de Serviço", href: "/policies/service-credit-terms" },
      ],
    },
    {
      title: "Social",
      links: [
        { name: "Instagram", href: "https://www.instagram.com/vistuneai" },
        { name: "X", href: "https://x.com/vistuneai" },
        { name: "Facebook", href: "https://www.facebook.com/vistune" },
        { name: "Linkedin", href: "https://www.linkedin.com/company/vistune" },
        { name: "Youtube", href: "https://www.youtube.com/@VistuneAI" },
        { name: "TikTok", href: "https://www.tiktok.com/@vistuneai" },
      ],
    },
  ];

  return (
    <div className="relative">
      <div className="border-t border-neutral-100 dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm flex sm:flex-row flex-col justify-between items-start px-4">
          <div className="text-neutral-500 dark:text-neutral-400">
            <div className="mr-4 md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; 2024 Vistune Labs</div>
            <div className="mt-2">All rights reserved</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            {sections.map((section) => (
              <div key={section.title} className="flex justify-center space-y-4 flex-col mt-4">
                <h4 className="font-semibold text-current text-sm">{section.title}</h4>
                {section.links.map((link) => (
                  <Link
                    key={link.name}
                    className="transition-colors hover:text-black text-neutral-500 dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm hover:underline"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export function FooterButtons() {
  return (
    <>
      <Link
        href="https://vercel.com/templates/next.js/documentation-template"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current" />
        Deploy
      </Link>
      <Link
        href="https://github.com/sponsors/nisabmohd"
        className={buttonVariants({ variant: "outline", size: "sm" })}
      >
        <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current" />
        Sponsor
      </Link>
    </>
  );
}