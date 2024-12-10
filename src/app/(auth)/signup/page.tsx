import { SignupForm } from "@/components/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default function SignupPage() {
  return <SignupForm />;
}
