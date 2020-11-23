import type { THeadings } from "../../theme";
import { useFont, useScales } from "../";
import { theme } from "../../theme";

/**
 * Returns headings with the same size.
 * @param	headings 	The settings for headings.
 * @return				The style object.
 * @category Hooks
 * @example
 * useSameSizeHeadings(preset: "sameSize", settings: {font: "Default", lineHeight: 1, scale: { points: 3 }}) =>
 * "& h1, h2, h3, h4, h5, h6": {
 * 	"fontFamily": "inherit",
 * 	"fontSize": "4em",
 * 	"fontStyle": "normal",
 * 	"fontWeight": "normal",
 * 	"letterSpacing": "normal",
 * 	"lineHeight": 1}
 */
const useSameSizeHeadings = (headings: THeadings): object => {
  const {
    typography: { headings: headingsFromTheme },
  } = theme;

  const sameSizeHeadingsFromTheme = headingsFromTheme.find(
    (item) => item.preset === "sameSize"
  );

  const headings2 = { ...sameSizeHeadingsFromTheme, ...headings };

  const {
    settings: { font, lineHeight, scale, otherSettings },
  } = headings2;

  const font2 = font ? useFont(font) : null;
  const scale2 = scale ? useScales(scale) : null;
  /**
   * Always return a single scale, even if multiple scales were given by error.
   */
  const scale3 = Array.isArray(scale2) ? scale2.shift() : scale2;

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      ...scale3,
      lineHeight: lineHeight ? lineHeight : null,
      ...otherSettings,
    },
  };
};

export default useSameSizeHeadings;
