import type { TLinkPresetNames } from "../../theme";
import { theme } from "../../theme";
import { useColors } from "../";
import { isNil } from "lodash";

const useLink = (preset?: TLinkPresetNames): object | null => {
  if (!preset) return null;

  const links = theme?.typography?.links;

  const linkPreset = links && links.find((item) => item.preset === preset);

  const linkSettings = linkPreset?.settings;
  const linkColors = linkPreset?.colors;
  if (isNil(linkSettings) && isNil(linkColors)) return null;

  const defaultStyle = linkSettings?.default;
  const activeStyle = linkSettings?.active;
  const visitedStyle = linkSettings?.visited;

  const defaultColor = linkColors?.default;
  const activeColor = linkColors?.active;
  const visitedColor = linkColors?.visited;

  const defaultColors = defaultColor ? useColors(defaultColor) : null;
  const activeColors = activeColor ? useColors(activeColor) : null;
  const visitedColors = visitedColor ? useColors(visitedColor) : null;

  return {
    ["& a"]: {
      ...defaultColors,
      ...defaultStyle,

      ["&:hover, &:active, &:focus"]: {
        ...activeColors,
        ...activeStyle,
      },

      ["&:visited"]: {
        ...visitedColors,
        ...visitedStyle,
      },
    },
  };
};

export default useLink;
