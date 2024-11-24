import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AppWindow, Book, BrainCircuit, Cable, Leaf } from "lucide-react";

const features = [
  {
    Icon: Book,
    name: "Documentação",
    description: "Veja como deve ser utilizado cada função.",
    href: "/documentation",
    cta: "Ver Mais",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: AppWindow,
    name: "Aplicativo",
    description: "utilize IA no seu dia a dia com nosso App.",
    href: "/products/application",
    cta: "Ver Mais",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Leaf,
    name: "Playground",
    description: "Interaja com modelos globais e agentes.",
    href: "/solutions/playground",
    cta: "Ver Mais",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: BrainCircuit,
    name: "Vistune University",
    description: "Conhecimento de forma gratuita para você.",
    href: "/products/university",
    cta: "Ver Mais",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Cable,
    name: "Integrações",
    description:
      "Conecte a Vistune aos seus apps favoritos.",
    href: "/resources/integrations",
    cta: "Ver Mais",
    background: <div className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function ContainerHome() {
  return (
    <BentoGrid className="lg:grid-rows-3 mb-48">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
