import type { TLinkStylePresetNames, TElementState } from "@theme";

import { theme } from "@theme";
import { useColors } from "../";
import { isNil } from "lodash";

/**
 * Styles a link.
 * @param	preset	The links preset name.
 * @param	state	The link state.
 * @param	wrap	Wrap the result into an `["& a"]` container?
 * @return			The links style object.
 * @category Hooks
 */
const useLinkStyle = (
  preset?: TLinkStylePresetNames,
  state?: TElementState,
  wrap?: boolean
): object | null => {
  if (!preset) return null;

  const links = theme?.decorations?.links;

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
  };
  const disabledLink = {
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
  };
  const hiddenLink = { ...hiddenStyle };

  let link = {};
  switch (state) {
    case "default":
      link = defaultLink;
      break;
    case "disabled":
      link = disabledLink;
      break;
    case "hidden":
      link = hiddenLink;
  }

  return wrap ? { ["& a"]: { ...link } } : link;
};

export default useLinkStyle;
