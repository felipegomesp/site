import logos from "./logos.json";

// Todas as logos ocupam a mesma "área visual" (equilíbrio de peso), com limites de
// altura e largura. Em /public/clients há a versão branca (padrão) e a colorida (hover).
const AREA = 11000;
const MAX_H = 108;
const MAX_W = 230;

function displayHeight(w: number, h: number): number {
  const aspect = w / h;
  return Math.round(Math.min(Math.sqrt(AREA / aspect), MAX_H, MAX_W / aspect));
}

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
  dh: displayHeight(l.w, l.h),
}));
