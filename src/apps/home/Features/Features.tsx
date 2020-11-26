import React from "react";
import { cx } from "@emotion/css";

/**
 * Imports other types, components and hooks.
 */
import { useStyles } from "@hooks";
import { Link } from "@components/Link";

/**
 * Defines the Features type.
 * @category Components
 * @example
 * Example here...
 */
export type TFeatures = {} & typeof FeaturesDefaultProps;

/**
 * Defines the Features default props.
 * @category Components
 * @example
 * Example here...
 */
const FeaturesDefaultProps = {};

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

  return (
    <div className={cx("Features", containerKlass)}>
      Features
      <Link href="features/semantic-html5" title="Semantic HTML5">
        Semantic HTML5
      </Link>
    </div>
  );
};

Features.defaultProps = FeaturesDefaultProps;

export default Features;
export { FeaturesDefaultProps };
