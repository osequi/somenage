import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem, TMenuItemStateNames } from "../MenuItem";
import { FeaturesDefaultProps } from "../Features";

/**
 * Imports state logic.
 */
import MenuStateDefault from "./Menu.state.default";
import MenuStateTitleWithIcon from "./Menu.state.title-with-icon";

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
  state?: TMenuItemStateNames;
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

  switch (state) {
    case "title-with-icon":
      return <MenuStateTitleWithIcon {...props} />;
    case "hidden":
      return null;
    case "default":
    default:
      return <MenuStateDefault {...props} />;
  }
};

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps };
