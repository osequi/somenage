import type { THeadingsSettings } from "../../theme";
import { useFont, useScale, useDefaultProps } from "../";
import { theme } from "../../theme";
import { isNil } from "lodash";

/**
 * Returns headings with the same size.
 * @param	headings 	The settings for headings.
 * @return				The style object.
 * @category Hooks
 * @example
 * useSameSizeHeadings(font: "Default", lineHeight: 1, scale: { name: 'linear' }, points: 3}) =>
 * "& h1, h2, h3, h4, h5, h6": {
 * 	"fontFamily": "inherit",
 * 	"fontSize": "4em",
 * 	"fontStyle": "normal",
 * 	"fontWeight": "normal",
 * 	"letterSpacing": "normal",
 * 	"lineHeight": 1}
 */
const useSameSizeHeadings = (settings?: THeadingsSettings): object | null => {
  const headingsFromTheme = theme?.typography?.headings;

  const sameSizeHeadingsFromTheme =
    headingsFromTheme &&
    headingsFromTheme.find((item) => item.preset === "sameSize");

  const sameSizeHeadingsSettingsFromTheme = sameSizeHeadingsFromTheme?.settings;

  const settings2: THeadingsSettings = useDefaultProps(
    settings,
    sameSizeHeadingsSettingsFromTheme
  );
  if (!settings2) return null;

  const { font, lineHeight, scale, points, otherSettings } = settings2;

  const font2 = font ? useFont(font) : null;
  const lineHeight2 = lineHeight ? lineHeight : null;
  const scale2 = isNil(points) ? null : useScale(points, null, scale);
  /**
   * Always return a single scale, even if multiple scales were given by error.
   */
  const scale3 = Array.isArray(scale2) ? scale2.shift() : scale2;

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
