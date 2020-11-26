import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Header type.
 * @category Components
 * @example
 * Example here...
 */
export type THeader = {} & typeof HeaderDefaultProps;

/**
 * Defines the Header default props.
 * @category Components
 * @example
 * Example here...
 */
const HeaderDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Header.
 * @category Components
 * @component
 * @example
 * return <Header />
 */
const Header = (props: THeader) => {
  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Header", containerKlass)}>Header</div>;
};

Header.defaultProps = HeaderDefaultProps;

export default Header;
export { HeaderDefaultProps };
