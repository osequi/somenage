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
 *
 * Headings can have a different font size, line height and scale vs. the body text.
 *
 * Scaling comes from presets like `sameSize` where all headings have the same size, or `differentSizes` where headings have different size.
 *
 * @category Theme
 * @example
 * preset: "sameSize",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: 2 },
 * },
 * @example
 * preset: "differentSizes",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: [2, 3, 4, 5, 6, 7] },
 * },
 */
export type THeadings = {
  preset: THeadingsPresetNames;
  settings: THeadingsSettings;
};

/**
 * Defines the headings.
 *
 * Headings can have a different font size, line height and scale vs. the body text.
 *
 * Scaling comes from presets like `sameSize` where all headings have the same size, or `differentSizes` where headings have different size.
 *
 * @category Theme
 * @example
 * preset: "sameSize",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: 2 },
 * },
 * @example
 * preset: "differentSizes",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: [2, 3, 4, 5, 6, 7] },
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
