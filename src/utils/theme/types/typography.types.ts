import type { CSSOptions } from "@/utils/theme/types/index.types";

export type TypographyKey =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "button"
  | "caption"
  | "content"
  | "body1"
  | "body2"
  | string;

export type TypographyOptions = Record<TypographyKey, CSSOptions | string>;
