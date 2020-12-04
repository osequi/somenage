import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TMenu } from "./Menu";

/**
 * Displays the `title with icon` menu.
 *
 * Usually it would be a single text with a menu icon.
 * However, when the icon is clicked the animation will reveal the whole menu.
 * For that animation a single text with icon is not enough. The whole menu should be displayed with the inactive items hidden.
 */
const MenuStateTitleWithIcon = (props: TMenu) => {
  return <>Title with icon Menu</>;
};

export default MenuStateTitleWithIcon;
