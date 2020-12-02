import React, { ReactNode } from "react";

/**
 * Imports other types, components and hooks.
 */
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
  children?: ReactNode;
} & typeof ContentDefaultProps;

/**
 * Defines the Content default props.
 * @category Components
 * @example
 * Example here...
 */
const ContentDefaultProps = {};

/**
 * Displays the Content.
 * @category Components
 * @component
 * @example
 * return <Content />
 */
const Content = (props: TContent) => {
  const children = props?.children;
  if (!children) return null;

  return <Main className="Content">{children}</Main>;
};

Content.defaultProps = ContentDefaultProps;

export default Content;
export { ContentDefaultProps };
