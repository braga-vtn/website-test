import { Background } from "@/components/background";
import { Container } from "@/components/container";
import { TitleDefault } from "@/components/title-default";
import { notFound, redirect } from "next/navigation";
import { getDocsForSlug, getPoliciesForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import { page_routes_policies } from "@/lib/routes-config";

type PageProps = {
  params: { slug: string[] };
};

export default async function PoliciesPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");

  if (!pathName) redirect('/policies/business-terms');

  const res = await getPoliciesForSlug(pathName);

  if (!res) redirect('/policies/business-terms');

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Background />
      <Container className="flex flex-col items-center justify-between  pb-20">
        <TitleDefault title={res.frontmatter.title} description={res.frontmatter.description} badge={res.frontmatter.valid}/>
        <div className="relative flex items-start gap-10 w-full">
          <div className="flex-[4.5] pt-32">
            <Typography>
              <div>{res.content}</div>
            </Typography>
          </div>
        </div>
      </Container>
    </div>

  );
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  try {
    const res = await getPoliciesForSlug(pathName);
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
  return page_routes_policies.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
