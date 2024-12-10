import { type Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { BlogCard } from "@/components/blog-card";

export const metadata: Metadata = {
  title: 'Vistune.',
  description: 'Inteligência Artificial para Empresas',
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default async function ArticlesIndex() {
  let blogs = await getAllBlogs();

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 md:pt-40">
          <Heading as="h1" size="2xl" className="font-semibold">Blog</Heading>
          <Subheading className="text-center">
            Explore os artigos publicados pela Vistune AI, que abordam diversos tópicos sobre Inteligência Artificial e suas aplicações na sociedade.
          </Subheading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-20 w-full mb-10">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>
      </Container>
    </div>
  );
}
