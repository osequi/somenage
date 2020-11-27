import React from "react";
import { cx } from "@emotion/css";
import { useRouter } from "next/router";
import { useId } from "react-aria";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from "../MenuItem";
import { MenuItem } from "../MenuItem";
import { FeaturesDefaultProps } from "../Features";
import { Grid } from "@components/layout";
import { Nav, Aside, H3 } from "@components/semantic-elements";

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
};

/**
 * Displays the Menu.
 * @category Components
 * @component
 * @example
 * return <Menu />
 */
const Menu = (props: TMenu) => {
  const { siteUrl, items } = props;
  if (!items) return null;

  const router = useRouter();
  const route = router?.route;
  if (route === siteUrl) return null;

  const itemsList =
    items &&
    items.map((item) => {
      const { menuTitle, menuItems } = item;

      const menuItemsList =
        menuItems &&
        menuItems.map((menuItem) => {
          return (
            <li key={useId()}>
              <MenuItem {...menuItem} />
            </li>
          );
        });

      const asideProps = {
        heading: { level: 3, children: <MenuItem {...menuTitle} /> },
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

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps };
