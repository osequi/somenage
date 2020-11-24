import type { TText } from "../../theme";
import { theme } from "../../theme";
import { useDefaultProps } from "../";

/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 * @param  text A `TText` object. Optional. It's better coming from the theme.
 * @return      A style object.
 * @category Hooks
 * @example
 * useMaxWidth({ maxWidth: 10})
 */
const useMaxWidth = (text?: TText): object | null => {
  const textFromTheme = theme?.typography?.text;

  const text2: TText = useDefaultProps(text, textFromTheme);
  if (!text2) return null;

  const { maxWidth, maxWidthExceptions } = text2;

  const jssMaxWidth = maxWidth
    ? {
        maxWidth: `calc(${maxWidth} * var(--lem))`,
      }
    : null;
  if (!jssMaxWidth) return null;

  const jss = maxWidthExceptions
    ? { [`& > *${maxWidthExceptions}`]: jssMaxWidth }
    : jssMaxWidth;

  return {
    ...jss,
  };
};

export default useMaxWidth;
