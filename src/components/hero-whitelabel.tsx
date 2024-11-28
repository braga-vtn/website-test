"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroWhitelabel() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Login",
    thumbnail:
      "/system/app/login.jpg",
  },
  {
    title: "Dashboard",
    thumbnail:
      "/system/app/dashboard.jpg",
  },
  {
    title: "Bate-papo",
    thumbnail:
      "/system/app/chat.jpg",
  },
  {
    title: "Flow",
    thumbnail:
      "/system/app/flow.jpg",
  },
  {
    title: "Playground",
    thumbnail:
      "/system/app/playground.jpg",
  },
  {
    title: "Treinamentos",
    thumbnail:
      "/system/app/training.jpg",
  },
  {
    title: "Integrações",
    thumbnail:
      "/system/app/integration.jpg",
  },
  {
    title: "Arquivos",
    thumbnail:
      "/system/app/file.jpg",
  },
  {
    title: "Plano de Indicação",
    thumbnail:
      "/system/app/referrer.jpg",
  },
  {
    title: "Assinatura",
    thumbnail:
      "/system/app/signature.jpg",
  },
  {
    title: "Configurações",
    thumbnail:
      "/system/app/settings.jpg",
  },
  {
    title: "Roadmap",
    thumbnail:
      "/system/app/roadmap.jpg",
  },
  {
    title: "Logs",
    thumbnail:
      "/system/app/logs.jpg",
  }
];
