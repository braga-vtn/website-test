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
    title: "Tendências de IA para 2025: O que Esperar?",
    src: "/blog/blog-6.jpg",
    href: "/blog/artificial-intelligence-trends",
  },
  {
    title: "Consequências do uso de IA no longo prazo.",
    src: "/blog/blog-5.jpg",
    href: "/blog/long-term",
  },
  {
    title: "Como lidar com a Segurança e Ética na IA.",
    src: "/blog/blog-3.jpg",
    href: "/blog/safety-and-ethics",
  },
  {
    title: "Transformação empresarial através da IA.",
    src: "/blog/blog-1.jpg",
    href: "/blog/business-transformation",
  },
  {
    title: "Como a IA Está Remodelando Nossas Vidas Diárias.",
    src: "/blog/blog-4.jpg",
    href: "/blog/reshaping-our-lives",
  },
  {
    title: "Vistune University: Seu guia para dominar a IA.",
    src: "/blog/blog-2.jpg",
    href: "/blog/master-artificial-intelligence",
  },
];
