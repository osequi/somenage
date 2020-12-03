import type { TTypographicGrid, TCssNotations, TBreakpoint } from "@theme";
import { theme } from "@theme";
import { useBreakpoint, useDefaultProps } from "../";

/**
 * Returns media queries following the string notation.
 * @ignore
 */
const stringNotation = (
  fontSizes: number[],
  breakpoints: TBreakpoint[]
): string | null => {
  if (!fontSizes || !breakpoints) return null;

  return (
    fontSizes &&
    fontSizes.reduce((result, item, index) => {
      const breakpoint = breakpoints[index] ? breakpoints[index] : null;
      if (!breakpoint || !breakpoint.name) return null;

      const query = useBreakpoint(breakpoint.name);
      return query ? `${result} ${query} {body {font-size: ${item}%;}}` : null;
    }, "")
  );
};

/**
 * Returns media queries following the object notation.
 * @ignore
 */
const objectNotation = (
  fontSizes: number[],
  breakpoints: TBreakpoint[]
): {} | null => {
  if (!fontSizes || !breakpoints) return null;

  let responsiveSizes = {};

  fontSizes &&
    fontSizes.map((item, index) => {
      const breakpoint = breakpoints[index] ? breakpoints[index] : null;
      if (!breakpoint || !breakpoint.name) return null;

      const query = useBreakpoint(breakpoint.name);
      if (!query) return null;

      responsiveSizes[`${query}`] = { fontSize: `${item}%` };
    });

  return responsiveSizes;
};

/**
 * Creates the media queries for the responsive font sizes.
 * @param  notation        The format of the results. See `TCssNotations`.
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @return                 The media queries for the responsive font sizes in the preferred format.
 * @category Hooks
 * @example <caption>Object notation</caption>
 * useResponsiveFontSizes('object') =>
 * "@media(min-width: 320px)": {"fontSize": "100%"},
 * "@media(min-width: 768px)": {"fontSize": "110%"},
 * "@media(min-width: 1024px)": {"fontSize": "120%"},
 * "@media(min-width: 1600px)": {"fontSize": "140%"},
 * @example <caption>String notation</caption>
 * useResponsiveFontSizes('string') =>
 * "@media(min-width: 320px) {body {font-size: 100%;}} @media(min-width: 768px) {body {font-size: 110%;}} @media(min-width: 1024px) {body {font-size: 120%;}} @media(min-width: 1600px) {body {font-size: 140%;}}"
 */
const useResponsiveFontSizes = (
  notation: TCssNotations,
  typographicGrid?: TTypographicGrid
): {} | string | null => {
  if (!notation) return null;

  const gridFromTheme = theme?.typography?.grid;
  const breakpointsFromTheme = theme?.breakpoints;
  if (!breakpointsFromTheme) return null;

  const grid2: TTypographicGrid = useDefaultProps(
    typographicGrid,
    gridFromTheme
  );
  if (!grid2?.fontSizes) return null;

  const { fontSizes } = grid2;
  const fontSizesWithoutTheDefaultFontSize = fontSizes && fontSizes.slice(1);
  if (!fontSizesWithoutTheDefaultFontSize) return null;

  switch (notation) {
    case "string":
      return stringNotation(
        fontSizesWithoutTheDefaultFontSize,
        breakpointsFromTheme
      );
    case "object":
      return objectNotation(
        fontSizesWithoutTheDefaultFontSize,
        breakpointsFromTheme
      );
  }
};

export default useResponsiveFontSizes;
