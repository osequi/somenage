import type {
  TLinkStylePresetNames,
  TLinkStatusPresetNames,
} from "../../theme";

import { theme } from "../../theme";
import { useColors } from "../";
import { isNil } from "lodash";

/**
 * Styles a link.
 * @param	preset	The links preset name.
 * @param	status	The link status
 * @return			The links style object.
 * @category Hooks
 */
const useLinkStyle = (
  preset?: TLinkStylePresetNames,
  status?: TLinkStatusPresetNames
): object | null => {
  if (!preset) return null;

  const links = theme?.typography?.linkStyles;

  const linkPreset = links && links.find((item) => item.preset === preset);

  const linkStyleProps = linkPreset?.styleProps;
  const linkColors = linkPreset?.colors;
  if (isNil(linkStyleProps) && isNil(linkColors)) return null;

  const defaultStyle = linkStyleProps?.default;
  const activeStyle = linkStyleProps?.active;
  const visitedStyle = linkStyleProps?.visited;
  const disabledStyle = linkStyleProps?.disabled;
  const hiddenStyle = linkStyleProps?.hidden;

  const defaultColor = linkColors?.default;
  const activeColor = linkColors?.active;
  const visitedColor = linkColors?.visited;
  const disabledColor = linkColors?.disabled;

  const defaultColors = defaultColor ? useColors(defaultColor) : null;
  const activeColors = activeColor ? useColors(activeColor) : null;
  const visitedColors = visitedColor ? useColors(visitedColor) : null;
  const disabledColors = disabledColor ? useColors(disabledColor) : null;

  const hiddenLink = { ["& a"]: { ...hiddenStyle } };
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
  const visibleLink = {
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

  switch (status) {
    case "disabled":
      return disabledLink;
    case "hidden":
      return hiddenLink;
    case "visible":
      return visibleLink;
  }
};

export default useLinkStyle;
