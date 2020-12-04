import React from "react";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */
import { Text } from "@components/typography";
import { Article } from "@components/semantic-elements";
import SemanticHtml5Mdx from "./SemanticHtml5.mdx";

/**
 * Defines the SemanticHtml5 type.
 * @category Components
 * @example
 * Example here...
 */
export type TSemanticHtml5 = {} & typeof SemanticHtml5DefaultProps;

/**
 * Defines the SemanticHtml5 default props.
 * @category Components
 * @example
 * Example here...
 */
const SemanticHtml5DefaultProps = {};

/**
 * Displays the SemanticHtml5.
 * @category Components
 * @component
 * @example
 * return <SemanticHtml5 />
 */
const SemanticHtml5 = (props: TSemanticHtml5) => {
  return (
    <Article
      className="Semantic HTML5"
      title="Semantic HTML5"
      displayTitle={false}
    >
      <Text variant="default">
        <SemanticHtml5Mdx />
      </Text>
    </Article>
  );
};

SemanticHtml5.defaultProps = SemanticHtml5DefaultProps;

export default SemanticHtml5;
export { SemanticHtml5DefaultProps };
