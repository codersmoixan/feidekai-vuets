import type { TypographyKey } from "@/utils/theme/types/typography.types";
import type { ObjectType } from "@/utils/theme/utils/types";

export type ButtonsVariant = TypographyKey;
export type ButtonsClasses = ObjectType;
export type ButtonsType =
  | "primary"
  | "secondary"
  | "outline"
  | "dashed"
  | "text";
