import type { TTypographicScale, TTypographicScaleNames } from "../../theme";
import { useLinearScale, useModularScale } from "../";

/**
 * Returns value(s) from a scale.
 *
 * Used to set different font sizes than the body text.
 *
 * @param  points	The point(s) on the scale.
 * @param  preset	The typographic scale preset to use.
 * @return          The font size(s) set to the value(s) from the scale.
 * @category Hooks
 * @example <caption>An single point:</caption>
 * useScale(1, 'linear') => {fontSize: 2em}
 * @example <caption>An array of points:</caption>
 * useScale([1, 2, 3], 'linear') => [{fontSize: 2em}, {fontSize: 3em}, {fontSize: 4em}]
 * @example <caption>An single point with a scale:</caption>
 * useScale(1, "modular") => {fontSize: 1.25em}
 */
const useScale = (
  points: number[] | number,
  preset: TTypographicScaleNames
): object[] | object | null => {
  if (!points) return null;
  if (!preset) return null;

  let values: number[] | number = [];
  switch (preset) {
    case "linear":
      values = useLinearScale(points);
      break;
    case "modular":
      values = useModularScale(points);
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

export default useScale;
