import React from "react";
import type { TMenuItemGroup, TMenuState } from ".";
import type { TMenuItem, TMenuItemStateNames } from "../MenuItem";
import { isEqual } from "lodash";
import { useId } from "react-aria";

/**
 * Imports other types, components and hooks.
 */
import { MenuItem } from "../MenuItem";

/**
 * Returns the menu title as props to be displayed using a semantic element.
 * @param  menuTitle      	The menu items to display.
 * @param  activeMenuItem 	The active menu item. It will be displayed distinctively.
 * @param  state          	The menu state. Defines how the menu items will be displayed.
 * @return					A set of props for a semantic element.
 */
const getMenuTitleAsProps = (
  menuTitle: TMenuItem,
  activeMenuItem: TMenuItem,
  state: TMenuState
) => {
  const menuTitleState = getMenuItemState(menuTitle, activeMenuItem, state);

  return {
    heading: {
      level: 3,
      display: menuTitleState !== "hidden",
      children: (
        <MenuItem {...menuTitle} state={menuTitleState} type="menuTitle" />
      ),
    },
  };
};

/**
 * Displays menu items.
 * @param  menuItems      	The menu items to display.
 * @param  activeMenuItem 	The active menu item. It will be displayed distinctively.
 * @param  state          	The menu state. Defines how the menu items will be displayed.
 * @return 					A list of menu items.
 */
const displayMenuItems = (
  menuItems: TMenuItem[],
  activeMenuItem: TMenuItem,
  state: TMenuState
) => {
  return (
    menuItems &&
    menuItems.map((menuItem) => {
      const menuItemState = getMenuItemState(menuItem, activeMenuItem, state);

      const liStyle = menuItemState === "hidden" ? { display: "none" } : null;

      return (
        <li style={liStyle} key={useId()}>
          <MenuItem {...menuItem} state={menuItemState} />
        </li>
      );
    })
  );
};

/**
 * Returns the current menu item's state.
 * @param  menuItem             The current menu item.
 * @param  activeMenuItem       The active menu item.
 * @param  state                The menu state.
 * @return                      One of the `TMenuItemStateNames`.
 */
const getMenuItemState = (
  menuItem: TMenuItem,
  activeMenuItem: TMenuItem,
  state: TMenuItemStateNames
): TMenuItemStateNames => {
  const isActiveMenuItem = isEqual(menuItem, activeMenuItem);
  const isTitleWithIconState = state === "titleWithIcon";

  return isTitleWithIconState
    ? isActiveMenuItem
      ? state
      : ("hidden" as TMenuItemStateNames)
    : ("default" as TMenuItemStateNames);
};

/**
 * Returns the active menu item.
 * @param  items	The menu item groups.
 * @param  route	The current route.
 * @return 			The active menu item, or en empty object
 */
const getActiveMenuItem = (items: TMenuItemGroup[], route: string) => {
  if (!items || !route) return null;

  return (
    items &&
    items.reduce((previousValue, currentValue): TMenuItem => {
      const { menuItems, menuTitle } = currentValue;

      const activeMenuItem =
        menuItems && menuItems.find((menuItem) => menuItem.url === route);

      const activeMenuTitle = menuTitle?.url === route;

      const active: TMenuItem = activeMenuItem
        ? activeMenuItem
        : activeMenuTitle
        ? menuTitle
        : null;

      return active ? active : previousValue;
    }, {} as TMenuItem)
  );
};

export {
  getActiveMenuItem,
  getMenuItemState,
  displayMenuItems,
  getMenuTitleAsProps,
};
