import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Header as SemanticHeader } from "@components/semantic-elements";
import { Link } from "@components/decorations";

/**
 * Defines the Header type.
 * @category Components
 * @example
 * Example here...
 */
export type THeader = {
  siteTitle?: string;
  siteUrl?: string;
} & typeof HeaderDefaultProps;

/**
 * Defines the Header default props.
 * @category Components
 * @example
 * Example here...
 */
const HeaderDefaultProps = {
  siteTitle: "Somenage",
  siteUrl: "/",
};

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
  const { siteTitle, siteUrl } = props;
  if (!siteTitle) return null;

  const { containerKlass } = useStyles(container, props);

  const title = (
    <Link href={siteUrl} title={siteTitle}>
      {siteTitle}
    </Link>
  );

  return (
    <SemanticHeader
      heading={{ level: 1, children: title }}
      className={cx("Header", containerKlass)}
    />
  );
};

Header.defaultProps = HeaderDefaultProps;

export default Header;
export { HeaderDefaultProps };
