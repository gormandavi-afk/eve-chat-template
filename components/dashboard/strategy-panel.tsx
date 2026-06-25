"use client";

import { Cell, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { ShieldCheck, Zap, Target, Eye, Users, CheckCircle2 } from "lucide-react";

// ── Win Rate Gauge ─────────────────────────────────────────────────────────
interface WinRateGaugeProps {
  rate: number;
  wins: number;
  total: number;
}

function WinRateGauge({ rate, wins, total }: WinRateGaugeProps) {
  const losses = total - wins;
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
            {rate.toFixed(0)}%
          </span>
          <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
            acerto
          </span>
        </div>
      </div>
      <div className="mt-3 flex gap-4 text-xs" style={{ color: "var(--dmg-text-2)" }}>
        <span>
          <span style={{ color: "var(--dmg-green)" }}>■ </span>
          {wins} wins
        </span>
        <span>
          <span style={{ color: "var(--dmg-red)" }}>■ </span>
          {losses} losses
        </span>
      </div>
      <p className="mt-2 text-xs" style={{ color: "var(--dmg-text-3)" }}>
        {total} operacoes totais
      </p>
    </div>
  );
}

// ── Drawdown Card ──────────────────────────────────────────────────────────
interface DrawdownCardProps {
  maxDrawdownPct: number;
}

function DrawdownCard({ maxDrawdownPct }: DrawdownCardProps) {
  const pct = maxDrawdownPct;
  const barColor =
    pct > 20
      ? "var(--dmg-red)"
      : pct > 12
        ? "var(--dmg-amber)"
        : "var(--dmg-green)";

  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <div className="mb-4 flex items-center justify-between">
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--dmg-text-2)" }}
        >
          Controle de Drawdown
        </p>
        <ShieldCheck size={14} style={{ color: barColor }} />
      </div>
      <div className="mb-3 flex items-end justify-between">
        <span className="font-mono text-2xl font-semibold" style={{ color: barColor }}>
          {pct.toFixed(2)}%
        </span>
        <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
          Drawdown maximo atingido
        </span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full"
        style={{ background: "var(--dmg-surface-3)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.min(pct * 3.5, 100)}%`, background: barColor }}
        />
      </div>
      <p className="mt-2 text-xs" style={{ color: "var(--dmg-text-3)" }}>
        Controle de risco apurado &bull; Meta: manter abaixo de 20%
      </p>
    </div>
  );
}

// ── Alert System ───────────────────────────────────────────────────────────
const alerts = [
  {
    color: "#F5C518",
    label: "Amarelo",
    title: "Pullback se formando",
    desc: "Atencao! Potencial entrada em formacao.",
    dot: "bg-yellow-400",
  },
  {
    color: "#FFFFFF",
    label: "Branco",
    title: "Zona de confluencia",
    desc: "Esperando confirmacao de entrada.",
    dot: "bg-white",
  },
  {
    color: "#39FF14",
    label: "Verde Lime",
    title: "Compra em andamento",
    desc: "Operacao de compra ativa no momento.",
    dot: "bg-lime-400",
  },
  {
    color: "#EF4444",
    label: "Vermelho",
    title: "Venda em andamento",
    desc: "Operacao de venda ativa no momento.",
    dot: "bg-red-500",
  },
  {
    color: "#6B7280",
    label: "Cinza",
    title: "Aguardando momento",
    desc: "Robo aguardando o momento certo.",
    dot: "bg-gray-400",
  },
];

