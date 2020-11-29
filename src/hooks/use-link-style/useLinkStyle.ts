import type { TLinkStylePresetNames, TLinkStatePresetNames } from "../../theme";

import { theme } from "../../theme";
import { useColors } from "../";
import { isNil } from "lodash";

/**
 * Styles a link.
 * @param	preset	The links preset name.
 * @param	state	The link state.
 * @return			The links style object.
 * @category Hooks
 */
const useLinkStyle = (
  preset?: TLinkStylePresetNames,
  state?: TLinkStatePresetNames
): object | null => {
  if (!preset) return null;

  const links = theme?.typography?.linkStyles;

  const linkPreset = links && links.find((item) => item.preset === preset);

  const linkStyleProps = linkPreset?.styles;
  const linkColors = linkPreset?.colors;
  if (isNil(linkStyleProps) && isNil(linkColors)) return null;

  const [
    defaultStyle,
    activeStyle,
    visitedStyle,
    disabledStyle,
    hiddenStyle,
  ] = linkStyleProps;

  const [defaultColor, activeColor, visitedColor, disabledColor] = linkColors;

  const defaultColors = defaultColor ? useColors(defaultColor) : null;
  const activeColors = activeColor ? useColors(activeColor) : null;
  const visitedColors = visitedColor ? useColors(visitedColor) : null;
  const disabledColors = disabledColor ? useColors(disabledColor) : null;

  const defaultLink = {
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
  const disabledLink = {
    ["& a"]: {
      ...disabledColors,
      ...disabledStyle,

      ["&:hover, &:active, &:focus"]: {
        ...disabledColors,
        ...disabledStyle,
      },

      ["&:visited"]: {
        ...disabledColors,
        ...disabledStyle,
      },
    },
  };
  const hiddenLink = { ["& a"]: { ...hiddenStyle } };

  switch (state) {
    case "default":
      return defaultLink;
    case "disabled":
      return disabledLink;
    case "hidden":
      return hiddenLink;
  }
};

export default useLinkStyle;
