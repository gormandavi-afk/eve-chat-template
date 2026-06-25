"use client";

import { Cell, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

// ── Win Rate Gauge ─────────────────────────────────────────────────────────
function WinRateGauge({ rate }: { rate: number }) {
  const chartData = [
    { name: "Win", value: rate, fill: "var(--dmg-green)" },
    { name: "Loss", value: 100 - rate, fill: "oklch(1 0 0 / 6%)" },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <p
        className="mb-3 text-xs font-medium uppercase tracking-widest"
        style={{ color: "var(--dmg-text-2)" }}
      >
        Taxa de Acerto
      </p>
      <div className="relative h-36 w-36">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="68%"
            outerRadius="100%"
            startAngle={220}
            endAngle={-40}
            data={chartData}
            barSize={10}
          >
            {chartData.map((entry, index) => (
              <RadialBar key={index} dataKey="value" cornerRadius={6}>
                <Cell fill={entry.fill} />
              </RadialBar>
            ))}
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-mono text-2xl font-bold"
            style={{ color: "var(--dmg-green)" }}
          >
            {rate}%
          </span>
          <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
            acerto
          </span>
        </div>
      </div>
      <div className="mt-3 flex gap-4 text-xs" style={{ color: "var(--dmg-text-2)" }}>
        <span>
          <span style={{ color: "var(--dmg-green)" }}>■ </span>Wins:{" "}
          {Math.round((rate / 100) * 7)}
        </span>
        <span>
          <span style={{ color: "var(--dmg-red)" }}>■ </span>Loss:{" "}
          {Math.round(((100 - rate) / 100) * 7)}
        </span>
      </div>
    </div>
  );
}

// ── Drawdown Bar ───────────────────────────────────────────────────────────
interface DrawdownCardProps {
  current: number;
  maxAllowed: number;
  maxDrawdown: number;
}

function DrawdownCard({ current, maxAllowed, maxDrawdown }: DrawdownCardProps) {
  const pct = Math.min((current / maxAllowed) * 100, 100);
  const barColor =
    pct > 75
      ? "var(--dmg-red)"
      : pct > 50
        ? "var(--dmg-amber)"
        : "var(--dmg-green)";

  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <p
        className="mb-1 text-xs font-medium uppercase tracking-widest"
        style={{ color: "var(--dmg-text-2)" }}
      >
        Controle de Drawdown
      </p>
      <div className="mb-4 flex items-end justify-between">
        <span className="font-mono text-2xl font-semibold" style={{ color: barColor }}>
          -{current.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
        <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
          Limite:{" "}
          {maxAllowed.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ background: "var(--dmg-surface-3)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: barColor }}
        />
      </div>
      <p className="mt-2 text-xs" style={{ color: "var(--dmg-text-3)" }}>
        {pct.toFixed(0)}% do limite utilizado &bull; Max hist.:{" "}
        -{maxDrawdown.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
}

// ── Strategy Filters ───────────────────────────────────────────────────────
const filters = [
  { name: "Ichimoku Cloud", active: true },
  { name: "Media Movel 21", active: true },
  { name: "Volume Institucional", active: true },
  { name: "Barra Elefante", active: true },
  { name: "Bull/Bear 180", active: true },
  { name: "Breakeven Auto", active: false },
];

function StrategyFilters() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <p
        className="mb-4 text-xs font-medium uppercase tracking-widest"
        style={{ color: "var(--dmg-text-2)" }}
      >
        Filtros da Estrategia
      </p>
      <ul className="flex flex-col gap-2.5">
        {filters.map((f) => (
          <li key={f.name} className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "var(--dmg-text-1)" }}>
              {f.name}
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-xs font-medium"
              style={{
                background: f.active ? "var(--dmg-green-dim)" : "var(--dmg-surface-3)",
                color: f.active ? "var(--dmg-green)" : "var(--dmg-text-3)",
              }}
            >
              {f.active ? "Ativo" : "Inativo"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Subscription Badge ─────────────────────────────────────────────────────
function SubscriptionBadge() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{
        background: "var(--dmg-surface-2)",
        borderColor: "var(--dmg-amber)",
        boxShadow: "0 0 0 1px var(--dmg-amber-dim)",
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--dmg-amber)" }}
          >
            Plano Atual
          </p>
          <p className="mt-1 text-xl font-bold" style={{ color: "var(--dmg-text-1)" }}>
            Anual
          </p>
          <p className="mt-0.5 font-mono text-sm" style={{ color: "var(--dmg-amber)" }}>
            R$ 119,40
            <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
              /mes
            </span>
          </p>
        </div>
        <span
          className="rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{ background: "var(--dmg-amber-dim)", color: "var(--dmg-amber)" }}
        >
          -40%
        </span>
      </div>
      <div className="mt-4 space-y-1 text-xs" style={{ color: "var(--dmg-text-2)" }}>
        <p>Validade: 01/07/2027</p>
        <p>Economia anual: R$ 955,20</p>
      </div>
      <div className="mt-3 h-px w-full" style={{ background: "var(--dmg-border)" }} />
      <p className="mt-3 text-xs" style={{ color: "var(--dmg-text-3)" }}>
        Acesso completo · Atualizacoes · Suporte
      </p>
    </div>
  );
}

export { WinRateGauge, DrawdownCard, StrategyFilters, SubscriptionBadge };
