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
  getActiveMenuItem,
  displayMenuItems,
  getMenuTitleAsProps,
} from "./Menu.logic";

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

      const menuItemsList = displayMenuItems(menuItems, activeMenuItem, state);
      const asideProps = getMenuTitleAsProps(menuTitle, activeMenuItem, state);

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
