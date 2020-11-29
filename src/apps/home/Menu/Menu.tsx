import React from "react";
import { cx } from "@emotion/css";
import { useRouter } from "next/router";
import { useId } from "react-aria";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem, TMenuItemStateNames } from "../MenuItem";
import { MenuItem } from "../MenuItem";
import { FeaturesDefaultProps } from "../Features";
import { Grid } from "@components/layout";
import { Nav, Aside } from "@components/semantic-elements";

/**
 * Imports business logic.
 */
import { getActiveMenuItem, getMenuItemState } from "./Menu.logic";

/**
 * Defines a menu item group type.
 */
export type TMenuItemGroup = {
  /**
   * The title of the group.
   */
  menuTitle: TMenuItem;
  /**
   * The menu items of the group.
   */
  menuItems: TMenuItem[];
};

/**
 * Defines the Menu type.
 * @category Components
 * @example
 * Example here...
 */
export type TMenu = {
  siteUrl?: string;
  items?: TMenuItemGroup[];
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
  items: [FeaturesDefaultProps.menuGroup],
  state: "title-with-icon", //"title-with-icon",
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

  /**
   * Finds the active menu item.
   */
  const activeMenuItem = getActiveMenuItem(items, route);

  /**
   * Checks if we have the special `title-with-icon` state.
   * In this state the whole menu is hiiden only the active menu item, or menu title is displayed.
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
          const menuItemState = getMenuItemState(
            menuItem,
            activeMenuItem,
            isTitleWithIconState,
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

      const menuTitleState = getMenuItemState(
        menuTitle,
        activeMenuItem,
        isTitleWithIconState,
        state
      );

      const asideProps = {
        heading: {
          level: 3,
          display: menuTitleState !== "hidden",
          children: <MenuItem {...menuTitle} state={menuTitleState} />,
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
