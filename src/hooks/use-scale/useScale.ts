import { TTypographicScale } from "../../theme";
import { useLinearScale, useModularScale } from "../";

/**
 * Defines a temporary type.
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
  const { point, scale } = scaleWithPoint;
  const { name } = scale;

  switch (name) {
    case "linear":
      return useLinearScale(point, scale);
    case "modular":
      return useModularScale(point, scale);
  }
};

/**
 * Returns a value from a scale.
 *
 * Used to set a different font size than the body text.
 *
 * @param  scales An array of typographic scales and points on the scale, or a single typographic scale and a single point.
 * @return        An array of values from the scale, or a single value from the scale.
 * @category Hooks
 * @example <caption>An array of scales and points:</caption>
 * useScale([{point: 1, name: 'linear'}, {value: 1, name: 'modular'} ]) => [2, 1.33]
 * @example <caption>A single scale with point:</caption>
 * useScale({point: 1, name: 'linear'}) => 2
 */
const useScale = (
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
