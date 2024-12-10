import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default function Page() {
  redirect('/products/application');

  return null;
}