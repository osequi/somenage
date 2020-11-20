import React from "react";
import { cx, ClassNamesArg } from "@emotion/css";
import shortid from "shortid";

export type TDrawLines = {
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
      <span key={shortid.generate()} className={cx("Line", line, rhythmLine)} />
    );
  });

  return (
    <div className={cx("Container", container, rhythmContainer)}>{lines}</div>
  );
};

export default drawLines;
