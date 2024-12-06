// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES_DOCUMENTATION: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      {
        title: "Project Structure",
        href: "/project-structure",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "Stepper", href: "/stepper" },
          { title: "Tabs", href: "/tabs" },
          { title: "Note", href: "/note" },
          { title: "Code Block", href: "/code-block" },
          { title: "Image & Link", href: "/image-link" },
          { title: "Custom", href: "/custom" },
        ],
      },
      { title: "Themes", href: "/themes" },
      {
        title: "Customize",
        href: "/customize",
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes_documentation = ROUTES_DOCUMENTATION.map((it) => getRecurrsiveAllLinks(it)).flat();

export const ROUTES_POLICIES: EachRoute[] = [
  {
    title: "Políticas",
    href: "/policies",
    noLink: true,
    items: [
      { title: "Bussiness Terms", href: "/business-terms" },
      { title: "Coordinated Vulnerability Disclosure Policy", href: "/coordinated-vulnerability-disclosure-policy" },
      { title: "Data Processing Addendum", href: "/data-processing-addendum" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Service Credit Terms", href: "/service-credit-terms" },
      { title: "Sharing Publication Policy", href: "/sharing-publication-policy" },
      { title: "Terms of Service", href: "/terms-of-service" },
      { title: "Terms of Use", href: "/terms-of-use" },
      { title: "Use Policy", href: "/use-policy" },
    ],
  },
];

export const page_routes_policies = ROUTES_POLICIES.map((it) => getRecurrsiveAllLinks(it)).flat();