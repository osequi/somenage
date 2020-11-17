import type { TTypographicGrid, TCssNotations } from "../../theme";
import { theme } from "../../theme";
import { useLem, useResponsiveFontSizes } from "../";

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
 * @param  notation        The format of the results.
 * @param  typographicGrid The typographic grid settings. It's optional. It's better to be loaded from the theme than passed as args.
 * @return                 The CSS to be added to the `<body>`.
 * @category Hooks
 * @example
 * {"fontSize": "100%", "lineHeight": 1.25", --lem": "1.25em",
 * "@media(min-width: 1024px)": {"fontSize": "120%"},
 * "@media(min-width: 1600px)": {"fontSize": "140%"},
 * "@media(min-width: 320px)": {"fontSize": "100%"},
 * "@media(min-width: 768px)": {"fontSize": "110%"}}

 */
const useTypographicGrid = (
  notation: TCssNotations,
  typographicGrid?: TTypographicGrid
): {} | string => {
  const {
    typography: { grid },
  } = theme;

  const grid2 = typographicGrid || grid;
  const { fontSizes, lineHeight } = grid2;
  const fontSize = fontSizes[0] ? fontSizes[0] : 100;

  const lem = useLem();

  switch (notation) {
    case "string":
      return stringNotation(fontSize, lineHeight, lem, grid2);
    case "object":
      return objectNotation(fontSize, lineHeight, lem, grid2);
  }
};

export default useTypographicGrid;
