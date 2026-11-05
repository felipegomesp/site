import logos from "./logos.json";

// Altura de exibição (px) de cada logo na faixa, para equilibrar o peso visual.
// Em /public/clients há a versão branca (padrão) e a colorida (hover).
const displayHeight: Record<string, number> = {
  "moveis-imperador": 114,
  "div-design": 50,
  telhadao: 62,
  umani: 34,
  "ss-contabilidade": 88,
  mobinc: 36,
  "moveis-ponto-moveis": 68,
  sdc: 30,
};

export type ClientLogo = {
  key: string;
  name: string;
  src: string;
  w: number;
  h: number;
  dh: number;
  /** Versão colorida original, exibida no hover (null se não houver). */
  color: string | null;
  /** Cor de fundo do cartão no hover (null = sem cartão). */
  tile: string | null;
};

export const clientLogos: ClientLogo[] = logos.map((l) => ({
  ...l,
  dh: displayHeight[l.key] ?? 44,
}));
