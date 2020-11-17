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
  /**
   * The font name. Like 'Default'.
   *
   * // NOTE: It's optional because there is no CSS property `name`. When the font is set up with CSS the `name` has to be removed. See `useFont` for details.
   */
  name?: TFontNames;
  fontFamily: string;
  fontWeight: string | number;
  fontStyle: string;
  letterSpacing: string;
};

/**
 * Defines the default font.
 *
 * The default font is the browser's default font.
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
 * Defines the Nimbus Sans Regular font.
 *
 * @category Theme
 * @example
 * name: "Nimbus Sans Regular",
 * fontFamily: "nimbus-sans",
 * fontWeight: 400,
 * fontStyle: "normal",
 * letterSpacing: "1.25px",
 */
const nimbusSansRegular: TFont = {
  name: "Nimbus Sans Regular",
  fontFamily: "nimbus-sans",
  fontWeight: 400,
  fontStyle: "normal",
  letterSpacing: "1.25px",
};

/**
 * Defines the Nimbus Sans Medium font.
 *
 * @category Theme
 * @example
 * name: "Nimbus Sans medium",
 * fontFamily: "nimbus-sans",
 * fontWeight: 500,
 * fontStyle: "normal",
 * letterSpacing: "1.25px",
 */
const nimbusSansMedium: TFont = {
  name: "Nimbus Sans Medium",
  fontFamily: "nimbus-sans",
  fontWeight: 500,
  fontStyle: "normal",
  letterSpacing: "1.25px",
};

/**
 * Defines the available fonts.
 * @category Theme
 * @example
 * fonts = [defaultFont, nimbusSansRegular, nimbusSansMedium]
 */
const fonts: TFont[] = [defaultFont, nimbusSansRegular, nimbusSansMedium];

export default fonts;
export { fontNames };
