"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Password from "./password";
import { Button } from "./button";
import { Logo } from "./Logo";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Por favor digite seu nome",
    })
    .min(1, "Por favor insira o e-mail"),
  email: z
    .string({
      required_error: "Por favor insira o e-mail",
    })
    .email("Por favor insira um e-mail válido")
    .min(1, "Por favor insira o e-mail"),
  company: z
    .string({
      required_error: "Por favor insira o nome da sua empresa",
    })
    .min(1, "Por favor insira o nome da sua empresa"),
  message: z
    .string({
      required_error: "Por favor digite sua mensagem",
    })
    .min(1, "Por favor digite sua mensagem"),
});

export type LoginUser = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<LoginUser>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: LoginUser) {
    try {
    } catch (e) { }
  }

  const socials = [
    {
      title: "twitter",
      href: "https://twitter.com/mannupaaji",
      icon: (
        <IconBrandX className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "github",
      href: "https://github.com/manuarora700",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/manuarora28",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
  ];

  return (
    <Form {...form}>
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Entre em Contato
            </h1>
            <p className="mt-4 text-muted dark:text-muted-dark  text-sm max-w-sm">
              Este canal é destinado exclusivamente para contatos comerciais com a Vistune AI.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Nome Completo
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="name"
                            type="name"
                            placeholder="Matheus Braga"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border py-1.5  shadow-aceternity text-black placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Endereço de Email
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="email"
                            type="email"
                            placeholder="braga@gmail.com"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border py-1.5  shadow-aceternity text-black placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Empresa
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <input
                            id="company"
                            type="company"
                            placeholder="Company X"
                            className="block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border py-1.5  shadow-aceternity text-black placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium leading-6 text-neutral-700 dark:text-muted-dark"
                      >
                        Mensagem
                      </label>
                      <FormControl>
                        <div className="mt-2">
                          <textarea
                            rows={5}
                            id="message"
                            placeholder="Digite sua mensagem aqui"
                            className="block min-h-10 w-full bg-white dark:bg-neutral-900 px-4 rounded-md border py-1.5  shadow-aceternity text-black placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm sm:leading-6 dark:text-white"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button className="w-full">Enviar</Button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="flex items-center justify-center space-x-4 py-4">
            {socials.map((social) => (
              <Link href={social.href} key={social.title}>
                {social.icon}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </Form>
  );
}