function AlertSystem() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <div className="mb-4 flex items-center gap-2">
        <Zap size={14} style={{ color: "var(--dmg-blue)" }} />
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--dmg-text-2)" }}
        >
          Sistema de Alertas Inteligentes
        </p>
        <span
          className="ml-auto rounded px-2 py-0.5 text-xs"
          style={{ background: "var(--dmg-blue-dim)", color: "var(--dmg-blue-bright)" }}
        >
          Visual + Sonoro
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-5">
        {alerts.map((a) => (
          <div
            key={a.label}
            className="flex flex-col gap-2 rounded-lg border p-3"
            style={{ borderColor: "var(--dmg-border)", background: "var(--dmg-surface-3)" }}
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-3 w-3 rounded-full ${a.dot}`}
                style={{ boxShadow: `0 0 6px ${a.color}66` }}
              />
              <span className="text-xs font-semibold" style={{ color: a.color }}>
                {a.label}
              </span>
            </div>
            <p className="text-xs font-medium leading-relaxed" style={{ color: "var(--dmg-text-1)" }}>
              {a.title}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--dmg-text-3)" }}>
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Strategy Filters ───────────────────────────────────────────────────────
const filters = [
  { name: "Estrategia Rockefeller", active: true },
  { name: "Oliver Velez + Elephant Bar", active: true },
  { name: "Bull/Bear 180", active: true },
  { name: "Pullback 30% (minimo)", active: true },
  { name: "Media Movel Ajustavel", active: true },
  { name: "Trailing Stop Automatico", active: true },
  { name: "Breakeven Automatico", active: true },
  { name: "Gestao em Reais (R$)", active: true },
];

function StrategyFilters() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <div className="mb-4 flex items-center gap-2">
        <Target size={14} style={{ color: "var(--dmg-blue)" }} />
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--dmg-text-2)" }}
        >
          Filtros da Estrategia
        </p>
      </div>
      <ul className="flex flex-col gap-2.5">
        {filters.map((f) => (
          <li key={f.name} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={13}
                style={{ color: f.active ? "var(--dmg-green)" : "var(--dmg-text-3)", flexShrink: 0 }}
              />
              <span className="text-sm" style={{ color: "var(--dmg-text-1)" }}>
                {f.name}
              </span>
            </div>
            <span
              className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
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
        borderColor: "var(--dmg-blue)",
        boxShadow: "0 0 0 1px var(--dmg-blue-dim)",
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--dmg-blue-bright)" }}
          >
            Plano Atual
          </p>
          <p className="mt-1 text-xl font-bold" style={{ color: "var(--dmg-text-1)" }}>
            Anual
          </p>
          <p className="mt-0.5 font-mono text-sm" style={{ color: "var(--dmg-blue-bright)" }}>
            R$ 119,40
            <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
              /mes
            </span>
          </p>
        </div>
        <span
          className="rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{ background: "var(--dmg-blue-dim)", color: "var(--dmg-blue-bright)" }}
        >
          -40%
        </span>
      </div>
      <div className="mt-4 space-y-1 text-xs" style={{ color: "var(--dmg-text-2)" }}>
        <p>Economia anual: R$ 955,20</p>
        <p>Robo Soldado V18.0 incluso</p>
      </div>
      <div className="mt-3 h-px w-full" style={{ background: "var(--dmg-border)" }} />
      <p className="mt-3 text-xs" style={{ color: "var(--dmg-text-3)" }}>
        Acesso completo &bull; Atualizacoes &bull; Suporte dedicado
      </p>
    </div>
  );
}

// ── Competitive Edge ───────────────────────────────────────────────────────
const edges = [
  {
    icon: <Target size={20} />,
    title: "Disciplina Inabalavel",
    desc: "Sem emocoes, sem hesitacoes. O robo segue a estrategia com precisao cirurgica, 24/5.",
    accent: "var(--dmg-blue)",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Estrategia Comprovada",
    desc: "Oliver Velez + Pullback 30% = combinacao testada e validada por traders profissionais.",
    accent: "var(--dmg-green)",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Controle Total em Reais",
    desc: "Voce define exatamente quanto quer ganhar e perder por dia. Sem surpresas.",
    accent: "var(--dmg-blue)",
  },
  {
    icon: <Eye size={20} />,
    title: "Transparencia Absoluta",
    desc: "Cada decisao tem logica clara. Sem caixas pretas. Voce entende tudo que o robo faz.",
    accent: "var(--dmg-green)",
  },
];

function CompetitiveEdge() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <div className="mb-5 flex items-center gap-2">
        <Users size={14} style={{ color: "var(--dmg-blue)" }} />
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--dmg-text-2)" }}
        >
          Sua Vantagem Competitiva
        </p>
        <span className="ml-2 text-xs" style={{ color: "var(--dmg-text-3)" }}>
          O que torna o Robo Soldado V18.0 diferente
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {edges.map((e) => (
          <div
            key={e.title}
            className="flex flex-col gap-3 rounded-lg border p-4"
            style={{ borderColor: "var(--dmg-border)", background: "var(--dmg-surface-3)" }}
          >
            <span style={{ color: e.accent }}>{e.icon}</span>
            <p className="text-sm font-semibold leading-snug" style={{ color: "var(--dmg-text-1)" }}>
              {e.title}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--dmg-text-3)" }}>
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { WinRateGauge, DrawdownCard, AlertSystem, StrategyFilters, SubscriptionBadge, CompetitiveEdge };
