import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from ".";
import type { TLinkStatePresetNames } from "@theme";
import { Link } from "@components/decorations";

/**
 * Displays a menu item in default state.
 */
const MenuItemDefault = (props: TMenuItem) => {
  const { title, url, state } = props;
  if (!title && !url) return null;

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
};

export default MenuItemDefault;
