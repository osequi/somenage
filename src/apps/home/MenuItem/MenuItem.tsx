import React, { ReactNode } from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TLinkStatePresetNames } from "@theme";
import type { TMenuState } from "../Menu";

/**
 * Imports variations.
 */
import { MenuItemDefault, MenuItemWithIcon } from ".";

/**
 * Defines the menu item state names type.
 */
export type TMenuItemStateNames = TLinkStatePresetNames | TMenuState;

/**
 * Defines the menu item type names type.
 */
export type TMenuItemTypeNames = "menuItem" | "menuTitle";

/**
 * Defines the MenuItem type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenuItem = {
  type?: TMenuItemTypeNames;
  title?: ReactNode;
  url?: string;
  state?: TMenuItemStateNames;
} & typeof MenuItemDefaultProps;

/**
 * Defines the MenuItem default props.
 * @category Components
 * @example
 * Example here...
 */
const MenuItemDefaultProps = {
  type: "menuItem",
  title: null,
  url: null,
  state: "default",
};

/**
 * Displays the MenuItem.
 * @category Components
 * @component
 * @example
 * return <MenuItem />
 */
const MenuItem = (props: TMenuItem) => {
  const { state } = props;

  switch (state) {
    case "titleWithIcon":
      return <MenuItemWithIcon {...props} />;
    case "default":
    default:
      return <MenuItemDefault {...props} />;
  }
};

MenuItem.defaultProps = MenuItemDefaultProps;

export default MenuItem;
export { MenuItemDefaultProps };
