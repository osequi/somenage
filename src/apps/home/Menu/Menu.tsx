import React from "react";
import { cx } from "@emotion/css";
import { useRouter } from "next/router";
import { useId } from "react-aria";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItem } from "../MenuItem";
import { MenuItem } from "../MenuItem";
import { useStyles } from "@hooks";
import { FeaturesDefaultProps } from "../Features";

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
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
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
          return <MenuItem key={useId()} {...menuItem} />;
        });

      return (
        <aside>
          <MenuItem key={useId()} {...menuTitle} />
          {menuItemsList}
        </aside>
      );
    });

  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Menu", containerKlass)}>{itemsList}</div>;
};

Menu.defaultProps = MenuDefaultProps;

export default Menu;
export { MenuDefaultProps };
