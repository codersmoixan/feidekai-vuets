import type { ShapeOptions, Shape } from "./shape.types";
import type { BreakpointsOptions, Breakpoints } from "./breakpoints.types";
import type { MixinsOptions, Mixins } from "@/utils/theme/types/mixins.types";
import type { Shadows } from "@/utils/theme/types/shadows.types";
import type { ZIndexOptions, ZIndex } from "@/utils/theme/types/zIndex.types";
import type {
  TransitionsOptions,
  Transitions,
} from "@/utils/theme/types/transitions.types";
import type {
  Spacing,
  SpacingOptions,
} from "@/utils/theme/types/spacing.types";
import type { PaletteOptions } from "@/utils/theme/types/palette.types";
import type { ObjectType } from "@/utils/theme/utils/types";
import type { TypographyOptions } from "@/utils/theme/types/typography.types";

export type Direction = "ltr" | "rtl";

export type ThemeStyles = ObjectType;

export type CSSOptions = ObjectType;

export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  mixins?: MixinsOptions;
  palette?: PaletteOptions;
  shadows?: Shadows;
  spacing?: SpacingOptions;
  spacingOptions?: SpacingOptions;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions;
  css?: CSSOptions;
  zIndex?: ZIndexOptions;
  unstable_strictMode?: boolean;
}

export interface Theme {
  breakpoints: Breakpoints;
  palette?: PaletteOptions;
  shape?: Shape;
  direction?: Direction;
  mixins?: Mixins;
  shadows?: Shadows;
  spacing: Spacing;
  spacingOptions?: SpacingOptions;
  transitions?: Transitions;
  typography?: TypographyOptions;
  css?: CSSOptions;
  zIndex?: ZIndex;
  unstable_strictMode?: boolean;
}
