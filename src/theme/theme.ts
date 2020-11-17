import chroma from "chroma-js";

import type { TBreakpoint, TBreakpointNames } from "./breakpoints";

import type {
  TTypography,
  TTypographicGrid,
  TTypographicScale,
  TText,
  TFont,
  TFontNames,
  TFontWithName,
} from "./typography";

import type {
  TColor,
  TColorSpace,
  TColorSpaceNames,
  TColorNamesForThePalette,
  TStandardColorSpaceNames,
} from "./colors";

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
  /**
   * The color palette for the theme.
   */
  colors: TColor[];
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
    text: {
      maxWidth: 35,
      maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
      elementsWhichNeedFontReset: "input, pre, code, kbd, samp",
    },
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
  colors: [
    {
      name: "White",
      for: "Background",
      description: "The background color.",
      value: "white",
      spaceName: "Name",
      chroma: chroma("white"),
    },
    {
      name: "Black",
      for: "Text",
      description: "The text color.",
      value: "black",
      spaceName: "Name",
      chroma: chroma("black"),
    },
    {
      name: "Undefined",
      for: "Highlight",
      description:
        "The highlight color. Used for links, buttons, call to action elements.",
      value: null,
      spaceName: "Name",
      chroma: null,
    },
    {
      name: "Undefined",
      for: "Shade",
      description: "The shade color. Used for secondary backgrounds.",
      value: null,
      spaceName: "Name",
      chroma: null,
    },
  ],
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
  TFontWithName,
  TColor,
  TColorSpace,
  TColorSpaceNames,
  TColorNamesForThePalette,
  TStandardColorSpaceNames,
};
