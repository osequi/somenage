import React from "react";
import { cx, ClassNamesArg } from "@emotion/css";
import { useId } from "react-aria";

export type TDrawLines = {
  type: string;
  display: boolean;
  numberOfLines: number;
  container: ClassNamesArg;
  line: ClassNamesArg;
  rhythmContainer: ClassNamesArg;
  rhythmLine: ClassNamesArg;
} & typeof defaultProps;

const defaultProps = {};

/**
 * A helper to draw a set of lines.
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
    return <span key={useId()} className={cx("Line", line, rhythmLine)} />;
  });

  return (
    <div
      className={cx("GridLinesContainer", container, rhythmContainer)}
      data-testid={`GridLinesContainer-${type}`}
    >
      {lines}
    </div>
  );
};

export default drawLines;
