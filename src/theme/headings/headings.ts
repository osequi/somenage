import type { TFontNames, TScale } from "../../theme";

/**
 * Defines the available presets for headings.
 * @category Theme
 */
export type THeadingsPresetNames = "sameSize" | "differentSizes";

/**
 * Collects the preset names into an array.
 * @ignore
 */
const headingsPresetNames = ["sameSize", "differentSizes"];

/**
 * Defines the headings settings type.
 * @category Theme
 * @example
 * font: "Nimbus Sans Medium",
 * lineHeight: 1.1,
 * scale: { points: 2 },
 */
export type THeadingsSettings = {
  /**
   * The font name to use for headings.
   */
  font?: TFontNames;
  /**
   * The line height. Headings have a reduced line height.
   */
  lineHeight?: number;
  /**
   * How to scale the font size.
   */
  scale?: TScale;
  /**
   * Any other, non-mandatory settings.
   * The settings above, or at least one of them are usually required to set headings.
   * Props defined here are niceties like `text-transform: uppercase`
   */
  otherSettings?: object;
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
  settings?: THeadingsSettings;
};

/**
 * Defines the sames size headings.
 *
 * @category Theme
 * @example
 * preset: "sameSize",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: 2 },
 * }
 */
const headingsSameSize: THeadings = {
  preset: "sameSize",
  settings: {
    font: "Nimbus Sans Medium",
    lineHeight: 1.1,
    scale: { points: 2 },
  },
};

/**
 * Defines the different sized headings.
 *
 * @category Theme
 * @example
 * preset: "differentSizes",
 * settings: {
 *  font: "Nimbus Sans Medium",
 *  lineHeight: 1.1,
 *  scale: { points: [2, 3, 4, 5, 6, 7] },
 * },
 */
const headingsDifferentSizes: THeadings = {
  preset: "differentSizes",
  settings: {
    font: "Nimbus Sans Bold",
    lineHeight: 1.1,
    scale: { points: [1, 2, 3, 4, 5, 6] },
  },
};

const headings: THeadings[] = [headingsSameSize, headingsDifferentSizes];

export default headings;
export { headingsPresetNames, headingsSameSize, headingsDifferentSizes };
