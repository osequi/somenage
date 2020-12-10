import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from ".";
import { Button } from "@components/decorations";
import { H3 } from "@components/semantic-elements";

/**
 * Displays a menu item with an icon.
 */
const MenuItemWithIcon = (props: TMenuItem) => {
  const { title, type } = props;

  const withButton = (
    <>
      <span className={cx("Text")}>{title}</span>
      <Button className={cx("Button")}>Menu</Button>
    </>
  );

  switch (type) {
    case "menuItem":
      return <H3 className={cx("TextWithIcon")}>{withButton}</H3>;
    case "menuTitle":
    default:
      return <span className={cx("TextWithIcon")}>{withButton}</span>;
  }
};

export default MenuItemWithIcon;
