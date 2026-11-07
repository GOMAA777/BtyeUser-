export const MONTHLY_GROSS = 99;
export const YEARLY_GROSS = 999;
export const VAT_RATE = 0.15;
export const DAYS_LEFT = 24;
export const CYCLE_DAYS = 30;
export const MIN_UNITS = 1;
export const MAX_UNITS = 100;

export type BillingPlan = "monthly" | "yearly";

export function clampUnits(value: number) {
  if (!Number.isFinite(value)) return MIN_UNITS;
  return Math.min(MAX_UNITS, Math.max(MIN_UNITS, Math.round(value)));
}

export function unitGross(plan: BillingPlan) {
  return plan === "yearly" ? YEARLY_GROSS : MONTHLY_GROSS;
}

export function grossTotal(units: number, plan: BillingPlan) {
  return clampUnits(units) * unitGross(plan);
}

export function splitVat(gross: number) {
  const net = round2(gross / (1 + VAT_RATE));
  const vat = round2(gross - net);
  return { net, vat, gross: round2(gross) };
}

export function proratedExtra(units: number) {
  const net = round2(clampUnits(units) * MONTHLY_GROSS * (DAYS_LEFT / CYCLE_DAYS));
  const vat = round2(net * VAT_RATE);
  return { net, vat, gross: round2(net + vat) };
}

export function round2(value: number) {
  return Math.round(value * 100) / 100;
}

export function formatMoney(value: number, fraction = 2) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction,
  });
}
