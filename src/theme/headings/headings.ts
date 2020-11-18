import type { TFontNames, TScale } from "../../theme";

/**
 * Defines the available presets for headings.
 * @category Theme
 */
export type THeadingsPresetNames = "sameSize" | "differentSizes";

/**
 * Defines the headings settings type.
 * @category Theme
 */
export type THeadingsSettings = {
  /**
   * The font name to use for headings.
   */
  font: TFontNames;
  /**
   * The line height. Headings have a reduced line height.
   */
  lineHeight: number;
  /**
   * How to scale the font size.
   */
  scale: TScale;
};

/**
 * Defines the headings type.
 * @category Theme
 * @example
 * preset: "sameSize",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: 2 },
 * },
 */
export type THeadings = {
  preset: THeadingsPresetNames;
  settings: THeadingsSettings;
};

/**
 * Defines the headings.
 * @category Theme
 * @example
 * preset: "sameSize",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: 2 },
 * },
 */
const headings: THeadings = {
  preset: "sameSize",
  settings: {
    font: "Nimbus Sans Medium",
    lineHeight: 1.1,
    scale: { points: 2 },
  },
};

export default headings;
