// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES_DOCUMENTATION: EachRoute[] = [
  {
    title: "Início",
    href: "/start",
    noLink: true,
    items: [
      { title: "Introdução", href: "/introduction" },
      { title: "Primeiros Passos", href: "/first-steps" },
      { title: "Ecossistema", href: "/ecosystem" },
      {
        title: "Aplicativo",
        href: "/application",
        noLink: true,
        items: [
          { title: "Introdução", href: "/introduction" },
          { title: "Dashboard", href: "/dashboard" },
          { title: "Bate-Papo", href: "/chat" },
          {
            title: "Flow",
            href: "/flow",
            noLink: true,
            items: [
              { title: "Modelos da Vistune", href: "/vistune-models" },
              { title: "Agentes", href: "/agents" },
              { title: "Automação", href: "/automation" },
              { title: "Comandos", href: "/commands" },
              { title: "Webhooks", href: "/webhooks" },
            ],
          },
          { title: "Treinamentos", href: "/trainings" },
          { title: "Playground", href: "/playground" },
          { title: "Integrações", href: "/integrations" },
          { title: "Arquivos", href: "/files" },
          { title: "Plano de Indicação", href: "/referral-plan" },
          { title: "Assinatura", href: "/signature" },
          {
            title: "Configurações",
            href: "/settings",
            noLink: true,
            items: [
              { title: "Perfil", href: "/profile" },
              { title: "Cadastro", href: "/register" },
              { title: "Equipe", href: "/team" },
              { title: "Aparência", href: "/appearance" },
              { title: "Token de API", href: "/api-token" }
            ],
          },
          { title: "Roadmap", href: "/roadmap" },
        ],
      },
      {
        title: "University",
        href: "/university",
        noLink: true,
        items: [
          { title: "Introdução", href: "/introduction" },
        ],
      },
      {
        title: "Marketplace",
        href: "/marketplace",
        noLink: true,
        items: [
          { title: "Introdução", href: "/introduction" },
        ],
      },
      {
        title: "Referência da API",
        href: "/api-reference",
        noLink: true,
        items: [
          { title: "Introdução", href: "/introduction" },
        ],
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