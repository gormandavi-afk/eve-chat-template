import {
  TrendingUp,
  BarChart2,
  Activity,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { MetricCard } from "@/components/dashboard/metric-card";
import { PnlChart } from "@/components/dashboard/pnl-chart";
import { TradeHistory } from "@/components/dashboard/trade-history";
import {
  WinRateGauge,
  DrawdownCard,
  StrategyFilters,
  SubscriptionBadge,
} from "@/components/dashboard/strategy-panel";

export default function DashboardPage() {
  return (
    <main
      className="min-h-screen font-sans"
      style={{ background: "var(--dmg-surface-1)", color: "var(--dmg-text-1)" }}
    >
      {/* ── Top bar ──────────────────────────────────────────────── */}
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
          <span
            className="font-sans text-base font-semibold"
            style={{ color: "var(--dmg-text-1)" }}
          >
            TRADER
          </span>
          <span
            className="hidden rounded px-1.5 py-0.5 font-mono text-xs sm:inline"
            style={{ background: "var(--dmg-amber-dim)", color: "var(--dmg-amber)" }}
          >
            PRO
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs" style={{ color: "var(--dmg-text-2)" }}>
          <span className="hidden sm:block">Davi Gorman Miller de Souza</span>
          <span
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5"
            style={{ background: "var(--dmg-green-dim)", color: "var(--dmg-green)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            Mercado Aberto
          </span>
        </div>
      </header>

      <div className="mx-auto max-w-screen-xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        {/* ── Page title ──────────────────────────────────────────── */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1
              className="text-2xl font-bold tracking-tight text-balance"
              style={{ color: "var(--dmg-text-1)" }}
            >
              Painel de Resultados
            </h1>
            <p className="mt-1 text-sm" style={{ color: "var(--dmg-text-2)" }}>
              Junho 2026 &bull; WIN &amp; WDO
            </p>
          </div>
          <div className="flex items-center gap-2">
            {["7d", "30d", "Mes"].map((t) => (
              <button
                key={t}
                type="button"
                className="rounded-md px-3 py-1.5 text-xs font-medium"
                style={{
                  background: t === "Mes" ? "var(--dmg-amber-dim)" : "var(--dmg-surface-3)",
                  color: t === "Mes" ? "var(--dmg-amber)" : "var(--dmg-text-2)",
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ── KPI row ─────────────────────────────────────────────── */}
        <section className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <MetricCard
            label="Resultado Bruto"
            value="R$ 5.050"
            trendValue="R$ 320 hoje"
            trend="up"
            accent="green"
            large
            icon={<TrendingUp size={14} />}
          />
          <MetricCard
            label="Operacoes"
            value="7"
            sub="7 wins · 2 losses"
            trendValue="2 hoje"
            trend="up"
            accent="neutral"
            icon={<BarChart2 size={14} />}
          />
          <MetricCard
            label="Fator de Lucro"
            value="3.2x"
            sub="Media R$ 721/op"
            accent="amber"
            icon={<ArrowUpRight size={14} />}
          />
          <MetricCard
            label="Drawdown Atual"
            value="R$ 800"
            sub="Limite R$ 3.000"
            trendValue="27%"
            trend="neutral"
            accent="neutral"
            icon={<ShieldCheck size={14} />}
          />
          <MetricCard
            label="Sequencia Atual"
            value="4 wins"
            sub="Melhor: 6 seguidos"
            accent="green"
            icon={<Activity size={14} />}
          />
          <MetricCard
            label="Ativos"
            value="WIN · WDO"
            sub="Mini Indice + Mini Dolar"
            accent="neutral"
            icon={<Layers size={14} />}
          />
        </section>

        {/* ── Chart + Win rate ────────────────────────────────────── */}
        <div className="mb-6 grid gap-6 lg:grid-cols-[1fr_300px]">
          <PnlChart />
          <WinRateGauge rate={71} />
        </div>

        {/* ── Bottom grid ─────────────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="flex flex-col gap-6">
            <TradeHistory />
            <DrawdownCard current={800} maxAllowed={3000} maxDrawdown={1200} />
          </div>
          <div className="flex flex-col gap-6">
            <StrategyFilters />
            <SubscriptionBadge />
          </div>
        </div>

        {/* ── Disclaimer ──────────────────────────────────────────── */}
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
