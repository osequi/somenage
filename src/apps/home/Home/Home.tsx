import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "@hooks";

/**
 * Imports other types, components and hooks.
 */
import { Text } from "@components/typography";
import { Section } from "@components/semantic-elements";
import { Grid } from "@components/layout";
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
 * Defines the styles.
 * @ignore
 */
const container = {
  label: "Container",
};

/**
 * Displays the Home.
 * @category Components
 * @component
 * @example
 * return (<Home />)
 */
const Home = (props: THome) => {
  const { containerKlass } = useStyles(container, props);

  const asProps = { title: "Home" };

  return (
    <Grid
      padding={1}
      as={Section}
      asProps={asProps}
      className={cx("Home", containerKlass)}
    >
      <Text variant="default">
        <HomeMdx />
      </Text>
    </Grid>
  );
};

Home.defaultProps = HomeDefaultProps;

export default Home;
export { HomeDefaultProps };
