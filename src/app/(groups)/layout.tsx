import type { Metadata } from "next";
import "../globals.css";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Spotlight } from "@/components/ui/Spotlight";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-70 z-40"
        fill="white"
      />
      <nav className="w-full h-[4.4rem] sticky top-0 z-50 backdrop-blur-md">
        <NavBar />
      </nav>
      {children}
      <Footer />
    </main>
  );
}
