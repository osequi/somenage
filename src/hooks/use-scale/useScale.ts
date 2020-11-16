import type { TTypographicScale } from "../../theme";
import { theme } from "../../theme";
import { useLinearScale, useModularScale } from "../";

/**
 * Defines a temporary type.
 * It is used only for this hook.
 * @ignore
 */
type TTypographicScaleWithPoint = {
  /**
   * The point on the scale.
   */
  point: number;
  /**
   * The scale.
   */
  scale?: TTypographicScale;
};

/**
 * Returns a value from a scale.
 * @ignore
 */
const scaleValue = (scaleWithPoint: TTypographicScaleWithPoint): number => {
  const { point } = scaleWithPoint;

  const {
    typography: { scale: scaleFromTheme },
  } = theme;

  const scale2 = scaleWithPoint.hasOwnProperty("scale")
    ? scaleWithPoint.scale
    : scaleFromTheme;

  const { name } = scale2;

  switch (name) {
    case "linear":
      return useLinearScale(point, scale2);
    case "modular":
      return useModularScale(point, scale2);
  }
};

/**
 * Returns a value from scale.
 *
 * The scale settings are coming from the theme.
 *
 * Used to set a different font size than the body text.
 *
 * @param  points	An array of points on the scale, or a single point on the scale.
 * @return          An array of font sizes set to the values on the scale, or a font size set to the value on the scale.
 * @category Hooks
 * @example <caption>An array of points:</caption>
 * useScale([1, 2, 3]) => [{fontSize: 2em}, {fontSize: 3em}, {fontSize: 4em}]
 * @example <caption>An single point:</caption>
 * useScale(1) => {fontSize: 2em}
 */
const useScale = (scales: number[] | number): object[] | object => {
  return Array.isArray(scales)
    ? scales &&
        scales.reduce((result, scale) => {
          return [...result, { fontSize: `${scaleValue({ point: scale })}em` }];
        }, [])
    : { fontSize: `${scaleValue({ point: scales })}em` };
};

/**
 * Returns a value from a scale.
 *
 * The scale settings can be sepcified as props.
 *
 * Used to set a different font size than the body text.
 *
 * @param  scales An array of typographic scales and points on the scale, or a single typographic scale and a single point.
 * @return        An array of font sizes set to the values on the scales, or a font size set to the value on the scale.
 * @category Hooks
 * @example <caption>An array of scales and points:</caption>
 * useScaleWithSettings([{ point: 1, scale: { name: "linear" } }), { point: 1, scale: { name: "modular" } } ]) => [{fontSize: 2em}, {fontSize: 1.25em}]
 * @example <caption>A single scale with point:</caption>
 * useScaleWithSettings({ point: 1, scale: { name: "linear" } }) => {fontSize: 2em}
 */
const useScaleWithSettings = (
  scales?: TTypographicScaleWithPoint[] | TTypographicScaleWithPoint
): object[] | object => {
  return Array.isArray(scales)
    ? scales &&
        scales.reduce((result, scale) => {
          return [...result, { fontSize: `${scaleValue(scale)}em` }];
        }, [])
    : { fontSize: `${scaleValue(scales)}em` };
};

export default useScale;
export { useScaleWithSettings };
