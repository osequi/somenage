import type { THeadingsSettings, THeadingsPresetNames } from "../../theme";
import { useSameSizeHeadings, useDifferentSizedHeadings } from "../";

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
