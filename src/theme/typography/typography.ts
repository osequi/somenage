import type { TTypographicGrid } from "../typographic-grid";
import { typographicGrid } from "../typographic-grid";

import type { TTypographicScale, TScale } from "../typographic-scale";
import { typographicScale } from "../typographic-scale";

import type { TText } from "../text";
import { text } from "../text";

import type { TFont, TFontNames, TFontWithName } from "../fonts";
import { fonts } from "../fonts";

import type { THeadings, THeadingsSettings } from "../headings";
import { headings } from "../headings";

/**
 * Defines the typography type.
 *
 * This is an umbrella component. All settings related to typography are collected here.
 *
 * @category Theme
 * @example
 * grid: {fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25,},
 * scale: {name: "linear", settings: {},
 * text: {maxWidth: 35}
 * fonts: [defaultFont, nimbusSansRegular, nimbusSansMedium]
 */
export type TTypography = {
  /**
   * The settings for the typographic grid.
   */
  grid: TTypographicGrid;
  /**
   * The settings for the typographic scale.
   */
  scale: TTypographicScale;
  /**
   * The settings fo the text.
   */
  text: TText;
  /**
   * The available fonts.
   */
  fonts: TFontWithName[];
  /**
   * The settings for the headings.
   */
  headings: THeadings[];
};

/**
 * Defines the typography.
 *
 * This is an umbrella component. All settings related to typography are collected here.
 * @category Theme
 * @example
 * grid: {fontSizes: [100, 100, 110, 120, 140], lineHeight: 1.25,},
 * scale: {name: "linear", settings: {}},
 * text: {maxWidth: 35}
 * fonts: [defaultFont, nimbusSansRegular, nimbusSansMedium]
 */
const typography: TTypography = {
  grid: typographicGrid,
  scale: typographicScale,
  text: text,
  fonts: fonts,
  headings: headings,
};

export default typography;
export type {
  TTypographicGrid,
  TTypographicScale,
  TScale,
  TText,
  TFont,
  TFontNames,
  TFontWithName,
  THeadings,
  THeadingsSettings,
};
