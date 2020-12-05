import React from "react";
import { cx } from "@emotion/css";
import { useId } from "react-aria";
import { useRouter } from "next/router";

/**
 * Imports other types, components and hooks.
 */
import type { TMenu } from "./Menu";
import { MenuItem } from "../MenuItem";
import { Grid } from "@components/layout";
import { Nav, Aside } from "@components/semantic-elements";

/**
 * Imports business logic.
 */
import { getMenuItemState, getActiveMenuItem } from "./Menu.logic";

/**
 * Displays the default menu.
 */
const MenuDefault = (props: TMenu) => {
  const { items, state } = props;
  if (!items) return null;

  /**
   * Loads the current route.
   */
  const router = useRouter();
  const route = router?.route;

  /**
   * Finds the active menu item.
   */
  const activeMenuItem = getActiveMenuItem(items, route);

  /**
   * Prepares the menu items.
   */
  const itemsList =
    items &&
    items.map((item) => {
      const { menuTitle, menuItems } = item;

      const menuItemsList =
        menuItems &&
        menuItems.map((menuItem) => {
          const menuItemState = getMenuItemState(
            menuItem,
            activeMenuItem,
            state
          );

          const liStyle =
            menuItemState === "hidden" ? { display: "none" } : null;

          return (
            <li style={liStyle} key={useId()}>
              <MenuItem {...menuItem} state={menuItemState} />
            </li>
          );
        });

      const menuTitleState = getMenuItemState(menuTitle, activeMenuItem, state);

      console.log("menuTitleState:", menuTitleState);

      const asideProps = {
        heading: {
          level: 3,
          display: menuTitleState !== "hidden",
          children: (
            <MenuItem {...menuTitle} state={menuTitleState} type="menu-title" />
          ),
        },
      };

      return (
        <Grid key={useId()} as={Aside} asProps={asideProps}>
          <ul>{menuItemsList}</ul>
        </Grid>
      );
    });

  const navProps = { title: "Menu" };

  return (
    <Grid as={Nav} asProps={navProps} className={cx("Menu")}>
      {itemsList}
    </Grid>
  );
};

export default MenuDefault;
