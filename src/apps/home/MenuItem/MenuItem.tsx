import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Link } from "@components/Link";

/**
 * Defines the MenuItem type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenuItem = {
  title?: string;
  url?: string;
  active?: boolean;
} & typeof MenuItemDefaultProps;

/**
 * Defines the MenuItem default props.
 * @category Components
 * @example
 * Example here...
 */
const MenuItemDefaultProps = {
  title: null,
  url: null,
  active: null,
};

/**
 * Displays the MenuItem.
 * @category Components
 * @component
 * @example
 * return <MenuItem />
 */
const MenuItem = (props: TMenuItem) => {
  const { title, url, active } = props;
  if (!title && !url) return null;

  return (
    <Link href={url} title={title} className={cx("MenuItem")}>
      {title}
    </Link>
  );
};

MenuItem.defaultProps = MenuItemDefaultProps;

export default MenuItem;
export { MenuItemDefaultProps };
