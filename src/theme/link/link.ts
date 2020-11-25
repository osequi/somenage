/**
 * Defines the link preset names.
 * @category Theme
 */
export type TLinkPresetNames = "default";

/**
 * Collects the link preset names into an array.
 * @ignore
 */
const linkPresetNames = ["default"];

/**
 * Defines the link settings type.
 */
export type TLinkSettings = {
  /**
   * The style of the link in default state.
   */
  defaultStyle?: object;
  /**
   * The style of the link for hover, active, focus states.
   */
  activeStyle?: object;
  /**
   * The style of the link for the visited state.
   */
  visitedStyle?: object;
};

/**
 * Defines the link type.
 * @category Theme
 */
export type TLink = {
  /**
   * Which preset to use.
   */
  preset?: TLinkPresetNames;
  /**
   * The settings for the preset.
   */
  settings?: TLinkSettings;
};

/**
 * Defines the default link style.
 */
const defaultLink: TLink = {
  preset: "default",
  settings: {
    defaultStyle: {
      textDecoration: "underline",
    },
    activeStyle: {
      textDecoration: "line-through",
    },
    visitedStyle: {
      color: "lightgray",
    },
  },
};

/**
 * Defines the available link styles.
 */
const links: TLink[] = [defaultLink];

export default links;
export { linkPresetNames };
