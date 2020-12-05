import React from "react";
import { cx } from "@emotion/css";
import { useId } from "react-aria";
import { useRouter } from "next/router";

/**
 * Imports other types, components and hooks.
 */
import type { TMenu } from "./Menu";
import { Grid } from "@components/layout";
import { Nav, Aside } from "@components/semantic-elements";

/**
 * Imports business logic.
 */
import {
  getMenuItemState,
  getActiveMenuItem,
  displayMenuItems,
  getMenuTitleAsProps,
} from "./Menu.logic";

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

      const menuItemsList = displayMenuItems(menuItems, activeMenuItem, state);
      const asideProps = getMenuTitleAsProps(menuTitle, activeMenuItem, state);
      const menuTitleState = getMenuItemState(menuTitle, activeMenuItem, state);
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
