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

const trades: Trade[] = [
  {
    id: 1,
    ativo: "WINM25",
    direcao: "LONG",
    entrada: 131_800,
    saida: 132_050,
    quantidade: 2,
    resultado: 500,
    data: "25/06",
    sinal: "Barra Elefante",
  },
  {
    id: 2,
    ativo: "WDOM25",
    direcao: "SHORT",
    entrada: 5.748,
    saida: 5.721,
    quantidade: 50_000,
    resultado: 1_350,
    data: "25/06",
    sinal: "Bull 180",
  },
  {
    id: 3,
    ativo: "WINM25",
    direcao: "LONG",
    entrada: 131_200,
    saida: 131_050,
    quantidade: 2,
    resultado: -300,
    data: "24/06",
    sinal: "Ichimoku Breakout",
  },
  {
    id: 4,
    ativo: "WINM25",
    direcao: "SHORT",
    entrada: 132_100,
    saida: 131_650,
    quantidade: 3,
    resultado: 1_350,
    data: "24/06",
    sinal: "Bear 180",
  },
  {
    id: 5,
    ativo: "WDOM25",
    direcao: "LONG",
    entrada: 5.702,
    saida: 5.735,
    quantidade: 50_000,
    resultado: 1_650,
    data: "23/06",
    sinal: "Volume Spike",
  },
  {
    id: 6,
    ativo: "WINM25",
    direcao: "SHORT",
    entrada: 130_950,
    saida: 131_200,
    quantidade: 2,
    resultado: -500,
    data: "23/06",
    sinal: "Barra Elefante",
  },
  {
    id: 7,
    ativo: "WINM25",
    direcao: "LONG",
    entrada: 130_400,
    saida: 130_900,
    quantidade: 2,
    resultado: 1_000,
    data: "22/06",
    sinal: "Bull 180",
  },
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
        <span
          className="rounded-full px-2 py-0.5 text-xs"
          style={{ background: "var(--dmg-surface-3)", color: "var(--dmg-text-2)" }}
        >
          {trades.length} ops
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--dmg-border)" }}>
              {["Data", "Ativo", "Dir.", "Entrada", "Saida", "Qtd.", "Resultado", "Sinal"].map(
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
                }}
              >
                <td className="px-4 py-3 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.data}
                </td>
                <td
                  className="px-4 py-3 font-mono font-semibold"
                  style={{ color: "var(--dmg-text-1)" }}
                >
                  {t.ativo}
                </td>
                <td className="px-4 py-3">
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
                <td className="px-4 py-3 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.ativo.startsWith("WIN")
                    ? t.entrada.toLocaleString("pt-BR")
                    : t.entrada.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                </td>
                <td className="px-4 py-3 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.ativo.startsWith("WIN")
                    ? t.saida.toLocaleString("pt-BR")
                    : t.saida.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                </td>
                <td className="px-4 py-3 font-mono" style={{ color: "var(--dmg-text-2)" }}>
                  {t.quantidade.toLocaleString("pt-BR")}
                </td>
                <td className="px-4 py-3">
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
                <td className="px-4 py-3" style={{ color: "var(--dmg-text-2)" }}>
                  {t.sinal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
