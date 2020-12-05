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
 * Displays the `title with icon` menu.
 *
 * Usually it would be a single text with a menu icon.
 * However, when the icon is clicked the animation will reveal the whole menu.
 * For that animation a single text with icon is not enough. The whole menu should be displayed with the inactive items hidden.
 */
const MenuTitleWithIcon = (props: TMenu) => {
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

          console.log("menuItem:", menuItem);
          console.log("menuItemState:", menuItemState);

          const liStyle =
            menuItemState === "hidden" ? { display: "none" } : null;

          console.log("liStyle:", liStyle);

          return (
            <li style={liStyle} key={useId()}>
              <MenuItem {...menuItem} state={menuItemState} />
            </li>
          );
        });

      const menuTitleState = getMenuItemState(menuTitle, activeMenuItem, state);

      const asideProps = {
        heading: {
          level: 3,
          display: menuTitleState !== "hidden",
          children: (
            <MenuItem {...menuTitle} state={menuTitleState} type="menu-title" />
          ),
        },
      };

      const ulStyle = menuTitleState !== "hidden" ? { display: "none" } : null;

      return (
        <Grid key={useId()} as={Aside} asProps={asideProps}>
          <ul style={ulStyle}>{menuItemsList}</ul>
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

export default MenuTitleWithIcon;
