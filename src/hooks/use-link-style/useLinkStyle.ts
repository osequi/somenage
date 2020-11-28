import type { TLinkStylePresetNames } from "../../theme";
import { theme } from "../../theme";
import { useColors } from "../";
import { isNil } from "lodash";

const useLinkStyle = (preset?: TLinkStylePresetNames): object | null => {
  if (!preset) return null;

  const links = theme?.typography?.linkStyles;

  const linkPreset = links && links.find((item) => item.preset === preset);

  const linkStyleProps = linkPreset?.styleProps;
  const linkColors = linkPreset?.colors;
  if (isNil(linkStyleProps) && isNil(linkColors)) return null;

  const defaultStyle = linkStyleProps?.default;
  const activeStyle = linkStyleProps?.active;
  const visitedStyle = linkStyleProps?.visited;

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

export default useLinkStyle;
