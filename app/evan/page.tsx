"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  MessageCircle,
  TrendingUp,
  Sliders,
  Target,
  Zap,
  Shield,
  DollarSign,
  Gift,
  Tags,
  Users,
} from "lucide-react";

// ── Slide data ────────────────────────────────────────────────────────────────

const SLIDES = [
  {
    id: 1,
    tag: "A Evolução Sniper",
    title: "ROBÔ EVAN V3.7",
    body: "Automação de precisão para traders que não aceitam compromissos. Tecnologia de ponta para operações no mercado financeiro.",
    cta: "ATIVAR MEUS 14 DIAS GRÁTIS",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-hero-bg.png",
    icon: <TrendingUp size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 2,
    tag: "Fator Impulso + Inclinação EMA9",
    title: "Diferencial Técnico",
    body: "Entrada confirmada apenas com tendência estabelecida. O Fator Impulso detecta o momento exato. A EMA9 valida a direção. Precisão cirúrgica em cada operação.",
    cta: "CONHECER MAIS",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-tech-bg.png",
    icon: <TrendingUp size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 3,
    tag: "Parametrização Total",
    title: "Soberania do Trader",
    body: "Você controla tudo. Defina horários de agressividade, inclinação mínima da EMA9 e filtros de volatilidade. O robô executa sua estratégia, não a nossa.",
    cta: "DESCOBRIR CONTROLES",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-tech-bg.png",
    icon: <Sliders size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 4,
    tag: "Pivô + Pullback",
    title: "Estratégia Sniper",
    body: "Comprovação matemática de cada entrada. O robô aguarda o pivô de suporte, confirma o pullback e executa com precisão. Sem emoção, sem hesitação.",
    cta: "VER ESTRATÉGIA",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-tech-bg.png",
    icon: <Target size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 5,
    tag: "Detecção de Volume",
    title: "Força Explosiva",
    body: "O robô identifica explosões de volume no gráfico. Quando o mercado move, você já está posicionado. Aproveita a força do mercado em seu favor.",
    cta: "EXPLORAR FORÇA",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-tech-bg.png",
    icon: <Zap size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 6,
    tag: "BreakEven + Trailing Stop",
    title: "Gestão de Risco",
    body: "Proteção automática do seu lucro. BreakEven blinda a entrada. Trailing Stop acompanha os ganhos. Seu patrimônio está seguro.",
    cta: "PROTEGER LUCROS",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-tech-bg.png",
    icon: <Shield size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 7,
    tag: "Stop Financeiro Configurável",
    title: "Segurança Financeira",
    body: "Metas de ganho e perda diárias. Você define o limite máximo de risco por dia. O robô respeita seus limites. Operação responsável e controlada.",
    cta: "CONFIGURAR METAS",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-tech-bg.png",
    icon: <DollarSign size={36} />,
    accentColor: "#ef4444",
  },
  {
    id: 8,
    tag: "2 Semanas Grátis",
    title: "Oferta Especial",
    body: "Teste o Robô Evan V3.7 sem compromisso. 14 dias completos para validar a estratégia. Sem cartão de crédito. Sem risco. Comece agora.",
    cta: "ATIVAR MEUS 14 DIAS GRÁTIS",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-offer-bg.png",
    icon: <Gift size={36} />,
    accentColor: "#ef4444",
    special: "offer",
  },
  {
    id: 9,
    tag: "Escolha seu Investimento",
    title: "Planos e Preços",
    body: null,
    cta: "GARANTIR MINHA VAGA",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-pricing-bg.png",
    icon: <Tags size={36} />,
    accentColor: "#ef4444",
    special: "pricing",
    plans: [
      { name: "Mensal", price: "R$ 247", badge: null },
      { name: "Trimestral", price: "R$ 518,70", badge: "30% OFF" },
      {
        name: "Anual",
        price: "R$ 2.074,80",
        badge: "30% OFF + Bônus Técnico",
        highlight: true,
      },
    ],
  },
  {
    id: 10,
    tag: "DMGTRADER",
    title: "Bem-vindo ao Futuro",
    body: "Conecte-se com a comunidade. Siga nossas redes, converse no WhatsApp e faça parte da revolução da automação.",
    cta: "FALE COM DAVI",
    ctaHref: "https://wa.me/5561991728618",
    bg: "/evan-community-bg.png",
    icon: <Users size={36} />,
    accentColor: "#ef4444",
    special: "contact",
  },
] as const;

// ── Main component ────────────────────────────────────────────────────────────

