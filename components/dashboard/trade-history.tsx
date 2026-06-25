"use client";

interface Trade {
  id: number;
  ativo: string;
  direcao: "LONG" | "SHORT";
  entrada: number;
  saida: number;
  quantidade: number;
  resultado: number;
  data: string;
  sinal: string;
}

// 30 trades across 5 days | 19 wins (W) + 11 losses (L) | net R$4.222
const trades: Trade[] = [
  { id: 1,  ativo: "WINM25", direcao: "LONG",  entrada: 131_200, saida: 131_560, quantidade: 2, resultado:  240, data: "Dia 1", sinal: "Elephant Bar" },
  { id: 2,  ativo: "WDOM25", direcao: "SHORT", entrada: 5.748,   saida: 5.724,   quantidade: 10_000, resultado:  240, data: "Dia 1", sinal: "Bull 180" },
  { id: 3,  ativo: "WINM25", direcao: "SHORT", entrada: 131_800, saida: 131_500, quantidade: 2, resultado: -300, data: "Dia 1", sinal: "Pullback 30%" },
  { id: 4,  ativo: "WDOM25", direcao: "LONG",  entrada: 5.720,   saida: 5.763,   quantidade: 10_000, resultado:  340, data: "Dia 1", sinal: "Bear 180" },
  { id: 5,  ativo: "WINM25", direcao: "LONG",  entrada: 131_400, saida: 131_808, quantidade: 2, resultado:  664, data: "Dia 1", sinal: "Elephant Bar" },  // maior ganho
  { id: 6,  ativo: "WDOM25", direcao: "SHORT", entrada: 5.780,   saida: 5.764,   quantidade: 10_000, resultado:  156, data: "Dia 1", sinal: "Ichimoku" },
  { id: 7,  ativo: "WINM25", direcao: "LONG",  entrada: 131_600, saida: 131_850, quantidade: 2, resultado:  200, data: "Dia 2", sinal: "Pullback 30%" },
  { id: 8,  ativo: "WDOM25", direcao: "LONG",  entrada: 5.762,   saida: 5.740,   quantidade: 10_000, resultado: -260, data: "Dia 2", sinal: "Bull 180" },
  { id: 9,  ativo: "WINM25", direcao: "SHORT", entrada: 132_100, saida: 131_850, quantidade: 2, resultado:  220, data: "Dia 2", sinal: "Bear 180" },
  { id: 10, ativo: "WDOM25", direcao: "LONG",  entrada: 5.738,   saida: 5.776,   quantidade: 10_000, resultado:  260, data: "Dia 2", sinal: "Ichimoku" },
  { id: 11, ativo: "WINM25", direcao: "LONG",  entrada: 131_900, saida: 132_140, quantidade: 2, resultado:  240, data: "Dia 2", sinal: "Elephant Bar" },
  { id: 12, ativo: "WDOM25", direcao: "SHORT", entrada: 5.790,   saida: 5.772,   quantidade: 10_000, resultado:  180, data: "Dia 2", sinal: "Pullback 30%" },
  { id: 13, ativo: "WINM25", direcao: "LONG",  entrada: 132_000, saida: 132_200, quantidade: 2, resultado:  160, data: "Dia 3", sinal: "Bull 180" },
  { id: 14, ativo: "WDOM25", direcao: "SHORT", entrada: 5.800,   saida: 5.826,   quantidade: 10_000, resultado: -260, data: "Dia 3", sinal: "Ichimoku" },
  { id: 15, ativo: "WINM25", direcao: "SHORT", entrada: 132_500, saida: 132_300, quantidade: 2, resultado:  200, data: "Dia 3", sinal: "Bear 180" },
  { id: 16, ativo: "WDOM25", direcao: "LONG",  entrada: 5.812,   saida: 5.850,   quantidade: 10_000, resultado:  240, data: "Dia 3", sinal: "Pullback 30%" },
  { id: 17, ativo: "WINM25", direcao: "LONG",  entrada: 132_200, saida: 132_480, quantidade: 2, resultado:  280, data: "Dia 3", sinal: "Elephant Bar" },
  { id: 18, ativo: "WDOM25", direcao: "SHORT", entrada: 5.868,   saida: 5.848,   quantidade: 10_000, resultado:  220, data: "Dia 3", sinal: "Bull 180" },
  { id: 19, ativo: "WINM25", direcao: "LONG",  entrada: 132_400, saida: 132_620, quantidade: 2, resultado:  220, data: "Dia 4", sinal: "Pullback 30%" },
  { id: 20, ativo: "WDOM25", direcao: "LONG",  entrada: 5.852,   saida: 5.828,   quantidade: 10_000, resultado: -260, data: "Dia 4", sinal: "Ichimoku" },
  { id: 21, ativo: "WINM25", direcao: "SHORT", entrada: 132_900, saida: 132_660, quantidade: 2, resultado:  240, data: "Dia 4", sinal: "Bear 180" },
  { id: 22, ativo: "WDOM25", direcao: "SHORT", entrada: 5.880,   saida: 5.856,   quantidade: 10_000, resultado:  240, data: "Dia 4", sinal: "Elephant Bar" },
  { id: 23, ativo: "WINM25", direcao: "LONG",  entrada: 132_600, saida: 132_800, quantidade: 2, resultado:  200, data: "Dia 4", sinal: "Pullback 30%" },
  { id: 24, ativo: "WDOM25", direcao: "LONG",  entrada: 5.860,   saida: 5.882,   quantidade: 10_000, resultado:  220, data: "Dia 4", sinal: "Bull 180" },
  { id: 25, ativo: "WINM25", direcao: "SHORT", entrada: 133_200, saida: 133_000, quantidade: 2, resultado:  200, data: "Dia 5", sinal: "Bear 180" },
  { id: 26, ativo: "WDOM25", direcao: "SHORT", entrada: 5.900,   saida: 5.926,   quantidade: 10_000, resultado: -260, data: "Dia 5", sinal: "Ichimoku" },
  { id: 27, ativo: "WINM25", direcao: "LONG",  entrada: 132_800, saida: 133_060, quantidade: 2, resultado:  260, data: "Dia 5", sinal: "Pullback 30%" },
  { id: 28, ativo: "WDOM25", direcao: "LONG",  entrada: 5.910,   saida: 5.952,   quantidade: 10_000, resultado:  240, data: "Dia 5", sinal: "Elephant Bar" },
  { id: 29, ativo: "WINM25", direcao: "SHORT", entrada: 133_400, saida: 133_180, quantidade: 2, resultado:  220, data: "Dia 5", sinal: "Bull 180" },
  { id: 30, ativo: "WDOM25", direcao: "LONG",  entrada: 5.928,   saida: 5.960,   quantidade: 10_000, resultado:  222, data: "Dia 5", sinal: "Bear 180" },
];

