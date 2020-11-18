import type { THeadings } from "../../theme";
import { useFont, useScales } from "../";

/**
 * Rounds up an array to 6 elements.
 * @param  scales 	An array of scales.
 * @return      	An array of scales having 6 elements.
 * @ignore
 */
const interpolateScales = (scales: object[]): object[] => {
  const lastElement = scales.pop();

  return Array(6)
    .fill(null)
    .map((item, index) => {
      console.log("item:", item);
      return scales[index] ? scales[index] : lastElement;
    });
};

/**
 * Returns headings with different size.
 * @ignore
 */
const differentSizes = (headings: THeadings): object => {
  const {
    settings: { font, lineHeight, scale },
  } = headings;

  const font2 = useFont(font);
  let scale2 = null;
  scale2 = useScales(scale);
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

export default differentSizes;
