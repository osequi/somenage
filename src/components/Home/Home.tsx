import React from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../hooks";

/**
 * Imports other types, components and hooks.
 */
import { Text } from "../typography";
import { Section } from "../semantic-elements";

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

  return (
    <Section title="Home" className={cx("Home", containerKlass)}>
      <Text variant="default">Somenage</Text>
    </Section>
  );
};

Home.defaultProps = HomeDefaultProps;

export default Home;
export { HomeDefaultProps };