export default function EvanPage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 200);
    },
    [animating, current],
  );

  const prev = useCallback(() => {
    goTo(current === 0 ? SLIDES.length - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current === SLIDES.length - 1 ? 0 : current + 1);
  }, [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const slide = SLIDES[current];

  return (
    <div
      className="relative flex h-screen w-full flex-col overflow-hidden select-none"
      style={{ background: "#000", fontFamily: "system-ui, sans-serif" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${slide.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: animating ? 0 : 1,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.72) 60%, rgba(0,0,0,0.88) 100%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <main
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center"
        style={{ opacity: animating ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        {/* Tag */}
        <p
          className="mb-3 text-base font-light tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.18em" }}
        >
          {slide.tag}
        </p>

        {/* Title */}
        <h1
          className="mb-5 font-bold leading-tight text-white"
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.6)",
          }}
        >
          {slide.id === 1 ? (
            <>ROBÔ EVAN V3.7</>
          ) : (
            slide.title
          )}
        </h1>

        {/* Body / special content */}
        {slide.special === "pricing" ? (
          <PricingCards plans={(slide as typeof SLIDES[8]).plans} />
        ) : slide.special === "offer" ? (
          <OfferHighlight />
        ) : (
          <p
            className="mb-8 max-w-2xl text-center leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            }}
          >
            {slide.body}
          </p>
        )}

        {/* CTA */}
        <a
          href={slide.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block rounded px-10 py-4 font-bold uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
          style={{
            background: slide.accentColor,
            color: "#fff",
            fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
            letterSpacing: "0.12em",
            boxShadow: `0 4px 24px ${slide.accentColor}60`,
          }}
        >
          {slide.cta}
        </a>

        {/* Social icons on last slide */}
        {slide.special === "contact" && (
          <div className="mt-8 flex items-center gap-6">
            {[
              {
                href: "https://web.facebook.com/share/1LSiRgPRoQ/",
                icon: <Facebook size={24} />,
                label: "Facebook",
              },
              {
                href: "https://instagram.com/",
                icon: <Instagram size={24} />,
                label: "Instagram",
              },
              {
                href: "https://wa.me/5561991728618",
                icon: <MessageCircle size={24} />,
                label: "WhatsApp",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border transition-colors hover:border-white"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        )}
      </main>

      {/* ── Navigation arrows ──────────────────────────────────────────── */}
      {current > 0 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Página anterior"
          className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition-colors hover:border-white hover:text-white"
          style={{
            borderColor: "rgba(255,255,255,0.3)",
            color: "rgba(255,255,255,0.6)",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {current < SLIDES.length - 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Próxima página"
          className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border transition-colors hover:border-white hover:text-white"
          style={{
            borderColor: "rgba(255,255,255,0.3)",
            color: "rgba(255,255,255,0.6)",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* ── Bottom bar: dots + page counter ───────────────────────────── */}
      <footer className="relative z-10 flex flex-col items-center gap-3 pb-5">
        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Ir para página ${s.id}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all"
              style={{
                width: i === current ? 28 : 10,
                height: 10,
                background: i === current ? "#ef4444" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
        {/* Page counter */}
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem" }}>
          {`Página ${current + 1} de ${SLIDES.length}`}
        </p>
      </footer>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function OfferHighlight() {
  return (
    <div className="mb-6 flex flex-col items-center gap-2">
      <p
        className="text-center leading-relaxed"
        style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 2.2vw, 1.2rem)", maxWidth: "600px" }}
      >
        Teste o Robô Evan V3.7 sem compromisso. 14 dias completos para validar a estratégia.
        Sem cartão de crédito. Sem risco. Comece agora.
      </p>
      <div className="mt-3 flex items-center gap-4">
        {["Sem cartão", "Sem risco", "Suporte incluso"].map((item) => (
          <span
            key={item}
            className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ background: "rgba(239,68,68,0.15)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.3)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type Plan = {
  name: string;
  price: string;
  badge: string | null;
  highlight?: boolean;
};

function PricingCards({ plans }: { plans: readonly Plan[] }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-center gap-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className="flex flex-col items-center rounded-xl px-7 py-5 transition-transform hover:scale-105"
          style={{
            background: plan.highlight
              ? "rgba(239,68,68,0.18)"
              : "rgba(0,0,0,0.55)",
            border: plan.highlight
              ? "1px solid rgba(239,68,68,0.7)"
              : "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            minWidth: 160,
          }}
        >
          {plan.badge && (
            <span
              className="mb-2 rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-wider"
              style={{
                background: plan.highlight ? "#ef4444" : "rgba(239,68,68,0.25)",
                color: plan.highlight ? "#fff" : "#fca5a5",
              }}
            >
              {plan.badge}
            </span>
          )}
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {plan.name}
          </p>
          <p
            className="mt-1 font-bold"
            style={{
              color: plan.highlight ? "#ef4444" : "#fff",
              fontSize: plan.highlight ? "1.6rem" : "1.3rem",
            }}
          >
            {plan.price}
          </p>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem" }}>/ período</p>
        </div>
      ))}
    </div>
  );
}
