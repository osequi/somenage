import type { TModularScaleSettings } from "@theme";
import { theme } from "@theme";
import { useDefaultProps } from "../";
import ms from "modularscale-js";

/**
 * Returns value(s) from the modular scale.
 *
 * Used to set different font sizes than the body text.
 *
 * @param  points       	The point(s) on the scale.
 * @param  settings		 	The settings for the scale.
 * @return 					The value(s) from the scale.
 * @category Hooks
 * @example
 * useModularScale(0) => 1
 * useModularScale(1) => 1.333
 * useModularScale(1, { base:[1], ratio: 1.25 }) => 1.25
 * useModularScale([1,2,3]) = [1.333, 1.777, 2.369]
 * @see https://github.com/modularscale/modularscale-js
 */
const useModularScale = (
  points: number[] | number,
  settings?: TModularScaleSettings
): number[] | number | null => {
  if (!points) return null;

  const scalesFromTheme = theme?.typography?.scales;

  const modularScaleFromTheme =
    scalesFromTheme && scalesFromTheme.find((item) => item.name === "modular");

  const modularScaleSettingsFromTheme = modularScaleFromTheme?.settings;

  const settings2: TModularScaleSettings = useDefaultProps(
    settings,
    modularScaleSettingsFromTheme
  );
  if (!settings2?.base || !settings2?.ratio) return null;

  return Array.isArray(points)
    ? points &&
        points.reduce((result, point) => {
          return [...result, ms(point, settings2)];
        }, [])
    : ms(points, settings2);
};

export default useModularScale;
