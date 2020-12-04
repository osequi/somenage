import React, { ReactNode } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TLinkStatePresetNames } from "@theme";
import { Link } from "@components/Link";
import { H3 } from "@components/semantic-elements";

/**
 * Defines the menu item state names type.
 */
export type TMenuItemStateNames = TLinkStatePresetNames & "title-with-icon";

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

  /**
   * Displays the menu item as a link.
   */
  const link = (
    <Link href={url} title={title} state={state} className={cx("MenuItem")}>
      {title}
    </Link>
  );

  /**
   * Displays the menu item as a title with icon.
   * When the item is a menu group title it is already wrapped into a heading.
   */
  const titleWithIcon =
    type === "menu-item" ? (
      <H3>
        <span>{title}</span>
      </H3>
    ) : (
      title
    );

  switch (state) {
    case "title-with-icon":
      return titleWithIcon;
    default:
      return link;
  }
};

MenuItem.defaultProps = MenuItemDefaultProps;

export default MenuItem;
export { MenuItemDefaultProps };
