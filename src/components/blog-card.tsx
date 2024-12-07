"use client"
import React from "react";
import { BlurImage } from "./blur-image";
import { Logo } from "./Logo";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { BlogWithSlug } from "@/lib/blog";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export const BlogCard = ({ blog }: { blog: BlogWithSlug }) => {
  const router = useRouter();
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };


  const handleRedirect = (url: string) => {
    router.push(url);
  };

  return (
    <div
      className="shadow-derek rounded-3xl border w-full bg-neutral-50 dark:bg-neutral-900  overflow-hidden  hover:scale-[1.02] transition duration-200 cursor-pointer"
      onClick={() => handleRedirect(`/blog/${blog.slug}`)}
    >
      {blog.image ? (
        <BlurImage
          src={blog.image || ""}
          alt={blog.title}
          height="800"
          width="800"
          className="h-52 object-cover object-top w-full"
        />
      ) : (
        <div className="h-52 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
          <Logo />
        </div>
      )}
      <div className="p-4 md:p-8 bg-neutral-50 dark:bg-neutral-900">
        <div className="flex space-x-2 items-center  mb-2">
          <Image
            src={blog.author.src}
            alt={blog.author.name}
            width={1000}
            height={1000}
            className="rounded-full h-7 w-7"
          />
          <p className="text-sm font-normal text-neutral-500">{blog.author.name}</p>
        </div>
        <p className="text-lg font-bold mb-4">
          <Balancer>{blog.title}</Balancer>
        </p>
        <p className={cn(
          "max-w-4xl text-left my-4 mx-auto text-left text-sm mt-2",
          "text-current font-normal dark:text-muted-dark",
        )}>
          {truncate(blog.description, 100)}
        </p>
      </div>
    </div>
  );
};
