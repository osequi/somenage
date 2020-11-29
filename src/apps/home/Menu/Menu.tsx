import React from "react";
import { cx } from "@emotion/css";
import { useRouter } from "next/router";
import { useId } from "react-aria";
import { isEqual } from "lodash";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem, TMenuItemStateNames } from "../MenuItem";
import { MenuItem } from "../MenuItem";
import { FeaturesDefaultProps } from "../Features";
import { Grid } from "@components/layout";
import { Nav, Aside } from "@components/semantic-elements";

/**
 * Defines the Menu type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenu = {
  siteUrl?: string;
  items?: {
    menuTitle: TMenuItem;
    menuItems: TMenuItem[];
  }[];
  state: TMenuItemStateNames;
} & typeof MenuDefaultProps;

/**
 * Defines the Menu default props.
 * @category Components
 * @example
 * Example here...
 */
const MenuDefaultProps = {
  siteUrl: "/",
  items: [FeaturesDefaultProps],
  state: "title-with-icon",
};

/**
 * Displays the Menu.
 * @category Components
 * @component
 * @example
 * return <Menu />
 */
const Menu = (props: TMenu) => {
  const { siteUrl, items, state } = props;
  if (!items) return null;

  /**
   * Displays nothing on the homepage.
   */
  const router = useRouter();
  const route = router?.route;
  if (route === siteUrl) return null;

  console.log("route:", route);
  console.log("items:", items);

  /**
   * Finds the active menu item.
   */
  const activeMenuItem =
    items &&
    items.reduce((previousValue, currentValue): TMenuItem => {
      const { menuItems } = currentValue;
      const active =
        menuItems && menuItems.find((menuItem) => menuItem.url === route);

      console.log("menuItems:", menuItems);
      console.log("active:", active);
      console.log("previousValue:", previousValue);
      return active ? active : previousValue;
    }, {} as TMenuItem);

  console.log("activeMenuItem:", activeMenuItem);

  /**
   * Checks if we have the special `title-with-icon` state.
   * In this state the whole menu is hiiden only the active menu items is displayed.
   */
  const isTitleWithIconState = state === "title-with-icon";

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
          const isActiveMenuItem = isEqual(menuItem, activeMenuItem);

          console.log("menuItem:", menuItem);
          console.log("isActiveMenuItem:", isActiveMenuItem);

          /**
           * Sets the menu item state only when the active menu item is displayed and the state is `title-with-icon`.
           */
          const menuItemState = isTitleWithIconState
            ? isActiveMenuItem
              ? state
              : "hidden"
            : "default";

          console.log("menuItemState:", menuItemState);

          return (
            <li key={useId()}>
              <MenuItem {...menuItem} state={menuItemState} />
            </li>
          );
        });

      const asideProps = {
        heading: {
          level: 3,
          /**
           * Hides the menu group title when the state is `title-with-icon`.
           */
          display: !isTitleWithIconState,
          children: <MenuItem {...menuTitle} />,
        },
      };

      return (
        <Grid key={useId()} as={Aside} asProps={asideProps}>
          <ul>{menuItemsList}</ul>
        </Grid>
      );
    });

  const navProps = { title: "Menu" };

  const defaultMenu = (
    <Grid as={Nav} asProps={navProps} className={cx("Menu")}>
      {itemsList}
    </Grid>
  );

  return defaultMenu;
};

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps };
