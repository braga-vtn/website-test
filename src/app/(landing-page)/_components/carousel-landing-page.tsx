"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type Props = {
  carouselText1: string;
  carouselText2: string;
  carouselText3: string;
  carouselSrc1: string;
  carouselSrc2: string;
  carouselSrc3: string;
}

export function CarouselLandingPage(props: Props) {
  const data = [
    {
      category: "",
      title: props.carouselText1, // Usando o texto da props
      src: props.carouselSrc1,
      href: "",
    },
    {
      category: "",
      title: props.carouselText2, // Usando o texto da props
      src: props.carouselSrc2,
      href: "",
    },
    {
      category: "",
      title: props.carouselText3, // Usando o texto da props
      src: props.carouselSrc3,
      href: "",
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full mt-20">
      <Carousel items={cards} StopStep={true} />
    </div>
  );
}
