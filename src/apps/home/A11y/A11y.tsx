import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */
import { Text } from "@components/typography";
import { Article } from "@components/semantic-elements";
import A11yMdx from "./A11y.mdx";

/**
 * Defines the A11y type.
 * @category Components
 * @example
 * Example here...
 */
export type TA11y = {} & typeof A11yDefaultProps;

/**
 * Defines the A11y default props.
 * @category Components
 * @example
 * Example here...
 */
const A11yDefaultProps = {};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the A11y.
 * @category Components
 * @component
 * @example
 * return <A11y />
 */
const A11y = (props: TA11y) => {
  return (
    <Article className="A11y" title="A11y" displayTitle={false}>
      <Text variant="default">
        <A11yMdx />
      </Text>
    </Article>
  );
};

A11y.defaultProps = A11yDefaultProps;

export default A11y;
export { A11yDefaultProps };
