import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from ".";
import { Button } from "@components/decorations";
import { H3 } from "@components/semantic-elements";
import { Grid } from "@components/layout";

const menuItemWithIcon = (wrapper, title) => {
  let title2 = null;

  switch (wrapper) {
    case "span":
      title2 = <span className={cx("Text")}>{title}</span>;
    case "H3":
    default:
      title2 = <H3 className={cx("Text")}>{title}</H3>;
  }

  return (
    <Grid className="MenuItemWithIcon">
      {title2}
      <Button className={cx("Button")}>Menu</Button>
    </Grid>
  );
};

/**
 * Displays a menu item with an icon.
 */
const MenuItemWithIcon = (props: TMenuItem) => {
  const { title, type } = props;

  switch (type) {
    case "menuItem":
      return menuItemWithIcon("span", title);
    case "menuTitle":
    default:
      return menuItemWithIcon("H3", title);
  }
};

export default MenuItemWithIcon;
