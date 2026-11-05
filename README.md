# T.I Pro, site institucional (Next.js)

## Antes de publicar
Edite `lib/site.ts` e troque tudo marcado com TODO: domínio, WhatsApp (só dígitos com DDI+DDD), e-mail, telefone, CNPJ, cidade/UF, redes, anos de experiência.
Confirme também se pode exibir os nomes dos clientes na faixa de empresas e nos cases.

## Rodar local
npm install && npm run dev

## Deploy no Easypanel (Hostinger VPS)
1. Suba este projeto num repositório Git (GitHub).
2. No Easypanel: Create Service > App > Source: Github (repo + branch) > Build: Dockerfile.
3. Porta do app: 3000. Em Domains, adicione seu domínio e ative HTTPS.
4. Deploy.

## Notas de performance
- Página 100% estática (pré-renderizada), fonte Manrope self-hosted, sem bibliotecas de UI.
- Único JS de cliente: o componente `Reveal` (animação ao rolar).
- Imagem Open Graph gerada em /opengraph-image.
