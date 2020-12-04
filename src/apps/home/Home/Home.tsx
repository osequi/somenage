import React from "react";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */
import { Text } from "@components/typography";
import { Article } from "@components/semantic-elements";
import HomeMdx from "./Home.mdx";

/**
 * Defines the Home type.
 * @category Components
 * @example
 * xxx
 */
export type THome = {} & typeof HomeDefaultProps;

/**
 * Defines the Home default props.
 * @category Components
 * @example
 * xxx
 */
const HomeDefaultProps = {};

/**
 * Displays the Home.
 * @category Components
 * @component
 * @example
 * return (<Home />)
 */
const Home = (props: THome) => {
  return (
    <Article className="Home" title="Home" displayTitle={false}>
      <Text variant="default">
        <HomeMdx />
      </Text>
    </Article>
  );
};

Home.defaultProps = HomeDefaultProps;

export default Home;
export { HomeDefaultProps };
