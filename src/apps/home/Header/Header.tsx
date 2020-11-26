import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import {
  Header as SemanticHeader,
  SemanticHeading,
} from "@components/semantic-elements";
import { Link } from "@components/Link";

/**
 * Defines the Header type.
 * @category Components
 * @example
 * Example here...
 */
export type THeader = {
  siteTitle?: string;
  url?: string;
} & typeof HeaderDefaultProps;

/**
 * Defines the Header default props.
 * @category Components
 * @example
 * Example here...
 */
const HeaderDefaultProps = {
  siteTitle: "Somenage",
  url: "/",
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
  const { siteTitle, url } = props;
  if (!siteTitle) return null;

  const { containerKlass } = useStyles(container, props);

  const title = (
    <Link href={url} title={siteTitle}>
      {siteTitle}
    </Link>
  );

  return (
    <SemanticHeader
      title={title}
      heading={true}
      className={cx("Header", containerKlass)}
    ></SemanticHeader>
  );
};

Header.defaultProps = HeaderDefaultProps;

export default Header;
export { HeaderDefaultProps };