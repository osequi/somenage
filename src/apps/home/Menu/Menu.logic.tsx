import type { TMenuItemGroup } from ".";
import type { TMenuItem, TMenuItemStateNames } from "../MenuItem";
import { isEqual } from "lodash";

const getMenuItemState = (
  menuItem: TMenuItem,
  activeMenuItem: TMenuItem,
  isTitleWithIconState: boolean,
  state: TMenuItemStateNames
): TMenuItemStateNames => {
  const isActiveMenuItem = isEqual(menuItem, activeMenuItem);

  return isTitleWithIconState
    ? isActiveMenuItem
      ? state
      : "hidden"
    : "default";
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

export { getActiveMenuItem, getMenuItemState };
