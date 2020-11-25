import type { TBreakpoint, TBreakpointNames } from "./breakpoints";
import { breakpoints } from "./breakpoints";

import type {
  TTypography,
  TTypographicGrid,
  TTypographicScale,
  TTypographicScaleNames,
  TLinearScaleSettings,
  TModularScaleSettings,
  TText,
  TFont,
  TFontNames,
  TFontWithName,
  THeadings,
  THeadingsSettings,
  THeadingsPresetNames,
  TLink,
  TLinkPresetNames,
  TLinkSettings,
} from "./typography";
import { typography } from "./typography";

import type {
  TColor,
  TColorSpace,
  TColorSpaceNames,
  TColorNamesForThePalette,
  TStandardColorSpaceNames,
  TColorPairNames,
  TColorPair,
} from "./colors";
import { colors, colorPairs } from "./colors";

/**
 * Defines the CSS notations type.
 *
 * The object notation is preferred. However sometimes the string notation is required.
 */
export type TCssNotations = "object" | "string";

/**
 * Defines the available spacing presets.
 */
export type TSpacingPresetNames = "Adjacent siblings margin top";

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
   scales: [{ name: "linear", settings: {} }],
   text: { maxWidth: 35 }
 },
 */
export type TTheme = {
  /**
   * The breakpoints for the theme.
   */
  breakpoints?: TBreakpoint[];
  /**
   * The typography for the theme.
   */
  typography?: TTypography;
  /**
   * The color palette for the theme.
   */
  colors?: TColor[];
  /**
   * The color combinations for the theme.
   */
  colorPairs?: TColorPair[];
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
   scales: [{ name: "linear", settings: {} }],
   text: { maxWidth: 35 }
 },
 */
const theme: TTheme = {
  breakpoints: breakpoints,
  typography: typography,
  colors: colors,
  colorPairs: colorPairs,
};

export default theme;
export type {
  TBreakpoint,
  TBreakpointNames,
  TTypographicGrid,
  TTypographicScale,
  TTypographicScaleNames,
  TLinearScaleSettings,
  TModularScaleSettings,
  TText,
  TFont,
  TFontNames,
  TFontWithName,
  TColor,
  TColorSpace,
  TColorSpaceNames,
  TColorNamesForThePalette,
  TStandardColorSpaceNames,
  THeadings,
  THeadingsSettings,
  THeadingsPresetNames,
  TLink,
  TLinkPresetNames,
  TLinkSettings,
  TColorPair,
  TColorPairNames,
};
