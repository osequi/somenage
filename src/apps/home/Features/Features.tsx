import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import type { TMenuItem } from "../MenuItem";

/**
 * Defines the Features type.
 * @category Components
 * @example
 * Example here...
 */
export type TFeatures = {
  menuItems: TMenuItem[];
} & typeof FeaturesDefaultProps;

/**
 * Defines the Features default props.
 * @category Components
 * @example
 * Example here...
 */
const FeaturesDefaultProps = {
  menuItems: [{ title: "Semantic HTML5", url: "features/semantic-html5" }],
};

/**
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Features.
 * @category Components
 * @component
 * @example
 * return <Features />
 */
const Features = (props: TFeatures) => {
  const { containerKlass } = useStyles(container, props);

  return <div className={cx("Features", containerKlass)}>Features</div>;
};

Features.defaultProps = FeaturesDefaultProps;

export default Features;
export { FeaturesDefaultProps };
