/**
 * Defines the available font names.
 * @category Theme
 */
export type TFontNames =
  | "Default"
  | "Nimbus Sans Regular"
  | "Nimbus Sans Medium";

/**
 * Collects the font names into an array.
 *
 * - `TFontNames` is an union type. It offers no methods like `length`.
 * - `fontNames` is an array. It can be used to make calculations with.
 *
 * @ignore
 */
const fontNames = ["Default", "Nimbus Sans Regular", "Nimbus Sans Medium"];

/**
 * Defines the font type.
 * @category Theme
 * @example
 * name: "Default",
 * fontFamily: "inherit",
 * fontWeight: "normal",
 * fontStyle: "normal",
 * letterSpacing: "normal",
 */
export type TFont = {
  name: TFontNames;
  fontFamily: string;
  fontWeight: string | number;
  fontStyle: string;
  letterSpacing: string;
};

/**
 * Defines the default font.
 *
 * The default font is the browsers default font.
 *
 * @category Theme
 * @example
 * name: "Default",
 * fontFamily: "inherit",
 * fontWeight: "normal",
 * fontStyle: "normal",
 * letterSpacing: "normal",
 */
const defaultFont: TFont = {
  name: "Default",
  fontFamily: "inherit",
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
};

/**
 * Defines the available fonts.
 * @category Theme
 */
const fonts: TFont[] = [defaultFont];

export default fonts;
export { fontNames };
