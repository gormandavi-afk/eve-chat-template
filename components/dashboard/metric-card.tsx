"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  sub?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: ReactNode;
  accent?: "amber" | "green" | "red" | "neutral";
  large?: boolean;
}

export function MetricCard({
  label,
  value,
  sub,
  trend,
  trendValue,
  icon,
  accent = "neutral",
  large = false,
}: MetricCardProps) {
  const accentColor = {
    amber: "text-[var(--dmg-amber)]",
    green: "text-[var(--dmg-green)]",
    red: "text-[var(--dmg-red)]",
    neutral: "text-[var(--dmg-text-1)]",
  }[accent];

  const accentBg = {
    amber: "bg-[var(--dmg-amber-dim)]",
    green: "bg-[var(--dmg-green-dim)]",
    red: "bg-[var(--dmg-red-dim)]",
    neutral: "bg-[var(--dmg-surface-3)]",
  }[accent];

  const trendColor =
    trend === "up"
      ? "text-[var(--dmg-green)]"
      : trend === "down"
        ? "text-[var(--dmg-red)]"
        : "text-[var(--dmg-text-2)]";

  const trendArrow = trend === "up" ? "+" : trend === "down" ? "-" : "";

  return (
    <div
      className={cn("flex flex-col gap-3 rounded-xl border p-4", large && "p-5")}
      style={{
        background: "var(--dmg-surface-2)",
        borderColor: "var(--dmg-border)",
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-xs font-medium uppercase tracking-widest"
          style={{ color: "var(--dmg-text-2)" }}
        >
          {label}
        </span>
        {icon && (
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-md",
              accentBg,
              accentColor,
            )}
          >
            {icon}
          </span>
        )}
      </div>

      <div className="flex items-end justify-between gap-2">
        <span
          className={cn(
            "font-mono font-semibold leading-none",
            large ? "text-3xl" : "text-2xl",
            accentColor,
          )}
        >
          {value}
        </span>
        {trendValue && trend && (
          <span className={cn("mb-0.5 text-xs font-medium tabular-nums", trendColor)}>
            {trendArrow} {trendValue}
          </span>
        )}
      </div>

      {sub && (
        <p className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
