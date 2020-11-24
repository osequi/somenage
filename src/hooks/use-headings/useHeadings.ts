import { THeadings } from "../../theme";
import { useSameSizeHeadings } from "../";
import { useDifferentSizedHeadings } from "../";

/**
 * Returns a heading style.
 * @ignore
 */
const getHeading = (headings: THeadings): object => {
  const { preset } = headings;

  switch (preset) {
    case "sameSize":
      return useSameSizeHeadings(headings);
    case "differentSizes":
      return useDifferentSizedHeadings(headings);
  }
};

/**
 * Resizes and styles headings according to a preset.
 * @param headings	An array of headings style settings, or a single headings style settings.
 * @return			An array of style objects, or a single style object.
 * @category Hooks
 * @example <caption>Same sized headings</caption>
 * useHeadings({preset: "sameSize", settings: { font: "Default", lineHeight: 1, scale: { points: 3 }}}) => ["& h1, h2, h3, h4, h5, h6"]: {fontSize: 4em, ...}
 * @example <caption>Different sized headings</caption>
 * useHeadings({preset: "differentSizes", settings: { font: "Default", lineHeight: 1, scale: { points: [1, 2] }}}) => {["& h6"]: {fontSize: 2em}, ["& h5"]: {fontSize: 3em}, ["& h4"]: {fontSize: 3em}, ...}
 */
const useHeadings = (
  headings: THeadings[] | THeadings
): object[] | object | null => {
  if (!headings) return null;

  return Array.isArray(headings)
    ? headings &&
        headings.reduce((result, heading) => {
          return [...result, getHeading(heading)];
        }, [])
    : getHeading(headings);
};

export default useHeadings;
