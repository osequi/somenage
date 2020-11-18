import type { THeadings } from "../../theme";
import { useFont, useScaleWithSettings } from "../";

/**
 * Returns headings with the same size.
 * @ignore
 */
const sameSize = (headings: THeadings): object => {
  const {
    settings: { font, lineHeight, scale },
  } = headings;

  const font2 = useFont(font);
  const scale2 = useScaleWithSettings(scale);

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      ...scale2,
      lineHeight: lineHeight,
    },
  };
};

export default sameSize;
