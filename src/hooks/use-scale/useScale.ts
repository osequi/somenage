import type { TTypographicScale, TTypographicScaleNames } from "@theme";
import { useLinearScale, useModularScale } from "../";
import { isNil } from "lodash";

/**
 * Returns value(s) from a scale.
 *
 * Used to set different font sizes than the body text.
 *
 * @param  points	The point(s) on the scale.
 * @param  preset	The typographic scale preset to use. Or
 * @param  scale	The complete cale settings.
 * @return          The font size(s) set to the value(s) from the scale.
 * @category Hooks
 * @example <caption>A single point on the linear scale:</caption>
 * useScale(1, 'linear') => {fontSize: 2em}
 * @example <caption>An array of points:</caption>
 * useScale([1, 2, 3], 'linear') => [{fontSize: 2em}, {fontSize: 3em}, {fontSize: 4em}]
 * @example <caption>A single point on the modular scale:</caption>
 * useScale(1, "modular") => {fontSize: 1.25em}
 * @example <caption>An array of point on a custom modular scale:</caption>
 * useScale([1, 2], null, {name: "modular", settings: {base:[1], ratio: 1.333}}) => {fontSize: 1.25em}
 */
const useScale = (
  points: number[] | number,
  preset?: TTypographicScaleNames,
  scale?: TTypographicScale
): object[] | object | null => {
  if (isNil(points)) return null;
  if (!preset && !scale?.name) return null;

  const preset2: TTypographicScaleNames = preset ? preset : scale.name;
  const settings = scale?.settings;

  let values: number[] | number = [];
  switch (preset2) {
    case "linear":
      values = useLinearScale(points);
      break;
    case "modular":
      values = useModularScale(points, settings);
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
