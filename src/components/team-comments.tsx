import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function TeamComments() {
  const testimonials = [
    {
      quote:
        "O futuro com inteligência artificial trará mudanças inevitáveis, mas nós estamos aqui para garantir que você esteja preparado para essa nova realidade!",
      name: "Matheus Braga",
      designation: "Fundador",
      src: "/system/avatar-mb.jpg",
    },
    {
      quote:
        "Empreendedor apaixonado por negócios digitais e IA. Co-fundador da Vistune, invisto em ideias inovadoras e tecnologias emergentes para criar conexões autênticas e impactantes.",
      name: "Yan Rodrigues",
      designation: "Co-Fundador",
      src: "/system/avatar-yan.jpg",
    }
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
