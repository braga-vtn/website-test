"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function BlogCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 mb-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Últimas Postagens no Blog
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Aplicação da IA",
    title: "Transformação Empresarial Através da Inteligência Artificial.",
    src: "/blog/blog-1.jpg",
    href: "/",
  },
  {
    category: "Educação em IA",
    title: "Vistune University: Seu Guia para Dominar a IA.",
    src: "/blog/blog-2.jpg",
    href: "/",
  },
  {
    category: "Aplicação da IA",
    title: "Como a IA Está Remodelando Nossas Vidas Diárias.",
    src: "/blog/blog-3.jpg",
    href: "/",
  },

  {
    category: "Soluções e Inovações",
    title: "Inovação nas Mãos: Criando Soluções de IA com o Marketplace.",
    src: "/blog/blog-4.jpg",
    href: "/",
  },
  {
    category: "Futuro da IA",
    title: "Tendências de Inteligência Artificial para 2025: O que Esperar?.",
    src: "/blog/blog-5.jpg",
    href: "/",
  },
  {
    category: "Ética e Segurança",
    title: "Como lidar com a Segurança e Ética na IA",
    src: "/blog/blog-6.jpg",
    href: "/",
  },
];
