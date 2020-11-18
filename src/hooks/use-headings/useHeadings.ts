import { THeadings } from "../../theme";
import { sameSize, differentSizes } from "./";

/**
 * Returns a heading style.
 * @ignore
 */
const getHeading = (headings: THeadings): object => {
  const { preset } = headings;

  switch (preset) {
    case "sameSize":
      return sameSize(headings);
    case "differentSizes":
      return differentSizes(headings);
  }
};

/**
 * Resizes and styles headings according to a preset.
 * @param headings	An array of headings style settings, or a single headings style settings.
 * @return			An array of style objects, or a single style object.
 * @category Hooks
 */
const useHeadings = (headings: THeadings[] | THeadings): object[] | object => {
  return Array.isArray(headings)
    ? headings &&
        headings.reduce((result, heading) => {
          return [...result, getHeading(heading)];
        }, [])
    : getHeading(headings);
};

export default useHeadings;
