"use client";

import { ROUTES_DOCUMENTATION } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/documentation")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {ROUTES_DOCUMENTATION.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/documentation${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
