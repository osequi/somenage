import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from "../MenuItem";
import { FeaturesDefaultProps } from "../Features";

/**
 * Imports variations.
 */
import MenuDefault from "./MenuDefault";
import MenuTitleWithIcon from "./MenuTitleWithIcon";

/**
 * Defines the menu state type.
 */
export type TMenuState = "unknown" | "hidden" | "default" | "titleWithIcon";

/**
 * Defines a menu item group type.
 */
export type TMenuItemGroup = {
  /**
   * The title of the group.
   */
  menuTitle?: TMenuItem;
  /**
   * The menu items of the group.
   */
  menuItems?: TMenuItem[];
};

/**
 * Defines the Menu type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenu = {
  siteUrl?: string;
  items?: TMenuItemGroup[];
  state?: TMenuState;
} & typeof MenuDefaultProps;

/**
 * Defines the Menu default props.
 * @category Components
 * @example
 * Example here...
 */
const MenuDefaultProps = {
  siteUrl: "/",
  items: [FeaturesDefaultProps?.menuGroup],
  state: "default", //"title-with-icon",
};

/**
 * Displays the Menu.
 * @category Components
 * @component
 * @example
 * return <Menu />
 */
const Menu = (props: TMenu) => {
  const { state } = props;

  console.log("state:", state);

  switch (state) {
    case "default":
      return <MenuDefault {...props} />;
    case "titleWithIcon":
      return <MenuTitleWithIcon {...props} />;
    case "hidden":
    default:
      return null;
  }
};

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps };
