import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Montserrat } from 'next/font/google'
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/context/theme-provider";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${font.className}`}>
        <link href='/simbolo_vistune_white.svg' rel='icon' type='image/x-icon' />
        <body
          className={cn(
            "bg-white dark:bg-black antialiased h-full w-full selection:bg-neutral-200 dark:selection:bg-neutral-800 select-none"
          )}
        >
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
            defaultTheme="dark"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
