"use client";
import Anchor from "../anchor";
import { SheetClose } from "../ui/sheet";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { motion } from "framer-motion";

const navItems = [
  {
    title: "Produtos",
    submenu: true,
    subItems: [
      {
        title: "Aplicativo",
        link: "/products/application",
      },
      {
        title: "Vistune University",
        link: "/products/university",
      },
      {
        title: "API",
        link: "/products/api",
      },
      {
        title: "Whitelabel",
        link: "/products/whitelabel",
      },
      {
        title: "Criador de Conteúdo",
        link: "/products/creator",
      },
      {
        title: "Marketplace",
        link: "/products/marketplace",
      },
    ]
  },
  {
    title: "Soluções",
    submenu: true,
    subItems: [
      {
        title: "Modelos",
        link: "/solutions/models",
      },
      {
        title: "Omnichannel",
        link: "/solutions/omnichannel",
      },
      {
        title: "Agentes",
        link: "/solutions/agents",
      },
      {
        title: "Playground",
        link: "/solutions/playground",
      },
    ]
  },
  {
    title: "Recursos",
    submenu: true,
    subItems: [
      {
        title: "Aulas e Cursos",
        link: "/resources/content",
      },
      {
        title: "Plano de Indicação",
        link: "/resources/referral",
      },
      {
        title: "Integrações",
        link: "/resources/integrations",
      },
      {
        title: "Treinamento da IA",
        link: "/resources/training",
      },
      {
        title: "Dúvidas e ajuda",
        link: "/resources/help",
      },
    ]
  },
  {
    title: "Empresa",
    submenu: true,
    subItems: [
      {
        title: "Sobre Nós",
        link: "/company/about",
      },
      // {
      //   title: "Carreira",
      //   link: "/company/career",
      // },
      {
        title: "Contato",
        link: "/company/contact",
      },
      {
        title: "Marca",
        link: "/company/brand",
      },
      // {
      //   title: "Parceiros",
      //   link: "/company/partners",
      // },
    ]
  },
  {
    title: "Documentação",
    submenu: false,
    link: "/documentation",
  },
  {
    title: "Blog",
    submenu: false,
    link: "/blog",
  },
];

export function NavBar() {
  return (
    <motion.nav
      initial={{
        y: -80,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        ease: [0.6, 0.05, 0.1, 0.9],
        duration: 0.8,
      }}
      className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
    >
      <div className="hidden lg:block w-full z-50">
        <DesktopNavbar navItems={navItems} />
      </div>
      <div className="flex h-full w-full items-center lg:hidden z-50">
        <MobileNavbar navItems={navItems} />
      </div>
    </motion.nav>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {navItems.map((item) => {
        const Comp = (
          <Anchor
            key={item.title}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={"/"}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}