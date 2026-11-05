import Reveal from "@/components/Reveal";
import {
  IconCamera,
  IconCart,
  IconCheck,
  IconCode,
  IconFlow,
  IconNetwork,
  IconShield,
  IconWhatsApp,
} from "@/components/Icons";
import { clientLogos } from "@/lib/clients";
import { site, whatsappLink } from "@/lib/site";

const services = [
  {
    icon: IconNetwork,
    title: "Infraestrutura e redes",
    text: "Máquinas, servidores, e-mails, máquinas virtuais, Active Directory, DHCP e rede estruturada, configurados para a empresa trabalhar sem fila de reclamação.",
    tags: ["Servidores", "Active Directory", "E-mail", "VMs"],
  },
  {
    icon: IconShield,
    title: "Segurança, backup e licenças",
    text: "Backup que roda sozinho e é testado, regras de firewall revisadas e licenças de software regularizadas e controladas.",
    tags: ["Backup", "Firewall", "Licenciamento"],
  },
  {
    icon: IconCamera,
    title: "CFTV e câmeras",
    text: "Projeto, instalação e manutenção de câmeras integradas à rede, com gravação organizada e acesso remoto seguro.",
    tags: ["Câmeras IP", "Gravação", "Acesso remoto"],
  },
  {
    icon: IconCart,
    title: "ERP e integrações",
    text: "Bling, marketplaces como o Magalu e loja virtual conversando entre si, para estoque, pedidos e anúncios no mesmo fluxo.",
    tags: ["Bling", "Magalu", "E-commerce"],
  },
  {
    icon: IconCode,
    title: "Sistemas, sites e presença digital",
    text: "Sites, lojas virtuais, SEO e campanhas no Google Ads, além de páginas de sistema e dashboards feitos para o processo da sua empresa, não o contrário.",
    tags: ["Sites", "SEO", "Google Ads", "Dashboards"],
  },
  {
    icon: IconFlow,
    title: "Automação e atendimento",
    text: "Fluxos com n8n e software de atendimento personalizado com Chatwoot, para tirar tarefa repetitiva do dia da equipe.",
    tags: ["n8n", "Chatwoot", "Integrações"],
  },
];

const steps = [
  {
    title: "Diagnóstico",
    text: "Mapeamos rede, servidores, backups, licenças e rotina da equipe. Você recebe um retrato claro do que está bom e do que é risco.",
  },
  {
    title: "Proposta",
    text: "Priorizamos o que resolve primeiro, com escopo, prazo e valor combinados antes de qualquer serviço começar.",
  },
  {
    title: "Implantação",
    text: "Executamos em horários que não param a operação e documentamos senhas, acessos e configurações.",
  },
  {
    title: "Suporte",
    text: "Acompanhamos o ambiente depois da entrega, com atendimento direto e melhoria contínua.",
  },
];

