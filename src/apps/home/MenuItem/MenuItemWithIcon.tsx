import React, { useContext } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from ".";
import { Button } from "@components/decorations";
import { H3 } from "@components/semantic-elements";
import { useStyles } from "@hooks";
import { MenuIconContext } from "@home/Template";

const withIconStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ["& .Button"]: {
    marginTop: 0,
  },
};

const menuItemWithIcon = (wrapper, title) => {
  const withIconKlass = useStyles(withIconStyle);
  const { menuIconState, setMenuIconState } = useContext(MenuIconContext);

  let title2 = null;

  switch (wrapper) {
    case "span":
      title2 = <span className={cx("Text")}>{title}</span>;
    case "H3":
    default:
      title2 = <H3 className={cx("Text")}>{title}</H3>;
  }

  return (
    <div className={cx("MenuItemWithIcon", withIconKlass)}>
      {title2}
      <Button
        className={cx("Button")}
        state={menuIconState}
        updateState={setMenuIconState}
      >
        Menu
      </Button>
    </div>
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
