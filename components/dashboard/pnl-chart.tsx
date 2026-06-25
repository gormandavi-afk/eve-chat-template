"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// 30 trades across 5 days; cumulative net P&L leading to R$4.222
const data = [
  { label: "Dia 1 - Trade 1", cumPnl: 240 },
  { label: "Dia 1 - Trade 2", cumPnl: 480 },
  { label: "Dia 1 - Trade 3", cumPnl: 180 },
  { label: "Dia 1 - Trade 4", cumPnl: 520 },
  { label: "Dia 1 - Trade 5", cumPnl: 664 },
  { label: "Dia 1 - Trade 6", cumPnl: 820 },
  { label: "Dia 2 - Trade 7", cumPnl: 1020 },
  { label: "Dia 2 - Trade 8", cumPnl: 760 },
  { label: "Dia 2 - Trade 9", cumPnl: 980 },
  { label: "Dia 2 - Trade 10", cumPnl: 1240 },
  { label: "Dia 2 - Trade 11", cumPnl: 1480 },
  { label: "Dia 2 - Trade 12", cumPnl: 1660 },
  { label: "Dia 3 - Trade 13", cumPnl: 1820 },
  { label: "Dia 3 - Trade 14", cumPnl: 1560 },
  { label: "Dia 3 - Trade 15", cumPnl: 1760 },
  { label: "Dia 3 - Trade 16", cumPnl: 2000 },
  { label: "Dia 3 - Trade 17", cumPnl: 2280 },
  { label: "Dia 3 - Trade 18", cumPnl: 2500 },
  { label: "Dia 4 - Trade 19", cumPnl: 2720 },
  { label: "Dia 4 - Trade 20", cumPnl: 2460 },
  { label: "Dia 4 - Trade 21", cumPnl: 2700 },
  { label: "Dia 4 - Trade 22", cumPnl: 2940 },
  { label: "Dia 4 - Trade 23", cumPnl: 3140 },
  { label: "Dia 4 - Trade 24", cumPnl: 3360 },
  { label: "Dia 5 - Trade 25", cumPnl: 3560 },
  { label: "Dia 5 - Trade 26", cumPnl: 3300 },
  { label: "Dia 5 - Trade 27", cumPnl: 3560 },
  { label: "Dia 5 - Trade 28", cumPnl: 3800 },
  { label: "Dia 5 - Trade 29", cumPnl: 4020 },
  { label: "Dia 5 - Trade 30", cumPnl: 4222 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const val = payload[0].value;
  return (
    <div
      className="rounded-lg border px-3 py-2 text-xs font-mono"
      style={{
        background: "var(--dmg-surface-3)",
        borderColor: "var(--dmg-border)",
        color: "var(--dmg-text-1)",
      }}
    >
      <p className="mb-1" style={{ color: "var(--dmg-text-2)" }}>{label}</p>
      <p style={{ color: val >= 0 ? "var(--dmg-green)" : "var(--dmg-red)" }}>
        {val >= 0 ? "+" : ""}
        {val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
    </div>
  );
}

export function PnlChart() {
  return (
    <div
      className="rounded-xl border p-5"
      style={{
        background: "var(--dmg-surface-2)",
        borderColor: "var(--dmg-border)",
      }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold" style={{ color: "var(--dmg-text-1)" }}>
            Resultado Acumulado
          </h3>
          <p className="text-xs" style={{ color: "var(--dmg-text-2)" }}>
            30 operacoes &bull; 5 dias verificados
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className="rounded-md px-2 py-1 font-mono text-xs font-semibold"
            style={{ background: "var(--dmg-green-dim)", color: "var(--dmg-green)" }}
          >
            + R$ 4.222,00
          </span>
          <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
            Saldo liquido
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--dmg-green)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--dmg-green)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--dmg-border)"
            vertical={false}
          />
          <XAxis
            dataKey="label"
            tick={false}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "var(--dmg-text-3)", fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) =>
              v === 0 ? "R$0" : `R$${(v / 1000).toFixed(1)}k`
            }
            width={56}
          />
          <ReferenceLine y={0} stroke="var(--dmg-border)" strokeDasharray="4 4" />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="cumPnl"
            stroke="var(--dmg-green)"
            strokeWidth={2}
            fill="url(#pnlGrad)"
            dot={false}
            activeDot={{
              r: 4,
              fill: "var(--dmg-green)",
              stroke: "var(--dmg-surface-2)",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Day separators legend */}
      <div className="mt-3 flex justify-between px-14 text-xs" style={{ color: "var(--dmg-text-3)" }}>
        {["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  );
}
