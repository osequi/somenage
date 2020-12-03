import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@lib";
import { Link } from "@components/Link";
import { Footer as SemanticFooter } from "@components/semantic-elements";

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

  const asProps = { title: "Footer" };

  return (
    <SemanticFooter className={cx("Footer", containerKlass)}>
      <Link type="external" href="https://osequi.com" title="Os Equi">
        Os Equi
      </Link>
    </SemanticFooter>
  );
};

Footer.defaultProps = FooterDefaultProps;

export default Footer;
export { FooterDefaultProps };
