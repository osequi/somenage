import type { TBreakpoint, TBreakpointNames } from "./breakpoints";

import type {
  TTypography,
  TTypographicGrid,
  TTypographicScale,
  TLinearScale,
  TModularScale,
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
  },
};

export default theme;
export type {
  TBreakpoint,
  TBreakpointNames,
  TTypographicGrid,
  TTypographicScale,
  TLinearScale,
  TModularScale,
};
