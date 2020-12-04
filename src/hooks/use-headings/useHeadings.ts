import type { THeadingsSettings, THeadingsPresetNames } from "@theme";
import { useSameSizeHeadings, useDifferentSizedHeadings } from "../";

/**
 * Resizes and styles headings according to a preset.
 * @param	preset		The preset name.
 * @param	settings	The settings for the preset.
 * @return				A style object.
 * @category Hooks
 * @example <caption>Same sized headings</caption>
 * useHeadings("sameSize") => ["& h1, h2, h3, h4, h5, h6"]: {fontSize: 4em, ...}
 * @example <caption>Different sized headings</caption>
 * useHeadings("differentSizes") => {["& h6"]: {fontSize: 2em}, ["& h5"]: {fontSize: 3em}, ["& h4"]: {fontSize: 3em}, ...}
 * @example <caption>Same sized headings with settings</caption>
 * useHeadings("sameSize", {points: 10}) => ["& h1, h2, h3, h4, h5, h6"]: {fontSize: 11em, ...}
 */
const useHeadings = (
  preset?: THeadingsPresetNames,
  settings?: THeadingsSettings
): object[] | object | null => {
  if (!preset) return null;

  switch (preset) {
    case "sameSize":
      return useSameSizeHeadings(settings);
    case "differentSizes":
      return useDifferentSizedHeadings(settings);
  }
};

export default useHeadings;
