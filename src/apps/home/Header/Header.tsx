import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Header as SemanticHeader } from "@components/semantic-elements";
import { Link } from "@components/Link";

/**
 * Defines the Header type.
 * @category Components
 * @example
 * Example here...
 */
export type THeader = {
  title?: string;
  url?: string;
} & typeof HeaderDefaultProps;

/**
 * Defines the Header default props.
 * @category Components
 * @example
 * Example here...
 */
const HeaderDefaultProps = {
  title: "Somenage",
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
  const { title, url } = props;
  if (!title) return null;

  const { containerKlass } = useStyles(container, props);

  return (
    <SemanticHeader className={cx("Header", containerKlass)}>
      <Link href={url} title={title}>
        {title}
      </Link>
    </SemanticHeader>
  );
};

Header.defaultProps = HeaderDefaultProps;

export default Header;
export { HeaderDefaultProps };
