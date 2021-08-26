export default function formatMoneyToReal(value: number): string {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}