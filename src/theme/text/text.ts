/**
 * Defines the text type.
 *
 * Entries are optional to set.
 *
 * @category Theme
 * @example
 * maxWidth: 35,
 * maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
 * elementsWhichNeedFontReset: "input, pre, code, kbd, samp",
 */
export type TText = {
  /**
   * The max-width of a text block to display 50-60 charactes per row.
   */
  maxWidth?: number;
  /**
   * A CSS rule to exclude elements from having their maxWidth set.
   */
  maxWidthExceptions?: string;
  /**
   * A CSS rule to list elements where font settings has to be explicitely set. See `useFont`.
   */
  elementsWhichNeedFontReset?: string;
};

/**
 * Defines the text settings.
 * @category Theme
 * @example
 * maxWidth: 35,
 * maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
 * elementsWhichNeedFontReset: "input, pre, code, kbd, samp",
 */
const text: TText = {
  maxWidth: 35,
  maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
  elementsWhichNeedFontReset: "input, pre, code, kbd, samp",
};

export default text;
