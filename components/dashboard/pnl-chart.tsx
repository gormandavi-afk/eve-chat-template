"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "01/06", pnl: 0 },
  { date: "02/06", pnl: 320 },
  { date: "03/06", pnl: 180 },
  { date: "04/06", pnl: 540 },
  { date: "05/06", pnl: 420 },
  { date: "06/06", pnl: 760 },
  { date: "07/06", pnl: 690 },
  { date: "08/06", pnl: 1050 },
  { date: "09/06", pnl: 980 },
  { date: "10/06", pnl: 1230 },
  { date: "11/06", pnl: 1100 },
  { date: "12/06", pnl: 1480 },
  { date: "13/06", pnl: 1350 },
  { date: "14/06", pnl: 1700 },
  { date: "15/06", pnl: 1620 },
  { date: "16/06", pnl: 1950 },
  { date: "17/06", pnl: 1880 },
  { date: "18/06", pnl: 2240 },
  { date: "19/06", pnl: 2150 },
  { date: "20/06", pnl: 2500 },
  { date: "21/06", pnl: 2380 },
  { date: "22/06", pnl: 2720 },
  { date: "23/06", pnl: 2640 },
  { date: "24/06", pnl: 2980 },
  { date: "25/06", pnl: 3120 },
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
      <p style={{ color: "var(--dmg-text-2)" }}>{label}</p>
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
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold" style={{ color: "var(--dmg-text-1)" }}>
            Resultado Acumulado
          </h3>
          <p className="text-xs" style={{ color: "var(--dmg-text-2)" }}>
            Junho 2026
          </p>
        </div>
        <span
          className="rounded-md px-2 py-1 font-mono text-xs font-semibold"
          style={{ background: "var(--dmg-green-dim)", color: "var(--dmg-green)" }}
        >
          + R$ 3.120,00
        </span>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="pnlGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--dmg-green)" stopOpacity={0.25} />
              <stop offset="95%" stopColor="var(--dmg-green)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--dmg-border)"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: "var(--dmg-text-3)", fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            interval={4}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "var(--dmg-text-3)", fontFamily: "monospace" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v: number) =>
              v === 0 ? "0" : `R$${(v / 1000).toFixed(1)}k`
            }
            width={52}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="pnl"
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
    </div>
  );
}
