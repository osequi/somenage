import type { TBreakpoint, TBreakpointNames } from "./breakpoints";

import type {
  TTypography,
  TTypographicGrid,
  TTypographicScale,
  TText,
  TFont,
  TFontNames,
} from "./typography";

/**
 * Defines the CSS notations type.
 *
 * The object notation is preferred. However sometimes the string notation is required.
 */
export type TCssNotations = "object" | "string";

/**
 * Defines the theme type.
 *
 * This is an umbrella component. All settings related to the theme are collected here.
 *
 * @category Theme
 * @example
 * breakpoints: [
   { name: "mobile", value: 320 },
   { name: "tablet", value: 768 },
   { name: "laptop", value: 1024 },
   { name: "desktop", value: 1600 },
 ],
 typography: {
   grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
   scale: { name: "linear", settings: {} },
   text: { maxWidth: 35 }
 },
 */
export type TTheme = {
  /**
   * The breakpoints for the theme.
   */
  breakpoints: TBreakpoint[];
  /**
   * The typography for the theme.
   */
  typography: TTypography;
};

/**
 * Defines the theme.
 *
 * This is an umbrella component. All settings related to the theme are collected here.
 *
 * @category Theme
 * @example
 * breakpoints: [
   { name: "mobile", value: 320 },
   { name: "tablet", value: 768 },
   { name: "laptop", value: 1024 },
   { name: "desktop", value: 1600 },
 ],
 typography: {
   grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
   scale: { name: "linear", settings: {} },
   text: { maxWidth: 35 }
 },
 */
const theme: TTheme = {
  breakpoints: [
    { name: "mobile", value: 320 },
    { name: "tablet", value: 768 },
    { name: "laptop", value: 1024 },
    { name: "desktop", value: 1600 },
  ],
  typography: {
    grid: { fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25 },
    scale: { name: "linear", settings: {} },
    text: { maxWidth: 35 },
    fonts: [
      {
        name: "Default",
        fontFamily: "inherit",
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: "normal",
      },
      {
        name: "Nimbus Sans Regular",
        fontFamily: "nimbus-sans",
        fontWeight: 400,
        fontStyle: "normal",
        letterSpacing: "1.25px",
      },
      {
        name: "Nimbus Sans Medium",
        fontFamily: "nimbus-sans",
        fontWeight: 500,
        fontStyle: "normal",
        letterSpacing: "1.25px",
      },
    ],
  },
};

export default theme;
export type {
  TBreakpoint,
  TBreakpointNames,
  TTypographicGrid,
  TTypographicScale,
  TText,
  TFont,
  TFontNames,
};
