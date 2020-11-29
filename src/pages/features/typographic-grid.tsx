import { TypographicGrid } from "@home/TypographicGrid";

/**
 * Defines the TypographicGrid Page type.
 * @category Components
 * @example
 * xxx
 */
export type TTypographicGridPage = {
  title: string;
} & typeof TypographicGridPageDefaultProps;

/**
 * Defines the TypographicGrid Page default props.
 * @category Components
 * @example
 * xxx
 */
const TypographicGridPageDefaultProps = {
  title: "Typographic Grid",
};

const TypographicGridPage = () => {
  return <TypographicGrid />;
};

TypographicGridPage.defaultProps = TypographicGridPageDefaultProps;
export default TypographicGridPage;
