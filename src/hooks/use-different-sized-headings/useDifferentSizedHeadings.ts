import type { THeadings } from "../../theme";
import { useFont, useScales, useDefaultProps } from "../";
import { theme } from "../../theme";

/**
 * Rounds up an array to 6 elements.
 * @param  scales 	An array of font sizes, or a single font size object.
 * @return      	An array of scales having 6 elements.
 * @ignore
 * @example interpolateScales([{fontSize: '2em'}]) => [{fontSize: '2em'}, {fontSize: '2em'}, {fontSize: '2em'}, {fontSize: '2em'}, {fontSize: '2em'}, {fontSize: '2em'}]
 */
const interpolateScales = (scales: object[] | object): object[] => {
  /**
   * Transform `scales` into an array, even if it's null
   */
  const scales2 = scales ? (Array.isArray(scales) ? scales : [scales]) : [{}];
  const scales2Length = scales2.length;

  /**
   * This item fills the rest of the array when `scales` size < 6 .
   */
  const lastElement = scales2[scales2Length - 1];

  return Array.from(Array(6).keys()).map((item) => {
    return item < scales2Length ? scales2[item] : lastElement;
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
const useDifferentSizedHeadings = (headings?: THeadings): object | null => {
  const headingsFromTheme = theme?.typography?.headings;

  if (!headings && !headingsFromTheme) return null;

  const differentSizedHeadingsFromTheme =
    headingsFromTheme &&
    headingsFromTheme.find((item) => item.preset === "differentSizes");

  const headings2: THeadings = useDefaultProps(
    headings,
    differentSizedHeadingsFromTheme
  );

  if (!headings2?.settings) return null;

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
