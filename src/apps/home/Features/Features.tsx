import React from "react";

/**
 * Imports other types, components and hooks.
 */
import type { TMenuItemGroup } from "../Menu";
import { Text } from "@components/typography";
import { Article } from "@components/semantic-elements";
import FeaturesMdx from "./Features.mdx";

/**
 * Defines the Features type.
 * @category Components
 * @example
 * Example here...
 */
export type TFeatures = {
  menu: TMenuItemGroup;
} & typeof FeaturesDefaultProps;

/**
 * Defines the Features default props.
 * @category Components
 * @example
 * Example here...
 */
const FeaturesDefaultProps = {
  menuGroup: {
    menuTitle: {
      title: "Features",
      url: "/features",
    },
    menuItems: [
      { title: "Semantic HTML5", url: "/features/semantic-html5" },
      { title: "Typographic Grid", url: "/features/typographic-grid" },
    ],
  },
};

/**
 * Displays the Features.
 * @category Components
 * @component
 * @example
 * return <Features />
 */
const Features = (props: TFeatures) => {
  return (
    <Article className="Features" title="Features" displayTitle={false}>
      <Text variant="default">
        <FeaturesMdx />
      </Text>
    </Article>
  );
};

Features.defaultProps = FeaturesDefaultProps;

export default Features;
export { FeaturesDefaultProps };
