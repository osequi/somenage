import type { TText } from "@theme";
import { theme } from "@theme";
import { useDefaultProps } from "../";

/**
 * Returns a maxWidth style object.
 * @ignore
 */
const getMaxWidth = (
  maxWidth: number,
  maxWidthExceptions?: string
): object | null => {
  if (!maxWidth) return null;

  const mw = {
    maxWidth: `calc(${maxWidth} * var(--lem))`,
  };

  const mwe = maxWidthExceptions ? { [`& > *${maxWidthExceptions}`]: mw } : mw;

  return { ...mwe };
};

/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 * @param	width	The max width value. Optional. It's better if it comes from the theme.
 * @param  	text 	A complete `TText` object. Optional. It's better if it comes from the theme.
 * @return      	A style object.
 * @category Hooks
 * @example
 * useMaxWidth()
 * @example
 * useMaxWidth(10)
 * @example
 * useMaxWidth({maxWidth: 10, maxWidthExceptions: 'h1'})
 */
const useMaxWidth = (width?: number, text?: TText): object | null => {
  const textFromTheme = theme?.typography?.text;
  const text2: TText = useDefaultProps(text, textFromTheme);
  const { maxWidth, maxWidthExceptions } = text2;

  const width2 = width ? width : maxWidth;

  return getMaxWidth(width2, maxWidthExceptions);
};

export default useMaxWidth;
