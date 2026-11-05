import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "T.I Pro: suporte de TI, infraestrutura e automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const svg = await readFile(
    join(process.cwd(), "public/brand/tipro-logo-horizontal-fundo-escuro.svg"),
  );
  const logo = `data:image/svg+xml;base64,${svg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#001319",
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(8,160,208,0.5), transparent 55%), radial-gradient(circle at 92% 100%, rgba(64,255,201,0.28), transparent 50%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={520} height={164} alt="T.I Pro" />
        <div style={{ fontSize: 58, fontWeight: 600, lineHeight: 1.12, marginTop: 52, maxWidth: 1000 }}>
          Infraestrutura de TI para o seu negócio não parar
        </div>
        <div style={{ fontSize: 30, color: "#A8B0C8", marginTop: 34 }}>
          Suporte de TI, redes, backup, CFTV, ERP, SEO e automação
        </div>
      </div>
    ),
    size,
  );
}
