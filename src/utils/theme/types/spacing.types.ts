export type Spacing = (
  t?: number,
  r?: number,
  b?: number,
  l?: number
) => string | null;

export interface SpacingOptions {
  step?: number;
  unit?: string;
}
