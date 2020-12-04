import type { TTypographicGrid, TCssNotations } from "@theme";
import { theme } from "@theme";
import { useLem, useResponsiveFontSizes, useDefaultProps } from "../";

/**
 * Returns the settings following the string notation.
 * @ignore
 */
const stringNotation = (
  fontSize: number,
  lineHeight: number,
  lem: number,
  grid: TTypographicGrid
): string => {
  const responsiveFontSizes = useResponsiveFontSizes("string", grid);

  return `body {
	  font-size: ${fontSize}%;
	  line-height: ${lineHeight};
	  --lem: ${lem}em;
	}
	${responsiveFontSizes}`;
};

/**
 * Returns the settings following the object notation.
 * @ignore
 */
const objectNotation = (
  fontSize: number,
  lineHeight: number,
  lem: number,
  grid: TTypographicGrid
): object => {
  const responsiveFontSizes: {} = useResponsiveFontSizes("object", grid);

  return {
    fontSize: `${fontSize}%`,
    lineHeight: lineHeight,
    "--lem": `${lem}em`,
    ...responsiveFontSizes,
  };
};

/**
 * Sets up the typographic grid.
 *
 * @param  notation        The format of the results. See `TCssNotations`.
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @return                 The CSS to be added to the `<body>`.
 * @category Hooks
 * @example <caption>Object notation</caption>
 * useTypographicGrid('object') =>
 * {"fontSize": "100%", "lineHeight": 1.25", --lem": "1.25em",
 * "@media(min-width: 1024px)": {"fontSize": "120%"},
 * "@media(min-width: 1600px)": {"fontSize": "140%"},
 * "@media(min-width: 320px)": {"fontSize": "100%"},
 * "@media(min-width: 768px)": {"fontSize": "110%"}}
 * @example <caption>String notation</caption>
 * useTypographicGrid('string') =>
 * "body {
 * 	font-size: 100%;
 * 	line-height: 1.25;
 * 	--lem: 1.25em;
 * }"
 * "@media(min-width: 320px) {body {font-size: 100%;}}"
 * "@media(min-width: 768px) {body {font-size: 110%;}}"
 * "@media(min-width: 1024px) {body {font-size: 120%;}}"
 * "@media(min-width: 1600px) {body {font-size: 140%;}}"
 */
const useTypographicGrid = (
  notation: TCssNotations,
  typographicGrid?: TTypographicGrid
): {} | string => {
  const gridFromTheme = theme?.typography?.grid;

  const grid: TTypographicGrid = useDefaultProps(
    typographicGrid,
    gridFromTheme
  );
  const fontSizes = grid?.fontSizes;
  const lineHeight = grid?.lineHeight;
  const fontSize = fontSizes[0] ? fontSizes[0] : 100;
  const lem = useLem();

  switch (notation) {
    case "string":
      return stringNotation(fontSize, lineHeight, lem, grid);
    case "object":
      return objectNotation(fontSize, lineHeight, lem, grid);
  }
};

export default useTypographicGrid;
