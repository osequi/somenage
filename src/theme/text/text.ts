/**
 * Defines the text type.
 * @category Theme
 * @example
 * maxWidth: 35,
 * maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
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
};

/**
 * Defines the text settings.
 * @category Theme
 * @example
 * maxWidth: 35,
 * maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
 */
const text: TText = {
  maxWidth: 35,
  maxWidthExceptions: ":not(h1):not(h2):not(h3):not(h4):not(h5):not(h6)",
};

export default text;
