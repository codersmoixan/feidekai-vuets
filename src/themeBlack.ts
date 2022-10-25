import { createTheme } from "vue3-makestyles";

export const Primary = "#090909";
export const Secondary = "#808080";
export const Disabled = "#CECECE";
export const White = "#FFFFFF";
export const Transparent = "transparent";
export const Black = "#000";

export const FitLineBrandColorRed = "white";

export const FitLineBrandColorPeach = "#FFF3E0";
export const FitLineBrandColorDarkPeach = "#F6D7A4";
export const FitLineBrandColorSilver = "#A7A9AC";
export const LinearBrandColor = "#F22F65";

export const Success = "#4CAF50";
export const Warning = "#BE1800";
export const Pending = "#E67E22";

export default createTheme({
  palette: {
    primary: {
      main: FitLineBrandColorRed,
      white: White,
      disabled: Disabled,
      transparent: Transparent,
      black: Black,
      pending: Pending,
      success: Success,
      warning: Warning,
      peach: FitLineBrandColorPeach,
      darkPeach: FitLineBrandColorDarkPeach,
      silver: FitLineBrandColorSilver,
      linear: LinearBrandColor,
      primary: Primary,
      secondary: Secondary,
    },
    text: {
      main: FitLineBrandColorRed,
      primary: Primary,
      secondary: Secondary,
      white: White,
      disabled: FitLineBrandColorSilver,
      success: Success,
      danger: LinearBrandColor,
      warning: FitLineBrandColorDarkPeach,
    },
  },
});
