import type { TLinkPresetNames, TLinkSettings } from "../../theme";
import { theme } from "../../theme";
import { useDefaultProps } from "../";

const useLink = (
  preset?: TLinkPresetNames,
  settings?: TLinkSettings
): object | null => {
  if (!preset) return null;

  const linksFromTheme = theme?.typography?.links;

  const linkPresetFromTheme =
    linksFromTheme && linksFromTheme.find((item) => item.preset === preset);

  const linkSettingsFromTheme = linkPresetFromTheme?.settings;

  const settings2: TLinkSettings = useDefaultProps(
    settings,
    linkSettingsFromTheme
  );
  if (!settings2) return null;

  const { defaultStyle, activeStyle, visitedStyle } = settings2;

  return {
    ["& a"]: {
      ...defaultStyle,

      ["&:hover, &:active, &:focus"]: {
        ...activeStyle,
      },

      ["&:visited"]: {
        ...visitedStyle,
      },
    },
  };
};

export default useLink;
