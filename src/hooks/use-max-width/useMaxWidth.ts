import type { TText } from "../../theme";
import { theme } from "../../theme";

/**
 * Sets the max-width of a text to display 50-60 characters in a row.
 * @param  text A `TText` object. Optional. It's better coming from the theme.
 * @return      A style object.
 * @category Hooks
 * @example
 * useMaxWidth({ maxWidth: 10})
 */
const useMaxWidth = (text?: TText): object => {
  const {
    typography: { text: textFromTheme },
  } = theme;

  const { maxWidth, maxWidthExceptions } = { ...textFromTheme, ...text };

  const jssMaxWidth = {
    maxWidth: `calc(${maxWidth} * var(--lem))`,
  };

  const jss = maxWidthExceptions
    ? { [`& > *${maxWidthExceptions}`]: jssMaxWidth }
    : jssMaxWidth;

  return {
    ...jss,
  };
};

export default useMaxWidth;
