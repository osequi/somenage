import { SemanticHtml5 } from "@home/SemanticHtml5";

/**
 * Defines the SemanticHTML5 Page type.
 * @category Components
 * @example
 * xxx
 */
export type TSemanticHTML5Page = {
  title: string;
} & typeof SemanticHTML5PageDefaultProps;

/**
 * Defines the SemanticHTML5 Page default props.
 * @category Components
 * @example
 * xxx
 */
const SemanticHTML5PageDefaultProps = {
  title: "Semantic HTML5",
};

const SemanticHtml5Page = () => {
  return <SemanticHtml5 />;
};

SemanticHtml5Page.defaultProps = SemanticHTML5PageDefaultProps;
export default SemanticHtml5Page;
