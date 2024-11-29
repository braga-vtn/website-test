"use client";
import React from "react";
import { CarouselLandingPage } from "./carousel-landing-page";

type Props = {
  carouselText1: string;
  carouselText2: string;
  carouselText3: string;
  carouselSrc1: string;
  carouselSrc2: string;
  carouselSrc3: string;
}

export function SectionInsights(props: Props) {
  return (
    <div className="z-30">
      <CarouselLandingPage carouselText1={props.carouselText1} carouselText2={props.carouselText2} carouselText3={props.carouselText3} carouselSrc1={props.carouselSrc1} carouselSrc2={props.carouselSrc2} carouselSrc3={props.carouselSrc3} />
    </div>
  );
}
