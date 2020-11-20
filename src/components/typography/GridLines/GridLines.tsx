import React, { ReactNode } from "react";
import { cx } from "@emotion/css";
import { useStyles } from "../../../hooks";

/**
 * Imports business logic.
 */
import drawLines from "./GridLines.logic";

/**
 * Defines the grid lines type.
 */
export type TGridLines = {
  /**
   * Display horizontal lines?
   */
  displayHorizontalRhytm?: boolean;
  /**
   * Display vertica lines?
   */
  displayVerticalRhytm?: boolean;
  /**
   * Number of horizontal lines on the grid
   */
  numberOfHorizontalLines?: number;
  /**
   * Number of vertical lines on the grid
   */
  numberOfVerticalLines?: number;
  /**
   * The color of the grid line
   */
  lineColor?: string;
  /**
   * The content to be displayed.
   */
  children?: ReactNode;
} & typeof gridLines;

/**
 * Defines the default props.
 */
const gridLines = {
  displayVerticalRhytm: true,
  displayHorizontalRhytm: true,
  numberOfVerticalLines: 100,
  numberOfHorizontalLines: 100,
  lineColor: "lightgray",
  children: null,
};

/**
 * Defines the styles.
 */
const container: object = {
  label: "container",
  background: "red",
};

const rhythmContainer: object = {
  label: "rhythmContainer",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
};

const verticalRhythmContainer = (props: {
  displayVerticalRhytm: boolean;
}): object => {
  return {
    display: props.displayVerticalRhytm ? "flex" : "none",
    flexWrap: "wrap",
  };
};

const horizontalRhythmContainer = (props: {
  displayHorizontalRhytm: boolean;
}): object => {
  return {
    display: props.displayHorizontalRhytm ? "block" : "none",
  };
};

const rhythmLine = (props: { lineColor: string }): object => {
  return {
    display: "block",
    boxSizing: "border-box",
    borderColor: props.lineColor ? props.lineColor : "transparent",
    borderWidth: 1,
  };
};

const verticalRhythmLine: object = {
  label: "verticalRhythmLine",
  width: "var(--lem)",
  height: "100%",
  borderRightStyle: "solid",
};

const horizontalRhythmLine: object = {
  label: "horizontalRhythmLine",
  width: "100%",
  height: "var(--lem)",
  borderBottomStyle: "solid",
};

/**
 * Displays the typographic grid lines.
 * @category Components
 * @component
 */
const GridLines = (props: TGridLines) => {
  const {
    displayVerticalRhytm,
    displayHorizontalRhytm,
    numberOfHorizontalLines,
    numberOfVerticalLines,
    children,
  } = props;

  const {
    verticalRhythmContainerKlass,
    horizontalRhythmContainerKlass,
    verticalRhythmLineKlass,
    horizontalRhythmLineKlass,
    rhythmContainerKlass,
    rhythmLineKlass,
    containerKlass,
  } = useStyles(
    [
      verticalRhythmContainer,
      horizontalRhythmContainer,
      verticalRhythmLine,
      horizontalRhythmLine,
      rhythmContainer,
      rhythmLine,
      container,
    ],
    props
  );

  const horizontalLines = drawLines({
    display: displayHorizontalRhytm,
    numberOfLines: numberOfHorizontalLines,
    container: horizontalRhythmContainerKlass,
    line: horizontalRhythmLineKlass,
    rhythmContainer: rhythmContainerKlass,
    rhythmLine: rhythmLineKlass,
  });

  const verticalLines = drawLines({
    display: displayVerticalRhytm,
    numberOfLines: numberOfVerticalLines,
    container: verticalRhythmContainerKlass,
    line: verticalRhythmLineKlass,
    rhythmContainer: rhythmContainerKlass,
    rhythmLine: rhythmLineKlass,
  });

  return (
    <div className={cx("GridLines", containerKlass)}>
      {displayHorizontalRhytm && horizontalLines}
      {displayVerticalRhytm && verticalLines}
      {children}
    </div>
  );
};

GridLines.defaultProps = gridLines;

export default GridLines;
