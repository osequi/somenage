import React, { ReactNode } from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Main } from "@components/semantic-elements";

/**
 * Defines the Content type.
 * @category Components
 * @example
 * Example here...
 */
export type TContent = {
  /**
   * The content to be rendered.
   */
  children: ReactNode;
} & typeof ContentDefaultProps;

/**
 * Defines the Content default props.
 * @category Components
 * @example
 * Example here...
 */
const ContentDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Content.
 * @category Components
 * @component
 * @example
 * return <Content />
 */
const Content = (props: TContent) => {
  const { children } = props;
  if (!children) return null;

  const { containerKlass } = useStyles(container, props);

  return (
    <Main className={cx("Content", containerKlass)}>Content: {children}</Main>
  );
};

Content.defaultProps = ContentDefaultProps;

export default Content;
export { ContentDefaultProps };
