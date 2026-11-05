// Dados centrais do site. Edite aqui: tudo que está marcado com TODO é provisório.

export const site = {
  name: "T.I Pro",
  legalName: "T.I Pro Tecnologia", // TODO: razão social
  url: "https://tipro.com.br", // TODO: domínio definitivo
  email: "contato@tipro.com.br", // TODO
  phoneDisplay: "(00) 00000-0000", // TODO
  whatsapp: "5500000000000", // TODO: DDI + DDD + número, só dígitos
  whatsappMessage:
    "Olá! Vim pelo site da T.I Pro e gostaria de solicitar um diagnóstico de TI.",
  cnpj: "00.000.000/0001-00", // TODO
  city: "Sua cidade", // TODO
  region: "UF", // TODO
  instagram: "https://instagram.com/", // TODO
  linkedin: "https://linkedin.com/", // TODO
  title: "T.I Pro | Suporte de TI, Infraestrutura e Automação para empresas",
  description:
    "Suporte de TI, infraestrutura de redes, backup, CFTV, ERP e automação para pequenas e médias empresas. Experiência real em varejo, indústria e serviços.",
  stats: {
    years: "10+", // TODO: confirme os anos de experiência
    clients: "5",
    uptime: "99,9%",
  },
};

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

// Empresas onde o fundador atuou/atua. TODO: confirme autorização para exibir os nomes.
export const clients = [
  "Div Design",
  "Umaniportas",
  "Telhadão",
  "Ssousa Contabilidade",
  "Móveis Imperador",
];
