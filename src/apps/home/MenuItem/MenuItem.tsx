import React, { ReactNode } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TLinkStatePresetNames } from "@theme";
import { Link } from "@components/Link";
import { H3 } from "@components/semantic-elements";
import type { TMenuState } from "../Menu";

/**
 * Defines the menu item state names type.
 */
export type TMenuItemStateNames = TLinkStatePresetNames | TMenuState;

/**
 * Defines the menu item type names type.
 */
export type TMenuItemTypeNames = "menu-item" | "menu-title";

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
  type: "menu-item",
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
  const { type, title, url, state } = props;
  if (!title && !url) return null;

  switch (state) {
    case "title-with-icon":
      return type === "menu-item" ? <H3>{title}</H3> : title;
    default:
      return (
        <Link
          href={url}
          title={title}
          state={state as TLinkStatePresetNames}
          className={cx("MenuItem")}
        >
          {title}
        </Link>
      );
  }
};

MenuItem.defaultProps = MenuItemDefaultProps;

export default MenuItem;
export { MenuItemDefaultProps };
