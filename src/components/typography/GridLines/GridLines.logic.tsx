import React from "react";
import { cx, ClassNamesArg } from "@emotion/css";
import { useId } from "react-aria";

/**
 * Imports other types, components and hooks
 */
import { Section } from "../../semantic-elements";

/**
 * Defines the draw lines type.
 * @ignore
 */
export type TDrawLines = {
  type: string;
  display: boolean;
  numberOfLines: number;
  container: ClassNamesArg;
  line: ClassNamesArg;
  rhythmContainer: ClassNamesArg;
  rhythmLine: ClassNamesArg;
} & typeof defaultProps;

/**
 * Defines the default props
 * @ignore
 */
const defaultProps = {};

/**
 * A helper to draw a set of lines.
 * @ignore
 */
const drawLines = (props: TDrawLines) => {
  const {
    type,
    display,
    numberOfLines,
    container,
    line,
    rhythmContainer,
    rhythmLine,
  } = props;

  if (!display) return null;

  const lines = Array.from(Array(numberOfLines).keys()).map(() => {
    return (
      <span
        key={useId()}
        className={cx("GridLine", line, rhythmLine)}
        data-testid={`GridLine-${type}`}
      />
    );
  });

  return (
    <Section
      title={`GridLinesContainer-${type}`}
      testId={`GridLinesContainer-${type}`}
      className={cx("GridLinesContainer", container, rhythmContainer)}
    >
      {lines}
    </Section>
  );
};

export default drawLines;
