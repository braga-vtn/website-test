import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { notFound, redirect } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import { page_routes_documentation } from "@/lib/routes-config";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");

  if (!pathName) redirect('/documentation/start/introduction');

  const res = await getDocsForSlug(pathName);

  if (!res) redirect('/documentation/start/introduction');

  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        {/* <DocsBreadcrumb paths={slug} /> */}
        <Typography>
          <h1 className="text-3xl !-mt-3">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  try {
    const res = await getDocsForSlug(pathName);
    if (!res) return null;
    const { frontmatter } = res;
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch (error) {
    return null;
  }
}

export function generateStaticParams() {
  return page_routes_documentation.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
