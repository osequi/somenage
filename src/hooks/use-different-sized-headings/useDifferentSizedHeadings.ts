import type { THeadings } from "../../theme";
import { useFont, useScales } from "../";
import { theme } from "../../theme";

/**
 * Rounds up an array to 6 elements.
 * @param  scales 	An array of scales.
 * @return      	An array of scales having 6 elements.
 * @ignore
 */
const interpolateScales = (scales: object[] | object): object[] => {
  const lastElement = Array.isArray(scales) ? scales.pop() : scales;

  return Array.from(Array(6).keys()).map((item) => {
    return scales[item] ? scales[item] : lastElement;
  });
};

/**
 * Returns headings with different size.
 * @param	headings 	The settings for headings.
 * @return				The style object.
 * @category Hooks
 * @example
 * useDifferentSizedHeadings({preset: "differentSizes", settings: { font: "Default", lineHeight: 1, scale: { points: [1, 2] } }}) =>
       "& h1, h2, h3, h4, h5, h6": {
         "fontFamily": "inherit",
         "fontStyle": "normal",
         "fontWeight": "normal",
         "letterSpacing": "normal",
         "lineHeight": 1,
       },
		"& h1": {
           "fontSize": "3em",
        },
       "& h2": {
         "fontSize": "3em",
       },
       "& h3": {
         "fontSize": "3em",
       },
       "& h4": {
         "fontSize": "3em",
       },
       "& h5": {
         "fontSize": "3em",
       },
       "& h6": {
          "fontSize": "2em",
       },
 */
const useDifferentSizedHeadings = (headings: THeadings): object => {
  const {
    typography: { headings: headingsFromTheme },
  } = theme;

  const differentSizedHeadingsFromTheme = headingsFromTheme.find(
    (item) => item.preset === "differentSizes"
  );

  const headings2 = { ...differentSizedHeadingsFromTheme, ...headings };

  const {
    settings: { font, lineHeight, scale },
  } = headings2;

  const font2 = font ? useFont(font) : null;
  const scale2 = scale ? useScales(scale) : null;
  const scales = interpolateScales(scale2);

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      lineHeight: lineHeight,
    },
    ["& h6"]: {
      ...scales[0],
    },
    ["& h5"]: {
      ...scales[1],
    },
    ["& h4"]: {
      ...scales[2],
    },
    ["& h3"]: {
      ...scales[3],
    },
    ["& h2"]: {
      ...scales[4],
    },
    ["& h1"]: {
      ...scales[5],
    },
  };
};

export default useDifferentSizedHeadings;
