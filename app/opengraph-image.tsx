import { ImageResponse } from "next/og";

export const alt = "T.I Pro: suporte de TI, infraestrutura e automação";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          backgroundColor: "#040711",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(71,30,255,0.55), transparent 55%), radial-gradient(circle at 90% 100%, rgba(139,92,246,0.5), transparent 50%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg,#471EFF,#8B5CF6)",
              marginRight: 18,
              fontSize: 38,
            }}
          >
            T
          </div>
          <span>T.I</span>
          <span style={{ color: "#B794FF", marginLeft: 10 }}>Pro</span>
        </div>
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, marginTop: 48, maxWidth: 940 }}>
          Tecnologia e infraestrutura de TI para o seu negócio não parar
        </div>
        <div style={{ fontSize: 30, color: "#A8B0C8", marginTop: 32 }}>
          Suporte de TI, redes, backup, CFTV, ERP e automação
        </div>
      </div>
    ),
    size,
  );
}
