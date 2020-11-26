import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */

/**
 * Defines the Footer type.
 * @category Components
 * @example
 * Example here...
 */
export type TFooter = {} & typeof FooterDefaultProps;

/**
 * Defines the Footer default props.
 * @category Components
 * @example
 * Example here...
 */
const FooterDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Footer.
 * @category Components
 * @component
 * @example
 * return <Footer />
 */
const Footer = (props: TFooter) => {
  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Footer", containerKlass)}>Footer</div>;
};

Footer.defaultProps = FooterDefaultProps;

export default Footer;
export { FooterDefaultProps };
