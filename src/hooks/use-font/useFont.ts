import type { TFont, TFontNames, TFontWithName } from "../../theme";
import { theme } from "../../theme";

/**
 * Returns a font style object identified by name.
 * @ignore
 */
const getFont = (name: TFontNames, fonts: TFontWithName[]): TFont => {
  const { name: fontName, ...rest } = fonts.find((item) => item.name === name);

  const {
    typography: {
      text: { elementsWhichNeedFontReset },
    },
  } = theme;

  /**
   * The font for these elements has to be set explicitely.
   * Otherwise they'll use the browser default font which is monospace.
   */
  const updateBrowserDefaults = elementsWhichNeedFontReset
    ? {
        [`& ${elementsWhichNeedFontReset}`]: {
          ...rest,
        },
      }
    : {};

  return { ...rest, ...updateBrowserDefaults };
};

/**
 * Returns font style objects identified by names.
 * @param  names 	An array of font names, or a single font name.
 * @return 			An array of font style objects, or a single font object, or null.
 * @category Hooks
 * @example useFont('Default') => { fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}
 * @example useFont(['Default']) => [{ fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}]
 * @example useFont(["Default", 'Nimbus Sans Medium']) => [{ fontFamily: "inherit", fontWeight: 'inherit', fontStyle: "inherit"}, { fontFamily: "nimbus-sans", fontWeight: 500, fontStyle: "normal"}]
 */
const useFont = (names: TFontNames[] | TFontNames): TFont[] | TFont => {
  const {
    typography: { fonts },
  } = theme;

  return Array.isArray(names)
    ? names &&
        names.reduce((result, name) => {
          return [...result, getFont(name, fonts)];
        }, [])
    : getFont(names, fonts);
};

export default useFont;
