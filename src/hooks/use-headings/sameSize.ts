import type { THeadings } from "../../theme";
import { useFont, useScales } from "../";

/**
 * Returns headings with the same size.
 * @ignore
 */
const sameSize = (headings: THeadings): object => {
  const {
    settings: { font, lineHeight, scale },
  } = headings;

  const font2 = useFont(font);
  const scale2 = useScales(scale);
  /**
   * Always return a single scale, even if multiple scales were given by error.
   */
  const scale3 = Array.isArray(scale2) ? scale2.shift() : scale2;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      ...scale3,
      lineHeight: lineHeight,
    },
  };
};

export default sameSize;
