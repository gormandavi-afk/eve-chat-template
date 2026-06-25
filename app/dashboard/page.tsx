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
      {/* ── Top bar ─────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-10 flex items-center justify-between border-b px-6 py-3"
        style={{
          background: "oklch(0.13 0 0 / 88%)",
          borderColor: "var(--dmg-border)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-base font-bold tracking-tight"
            style={{ color: "var(--dmg-amber)" }}
          >
            DMG
          </span>
          <span className="font-sans text-base font-semibold" style={{ color: "var(--dmg-text-1)" }}>
            TRADER
          </span>
          <span
            className="hidden rounded px-1.5 py-0.5 font-mono text-xs sm:inline"
            style={{ background: "var(--dmg-amber-dim)", color: "var(--dmg-amber)" }}
          >
            Robo Soldado V18.0
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--dmg-text-2)" }}>
          <span className="hidden sm:block">Davi Gorman Miller de Souza</span>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{ background: "var(--dmg-green-dim)", color: "var(--dmg-green)" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
            Mercado Aberto
          </span>
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
                  background: t === "5d" ? "var(--dmg-amber-dim)" : "var(--dmg-surface-3)",
                  color: t === "5d" ? "var(--dmg-amber)" : "var(--dmg-text-2)",
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
            accent="amber"
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
            accent="amber"
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
