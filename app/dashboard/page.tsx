import {
  TrendingUp,
  BarChart2,
  Activity,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  DollarSign,
  Target,
} from "lucide-react";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PnlChart } from "@/components/dashboard/pnl-chart";
import { TradeHistory } from "@/components/dashboard/trade-history";
import {
  WinRateGauge,
  DrawdownCard,
  AlertSystem,
  StrategyFilters,
  SubscriptionBadge,
  CompetitiveEdge,
} from "@/components/dashboard/strategy-panel";

export default function DashboardPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: "var(--dmg-surface-1)", color: "var(--dmg-text-1)" }}
    >
      {/* ── Top bar — matches DMGTRADER v3.0 ───────────────────── */}
      <header
        className="sticky top-0 z-10 flex items-center justify-between border-b px-5 py-3"
        style={{
          background: "rgba(8,11,18,0.92)",
          borderColor: "var(--dmg-border)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo: red diamond + DMG (white) + TRADER (blue) + v3.0 badge */}
        <div className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#ef4444" />
            <path d="M14 5L22 14L14 23L6 14L14 5Z" fill="white" />
            <path d="M14 10L18 14L14 18L10 14L14 10Z" fill="#ef4444" />
          </svg>
          <span
            className="font-sans text-base font-bold tracking-tight"
            style={{ color: "var(--dmg-text-1)" }}
          >
            DMG<span style={{ color: "var(--dmg-blue)" }}>TRADER</span>
          </span>
          <span
            className="hidden rounded px-1.5 py-0.5 font-mono text-xs sm:inline"
            style={{ background: "var(--dmg-blue-dim)", color: "var(--dmg-blue-bright)" }}
          >
            v3.0
          </span>
        </div>

        {/* Social links + status pill + Entrar CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center sm:flex">
            <a
              href="https://web.facebook.com/share/1LSiRgPRoQ/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ color: "var(--dmg-text-2)" }}
            >
              <Facebook size={16} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ color: "var(--dmg-text-2)" }}
            >
              <Instagram size={16} aria-hidden="true" />
            </a>
            <a
              href="https://wa.me/5561991728618"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ color: "var(--dmg-text-2)" }}
            >
              <MessageCircle size={16} aria-hidden="true" />
            </a>
          </div>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
            style={{ background: "var(--dmg-green-dim)", color: "var(--dmg-green)" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
            Mercado Aberto
          </span>
          <button
            type="button"
            className="rounded-md px-4 py-1.5 text-xs font-semibold"
            style={{ background: "var(--dmg-blue)", color: "#fff" }}
          >
            Entrar
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* ── Page title ─────────────────────────────────────────── */}
        <div className="mb-8 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1
              className="text-2xl font-bold tracking-tight text-balance"
              style={{ color: "var(--dmg-text-1)" }}
            >
              Painel de Resultados
            </h1>
            <p className="mt-1 text-sm" style={{ color: "var(--dmg-text-2)" }}>
              5 dias de operacao verificados &bull; WIN &amp; WDO
            </p>
          </div>
          <div className="flex items-center gap-2">
            {["5d", "30d", "Tudo"].map((t) => (
              <button
                key={t}
                type="button"
                className="rounded-md px-3 py-1.5 text-xs font-medium"
                style={{
                  background: t === "5d" ? "var(--dmg-blue-dim)" : "var(--dmg-surface-3)",
                  color: t === "5d" ? "var(--dmg-blue-bright)" : "var(--dmg-text-2)",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ── KPI row ────────────────────────────────────────────── */}
        <section className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          <MetricCard
            label="Saldo Liquido"
            value="R$ 4.222"
            sub="5 dias de operacao"
            trend="up"
            trendValue="liquido"
            accent="green"
            large
            icon={<DollarSign size={14} />}
            colSpan={2}
          />
          <MetricCard
            label="Lucro Bruto"
            value="R$ 7.270"
            sub="Antes dos custos"
            accent="green"
            icon={<TrendingUp size={14} />}
            colSpan={2}
          />
          <MetricCard
            label="Fator de Lucro"
            value="2.43x"
            sub="R$2,43 p/ R$1 perdido"
            accent="blue"
            icon={<ArrowUpRight size={14} />}
            colSpan={2}
          />
          <MetricCard
            label="Win Rate"
            value="63.33%"
            sub="19 wins em 30 trades"
            accent="green"
            icon={<Activity size={14} />}
            colSpan={2}
          />
          <MetricCard
            label="Operacoes"
            value="30"
            sub="Volume consistente"
            accent="neutral"
            icon={<BarChart2 size={14} />}
          />
          <MetricCard
            label="Media/Trade"
            value="R$ 140"
            sub="Lucro medio"
            accent="neutral"
            icon={<Target size={14} />}
          />
          <MetricCard
            label="Maior Ganho"
            value="R$ 664"
            sub="Melhor operacao"
            accent="blue"
            icon={<TrendingUp size={14} />}
          />
          <MetricCard
            label="Drawdown Max"
            value="14.57%"
            sub="Controle apurado"
            accent="neutral"
            icon={<ShieldCheck size={14} />}
          />
        </section>

        {/* ── Chart + Win rate ───────────────────────────────────── */}
        <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_280px]">
          <PnlChart />
          <WinRateGauge rate={63.33} wins={19} total={30} />
        </div>

        {/* ── Alert system ───────────────────────────────────────── */}
        <div className="mb-6">
          <AlertSystem />
        </div>

        {/* ── Bottom grid ────────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6">
            <TradeHistory />
            <DrawdownCard maxDrawdownPct={14.57} />
          </div>
          <div className="flex flex-col gap-6">
            <StrategyFilters />
            <SubscriptionBadge />
          </div>
        </div>

        {/* ── Competitive edge ───────────────────────────────────── */}
        <div className="mt-6">
          <CompetitiveEdge />
        </div>

        {/* ── Disclaimer ─────────────────────────────────────────── */}
        <p
          className="mt-10 text-center text-xs leading-relaxed"
          style={{ color: "var(--dmg-text-3)" }}
        >
          Operacoes no mercado financeiro envolvem riscos e nao ha garantia de lucros.
          Rentabilidade passada nao representa garantia de rentabilidade futura.
        </p>
      </div>
    </main>
  );
}
