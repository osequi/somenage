import type { THeadings } from "../../theme";
import { useFont, useScale, useDefaultProps } from "../";
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
const useSameSizeHeadings = (headings?: THeadings): object | null => {
  const headingsFromTheme = theme?.typography?.headings;

  const sameSizeHeadingsFromTheme =
    headingsFromTheme &&
    headingsFromTheme.find((item) => item.preset === "sameSize");

  const headings2: THeadings = useDefaultProps(
    headings,
    sameSizeHeadingsFromTheme
  );
  if (!headings2 || !headings2?.settings) return null;

  const {
    settings: { font, lineHeight, scale, otherSettings },
  } = headings2;

  const font2 = font ? useFont(font) : null;
  const lineHeight2 = lineHeight ? lineHeight : null;
  //const scale2 = scale ? useScale(scale) : null;
  const scale2 = null;
  /**
   * Always return a single scale, even if multiple scales were given by error.
   */
  const scale3 = Array.isArray(scale2) ? scale2.shift() : scale2;

  console.log("font2");

  return {
    ["& h1, h2, h3, h4, h5, h6"]: {
      ...font2,
      ...scale3,
      lineHeight: lineHeight2,
      ...otherSettings,
    },
  };
};

export default useSameSizeHeadings;
