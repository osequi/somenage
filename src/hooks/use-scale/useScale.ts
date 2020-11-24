import type { TTypographicScale, TScale } from "../../theme";
import { theme } from "../../theme";
import { useLinearScale, useModularScale, useDefaultProps } from "../";

/**
 * Returns value(s) from a scale.
 *
 * Used to set different font sizes than the body text.
 *
 * @param  points	The point(s) on the scale.
 * @param  scale	The typographic scale to use. Optional, can obtain the default value from the theme.
 * @return          The font size(s) set to the value(s) from the scale.
 * @category Hooks
 * @example <caption>An single point:</caption>
 * useScale(1) => {fontSize: 2em}
 * @example <caption>An array of points:</caption>
 * useScale([1, 2, 3]) => [{fontSize: 2em}, {fontSize: 3em}, {fontSize: 4em}]
 * @example <caption>An single point with a scale:</caption>
 * useScale(1, { name: "modular" } }) => {fontSize: 1.25em}
 */
const useScale = (
  points: number[] | number,
  scale?: TTypographicScale
): object[] | object | null => {
  if (!points) return null;
  if (!scale?.name) return null;

  const { name } = scale;

  let values = null;
  switch (name) {
    case "linear":
      values = useLinearScale(points);
      break;
    case "modular":
      values = useModularScale(points, scale);
      break;
  }
  if (!values) return null;

  return Array.isArray(values)
    ? values &&
        values.reduce((result, value) => {
          return [...result, { fontSize: `${value}em` }];
        }, [])
    : { fontSize: `${values}em` };
};

/**
 * Returns value(s) from scale(s).
 *
 * Used to set different font sizes than the body text.
 *
 * @param  scales	The typographic scale and points on the scale, or an array of these.
 * @return			A font size set to the value on the scale, or an array of font sizes.
 * @category Hooks
 * @example <caption>A single scale with a single point:</caption>
 * useScales({ points: 1, scale: { name: "linear" } }) => {fontSize: 2em}
 * @example <caption>An array of scales with single points:</caption>
 * useScales([{ points: 1, scale: { name: "linear" } }), { points: 1, scale: { name: "modular" } } ]) => [{fontSize: 2em}, {fontSize: 1.25em}]
 * @example <caption>An array of scales with arrays of points:</caption>
 * useScales([{ points: [1, 2], scale: { name: "linear" } }), { points: [1, 2], scale: { name: "modular" } } ]) => [[{fontSize: 2em}, {fontSize: 3em}], [{fontSize: 1.25em}, {fontSize: 1.526em}]]
 */
const useScales = (scales?: TScale[] | TScale): object[] | object => {
  return Array.isArray(scales)
    ? scales &&
        scales.reduce((result, scale) => {
          return [...result, useScale(scale.points, scale.scale)];
        }, [])
    : useScale(scales.points, scales.scale);
};

export default useScale;
export { useScales };
