export default function formatMoneyToReal(value: number): string {
  return Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(value);
}