const cases = [
  {
    company: "Móveis Imperador e Móveis ponto móveis",
    segment: "Fabricação e venda de bancos de jardim",
    title: "Loja virtual e ERP Bling para quem fabrica e vende",
    text: "Criação da loja virtual e gestão do ERP Bling, com integração ao marketplace do Magalu, para as duas marcas de bancos de jardim.",
    result: "Vendas online e gestão da operação conectadas ao mesmo ERP.",
  },
  {
    company: "Div Design",
    segment: "Divisórias de alto padrão",
    title: "TI completa, dashboards e presença digital",
    text: "Servidor, máquinas virtuais, backup, rede e firewall, mais sistemas sob medida como dashboards, instalação de CFTV, Google Ads, SEO e o site.",
    result: "Da infraestrutura ao marketing digital com um único responsável.",
  },
  {
    company: "Umani Portas",
    segment: "Portas hospitalares",
    title: "O mesmo modelo de TI aplicado a outra fábrica",
    text: "Infraestrutura, segurança, backup, sistemas, CFTV, Google Ads, SEO e site, seguindo o padrão da Div Design e adaptado à operação de portas hospitalares.",
    result: "Ambientes padronizados entre as duas indústrias.",
  },
  {
    company: "Telhadão & Cia",
    segment: "Material de construção",
    title: "Máquinas, e-mails e servidores sob controle",
    text: "Cuidado da infraestrutura de máquinas, e-mails e servidores da loja, mantendo a operação do dia a dia funcionando.",
    result: "Um único responsável quando algo para.",
  },
  {
    company: "Ssousa Contabilidade",
    segment: "Serviços contábeis",
    title: "Site e atendimento com Chatwoot personalizado",
    text: "Desenvolvimento do site e personalização do Chatwoot, um software de atendimento, para o jeito de atender do escritório.",
    result: "Conversas de clientes organizadas no mesmo painel.",
  },
  {
    company: "Mobinc",
    segment: "Pesquisa de mercado",
    title: "Site para uma empresa de pesquisa de mercado",
    text: "Criação do site institucional da Mobinc, apresentando a empresa e seus serviços de pesquisa.",
    result: "Site próprio para apresentar a empresa a novos clientes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phoneDisplay,
  image: `${site.url}/opengraph-image`,
  logo: `${site.url}/brand/tipro-icone-app-512.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    ...(site.city ? { addressLocality: site.city } : {}),
    addressRegion: site.region,
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: [
    "Suporte de TI",
    "Infraestrutura de redes",
    "Firewall e Active Directory",
    "Backup e segurança da informação",
    "CFTV",
    "Integração de ERP Bling e marketplaces",
    "Automação com n8n",
    "Chatwoot",
    "SEO e Google Ads",
  ],
  sameAs: [site.instagram, site.linkedin].filter(Boolean),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de T.I",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.text },
    })),
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="header">
        <div className="header__inner">
          <a className="brand" href="#inicio" aria-label="T.I Pro, ir para o início">
            <img
              src="/brand/tipro-logo-horizontal-fundo-escuro.svg"
              alt="T.I Pro"
              width={127}
              height={40}
            />
          </a>

          <nav className="pill" aria-label="Principal">
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#cases">Cases</a>
            <a href="#contato">Contato</a>
          </nav>

          <a
            className="btn btn--ghost header__cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp (abre em nova aba)"
          >
            Fale conosco
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="hero" id="inicio" aria-labelledby="hero-titulo">
          <div className="glow glow--blue" aria-hidden="true" />
          <div className="glow glow--mint" aria-hidden="true" />
          <div className="container hero__grid">
            <div className="hero__copy">
              <h1 id="hero-titulo" className="hero__title">
                Tecnologia e infraestrutura de TI para o seu negócio não parar
              </h1>
              <p className="hero__lead">
                Suporte de TI, redes, backup, câmeras, ERP e automação para
                pequenas e médias empresas, feitos por quem já cuida disso na
                prática, todos os dias.
              </p>
              <div className="hero__actions">
                <a
                  className="btn btn--primary"
                  href={whatsappLink(
                    "Olá! Gostaria de solicitar um diagnóstico de TI para minha empresa.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar diagnóstico pelo WhatsApp (abre em nova aba)"
                >
                  Solicitar diagnóstico
                </a>
                <a className="btn btn--ghost" href="#servicos">
                  Ver serviços
                </a>
              </div>
              <ul className="hero__trust" aria-label="Diferenciais">
                <li>
                  <IconCheck /> Atendimento direto com quem executa
                </li>
                <li>
                  <IconCheck /> Documentação de tudo que é entregue
                </li>
              </ul>
            </div>

            <div className="hero__visual">
              <div
                className="monitor"
                role="img"
                aria-label="Exemplo ilustrativo de painel de monitoramento mostrando firewall ativo, backup concluído, câmeras online e ERP sincronizado."
              >
                <div className="monitor__bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>Painel do ambiente (exemplo ilustrativo)</span>
                </div>
                <ul className="monitor__rows" aria-hidden="true">
                  <li>
                    <span className="dot dot--ok" />
                    <span>Firewall</span>
                    <em>Ativo</em>
                  </li>
                  <li>
                    <span className="dot dot--ok" />
                    <span>Backup noturno</span>
                    <em>Concluído às 02:00</em>
                  </li>
                  <li>
                    <span className="dot dot--ok" />
                    <span>Câmeras</span>
                    <em>Todas online</em>
                  </li>
                  <li>
                    <span className="dot dot--ok" />
                    <span>ERP e marketplace</span>
                    <em>Sincronizado</em>
                  </li>
                  <li>
                    <span className="dot dot--warn" />
                    <span>Licenças</span>
                    <em>1 vence em 18 dias</em>
                  </li>
                </ul>
                <div className="monitor__chart" aria-hidden="true">
                  <div className="monitor__chart-head">
                    <span>Disponibilidade nos últimos 30 dias</span>
                  </div>
                  <svg viewBox="0 0 400 90" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#23BFEF" stopOpacity=".38" />
                        <stop offset="1" stopColor="#23BFEF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      className="spark__fill"
                      d="M0 60 L30 52 L60 58 L90 40 L120 46 L150 30 L180 38 L210 24 L240 34 L270 20 L300 28 L330 16 L360 22 L400 10 L400 90 L0 90Z"
                      fill="url(#spark)"
                    />
                    <path
                      className="spark__line"
                      pathLength={1}
                      d="M0 60 L30 52 L60 58 L90 40 L120 46 L150 30 L180 38 L210 24 L240 34 L270 20 L300 28 L330 16 L360 22 L400 10"
                      fill="none"
                      stroke="#40FFC9"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>

              <div className="stats">
              <dl className="stat glass">
                <dt>anos de experiência</dt>
                <dd>{site.stats.years}</dd>
              </dl>
              <dl className="stat glass">
                <dt>empresas atendidas</dt>
                <dd>{site.stats.clients}</dd>
              </dl>
              <dl className="stat glass">
                <dt>meta de uptime</dt>
                <dd>{site.stats.uptime}</dd>
              </dl>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="proof" aria-labelledby="proof-titulo">
          <div className="container">
            <h2 id="proof-titulo" className="proof__title">
              Empresas que já confiam a TI à T.I Pro
            </h2>
          </div>
          <div className="marquee">
            <div className="marquee__track">
              {[false, true].map((dup) => (
                <ul
                  key={String(dup)}
                  className="marquee__list"
                  aria-hidden={dup || undefined}
                  aria-label={dup ? undefined : "Clientes"}
                >
                  {clientLogos.map((c) => (
                    <li
                      key={c.key}
                      className={c.color ? "has-color" : undefined}
                      style={{ "--tile": c.tile ?? "transparent" } as React.CSSProperties}
                    >
                      <span
                        className="logo"
                        style={{ height: c.dh, aspectRatio: `${c.w} / ${c.h}` }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="logo__mono"
                          src={c.src}
                          alt={dup ? "" : `Logo da ${c.name}`}
                          width={c.w}
                          height={c.h}
                          loading="lazy"
                          decoding="async"
                        />
                        {c.color ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            className="logo__color"
                            src={c.color}
                            alt=""
                            width={c.w}
                            height={c.h}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="section section--alt" id="sobre" aria-labelledby="sobre-titulo">
          <div className="container about">
            <Reveal className="about__copy">
              <h2 id="sobre-titulo" className="h2">
                Suporte de TI feito por quem vive a rotina da empresa
              </h2>
              <p className="lead">
                A T.I Pro nasceu da prática. O fundador é o responsável de TI
                de empresas de varejo, indústria e serviços, onde cuida de
                infraestrutura, ERP, licenças, câmeras, backup, firewall e da
                rede inteira.
              </p>
              <p>
                Isso significa que cada solução aqui já foi testada em
                operação real, com prazo apertado, equipe pequena e orçamento
                limitado. Você conversa direto com quem coloca a mão no
                servidor, sem intermediários e sem jargão desnecessário.
              </p>
              <a
                className="btn btn--primary"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar com o fundador pelo WhatsApp (abre em nova aba)"
              >
                Conversar com o fundador
              </a>
            </Reveal>

            <Reveal className="about__panel glass" delay={120}>
              <h3 className="about__panel-title">Experiência por segmento</h3>
              <dl className="seg">
                <div>
                  <dt>Indústria</dt>
                  <dd>Div Design (divisórias), Umani Portas (portas hospitalares)</dd>
                </div>
                <div>
                  <dt>Fabricação e varejo</dt>
                  <dd>Móveis Imperador e Móveis ponto móveis (bancos de jardim), Telhadão & Cia (material de construção)</dd>
                </div>
                <div>
                  <dt>Serviços</dt>
                  <dd>Ssousa Contabilidade, Mobinc (pesquisa de mercado), SDC Treinamentos (aulas de inglês)</dd>
                </div>
              </dl>
              <p className="about__note">
                Rede, servidores, ERP, e-commerce, atendimento e sites,
                conectados em um só ambiente.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="section" id="servicos" aria-labelledby="servicos-titulo">
          <div className="container">
            <Reveal className="section__head">
              <h2 id="servicos-titulo" className="h2">
                Infraestrutura, segurança e automação sob o mesmo teto
              </h2>
              <p className="lead">
                Seis áreas que cobrem o dia a dia de TI de uma pequena ou
                média empresa.
              </p>
            </Reveal>

            <div className="grid">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 80}>
                  <article className="card">
                    <span className="card__icon">
                      <s.icon />
                    </span>
                    <h3 className="card__title">{s.title}</h3>
                    <p className="card__text">{s.text}</p>
                    <ul className="tags" aria-label="Tecnologias">
                      {s.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <section className="section section--alt section--slant" id="processo" aria-labelledby="processo-titulo">
          <div className="container">
            <Reveal className="section__head">
              <h2 id="processo-titulo" className="h2">
                Como trabalhamos, do primeiro contato ao suporte
              </h2>
            </Reveal>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title} className="step">
                  <Reveal delay={i * 90}>
                    <span className="step__n" aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className="step__title">{s.title}</h3>
                    <p>{s.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CASES */}
        <section className="section" id="cases" aria-labelledby="cases-titulo">
          <div className="container">
            <Reveal className="section__head">
              <h2 id="cases-titulo" className="h2">
                Cases de TI em empresas reais
              </h2>
              <p className="lead">
                Projetos conduzidos pelo fundador nos ambientes onde atua.
              </p>
            </Reveal>
            <div className="grid grid--cases">
              {cases.map((c, i) => (
                <Reveal key={c.company} delay={i * 80}>
                  <article className="case">
                    <p className="case__meta">
                      <b>{c.company}</b>
                      <span>{c.segment}</span>
                    </p>
                    <h3 className="case__title">{c.title}</h3>
                    <p>{c.text}</p>
                    <p className="case__result">
                      <IconCheck /> {c.result}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="contato" aria-labelledby="cta-titulo">
          <div className="container cta__inner">
            <h2 id="cta-titulo" className="cta__title">
              Descubra o que está em risco na TI da sua empresa
            </h2>
            <p className="cta__text">
              Conte como sua empresa funciona hoje. Respondemos com os
              próximos passos, sem compromisso.
            </p>
            <a
              className="btn btn--light"
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar no WhatsApp para solicitar diagnóstico (abre em nova aba)"
            >
              <IconWhatsApp className="btn__wa" /> Chamar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div
          className={`container footer__grid${site.instagram || site.linkedin ? "" : " footer__grid--3"}`}
        >
          <div>
            <a className="brand" href="#inicio" aria-label="T.I Pro, voltar ao início">
              <img
              src="/brand/tipro-logo-horizontal-fundo-escuro.svg"
              alt="T.I Pro"
              width={127}
              height={40}
            />
            </a>
            <p className="footer__about">
              Suporte de TI, infraestrutura e automação para pequenas e médias
              empresas.
            </p>
          </div>

          <nav aria-label="Links rápidos">
            <h2 className="footer__h">Links rápidos</h2>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#processo">Como trabalhamos</a></li>
              <li><a href="#cases">Cases</a></li>
            </ul>
          </nav>

          <div>
            <h2 className="footer__h">Contato</h2>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${site.phoneDisplay} (abre em nova aba)`}
                >
                  {site.phoneDisplay}
                </a>
              </li>
              {site.city ? (
                <li>
                  {site.city}, {site.region}
                </li>
              ) : null}
            </ul>
          </div>

          {site.instagram || site.linkedin ? (
            <div>
              <h2 className="footer__h">Redes</h2>
              <ul>
                {site.instagram ? (
                  <li>
                    <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                ) : null}
                {site.linkedin ? (
                  <li>
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                ) : null}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container footer__legal">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Todos os direitos
            reservados.
          </p>
          <p>CNPJ {site.cnpj}</p>
        </div>
      </footer>

      <a
        className="wa-float"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a T.I Pro no WhatsApp (abre em nova aba)"
      >
        <IconWhatsApp />
      </a>
    </>
  );
}
