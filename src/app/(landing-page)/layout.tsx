import type { Metadata } from "next";
import "../globals.css";
import { Spotlight } from "@/components/ui/Spotlight";
import { FooterLandingPage } from "./_components/footer";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="select-text">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-70"
        fill="white"
      />
      {children}
      <FooterLandingPage />
    </main>
  );
}
