import { A11y } from "@home/A11y";

/**
 * Defines the A11y Page type.
 * @category Components
 * @example
 * xxx
 */
export type TA11yPage = {
  title: string;
} & typeof A11yPageDefaultProps;

/**
 * Defines the A11y Page default props.
 * @category Components
 * @example
 * xxx
 */
const A11yPageDefaultProps = {
  title: "A11y",
};

const A11yPage = () => {
  return <A11y />;
};

A11yPage.defaultProps = A11yPageDefaultProps;
export default A11yPage;