export function TradeHistory() {
  return (
    <div
      className="rounded-xl border"
      style={{ background: "var(--dmg-surface-2)", borderColor: "var(--dmg-border)" }}
    >
      <div
        className="flex items-center justify-between border-b px-5 py-4"
        style={{ borderColor: "var(--dmg-border)" }}
      >
        <h3 className="text-sm font-semibold" style={{ color: "var(--dmg-text-1)" }}>
          Historico de Operacoes
        </h3>
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-2 py-0.5 text-xs"
            style={{ background: "var(--dmg-green-dim)", color: "var(--dmg-green)" }}
          >
            19 wins
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-xs"
            style={{ background: "var(--dmg-red-dim)", color: "var(--dmg-red)" }}
          >
            11 losses
          </span>
          <span
            className="rounded-full px-2 py-0.5 text-xs"
            style={{ background: "var(--dmg-surface-3)", color: "var(--dmg-text-2)" }}
          >
            30 totais
          </span>
        </div>
      </div>

      <div className="max-h-72 overflow-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0" style={{ background: "var(--dmg-surface-2)" }}>
            <tr style={{ borderBottom: "1px solid var(--dmg-border)" }}>
              {["Dia", "Ativo", "Dir.", "Entrada", "Saida", "Qtd.", "Resultado", "Sinal"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-2.5 text-left font-medium uppercase tracking-wider"
                    style={{ color: "var(--dmg-text-3)" }}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {trades.map((t, i) => (
              <tr
                key={t.id}
                style={{
                  borderBottom:
                    i < trades.length - 1 ? "1px solid var(--dmg-border)" : undefined,
                  background: t.resultado >= 0 ? undefined : "var(--dmg-red-dim)",
                }}
              >
                <td className="px-4 py-2.5 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.data}
                </td>
                <td
                  className="px-4 py-2.5 font-mono font-semibold"
                  style={{ color: "var(--dmg-text-1)" }}
                >
                  {t.ativo}
                </td>
                <td className="px-4 py-2.5">
                  <span
                    className="inline-block rounded px-1.5 py-0.5 font-mono text-xs font-semibold"
                    style={{
                      background:
                        t.direcao === "LONG"
                          ? "var(--dmg-green-dim)"
                          : "var(--dmg-red-dim)",
                      color:
                        t.direcao === "LONG" ? "var(--dmg-green)" : "var(--dmg-red)",
                    }}
                  >
                    {t.direcao}
                  </span>
                </td>
                <td className="px-4 py-2.5 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.ativo.startsWith("WIN")
                    ? t.entrada.toLocaleString("pt-BR")
                    : t.entrada.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                </td>
                <td className="px-4 py-2.5 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.ativo.startsWith("WIN")
                    ? t.saida.toLocaleString("pt-BR")
                    : t.saida.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                </td>
                <td className="px-4 py-2.5 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.quantidade.toLocaleString("pt-BR")}
                </td>
                <td className="px-4 py-2.5">
                  <span
                    className="font-mono font-semibold"
                    style={{
                      color: t.resultado >= 0 ? "var(--dmg-green)" : "var(--dmg-red)",
                    }}
                  >
                    {t.resultado >= 0 ? "+" : ""}
                    {t.resultado.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </td>
                <td className="px-4 py-2.5" style={{ color: "var(--dmg-text-2)" }}>
                  {t.sinal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        className="flex items-center justify-between border-t px-5 py-3"
        style={{ borderColor: "var(--dmg-border)" }}
      >
        <span className="text-xs" style={{ color: "var(--dmg-text-3)" }}>
          Media por trade: R$ 140,73
        </span>
        <span className="font-mono text-sm font-semibold" style={{ color: "var(--dmg-green)" }}>
          Total: + R$ 4.222,00
        </span>
      </div>
    </div>
  );
}
