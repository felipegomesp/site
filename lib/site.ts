// Dados centrais do site. Edite aqui: tudo que está marcado com TODO precisa de confirmação.

export const site = {
  name: "T.I Pro",
  legalName: "T.I Pro", // TODO: razão social completa (CNPJ 58.187.744/0001-47)
  url: "https://tiprosolucoes.com.br",
  email: "contato@tiprosolucoes.com.br", // TODO: confirme que este e-mail existe
  phoneDisplay: "(11) 94017-6591",
  whatsapp: "5511940176591", // DDI + DDD + número, só dígitos
  whatsappMessage:
    "Olá! Vim pelo site da T.I Pro e gostaria de solicitar um diagnóstico de TI.",
  cnpj: "58.187.744/0001-47",
  city: "", // TODO: cidade (aparece no rodapé e no Google se preenchida)
  region: "SP",
  instagram: "", // TODO: link do Instagram (deixe vazio para ocultar)
  linkedin: "", // TODO: link do LinkedIn (deixe vazio para ocultar)
  title: "T.I Pro | Suporte de TI, Infraestrutura e Automação para empresas",
  description:
    "Suporte de TI, infraestrutura de redes, backup, CFTV, ERP, sites, SEO e automação para pequenas e médias empresas. Experiência real em varejo, indústria e serviços.",
  stats: {
    years: "10+", // TODO: confirme os anos de experiência
    clients: "8",
    uptime: "99,9%",
  },
};

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
