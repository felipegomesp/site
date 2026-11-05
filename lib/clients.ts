import logos from "./logos.json";

// Altura de exibição (px) de cada logo na faixa, para equilibrar o peso visual.
// Os arquivos em /public/clients são versões brancas com fundo transparente.
const displayHeight: Record<string, number> = {
  "moveis-imperador": 58,
  "div-design": 46,
  telhadao: 54,
  umani: 30,
  "ss-contabilidade": 58,
  mobinc: 32,
  "moveis-ponto-moveis": 54,
  sdc: 26,
};

export type ClientLogo = {
  key: string;
  name: string;
  src: string;
  w: number;
  h: number;
  dh: number;
};

export const clientLogos: ClientLogo[] = logos.map((l) => ({
  ...l,
  dh: displayHeight[l.key] ?? 44,
}));
