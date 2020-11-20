import React from "react";
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
   * The number of horizontal lines on the grid.
   */
  numberOfHorizontalLines?: number;
  /**
   * The number of vertical lines on the grid.
   */
  numberOfVerticalLines?: number;
  /**
   * The color of the grid line. It can be transparent because the web inspector is able to colorize the lines since they are flexbox items.
   */
  lineColor?: string;
} & typeof gridLines;

/**
 * Defines the default props.
 */
const gridLines = {
  displayVerticalRhytm: true,
  displayHorizontalRhytm: true,
  numberOfVerticalLines: 200,
  numberOfHorizontalLines: 100,
  lineColor: "lightgray",
};

/**
 * Defines the styles.
 */
const rhythmContainer = {
  label: "rhythmContainer",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
};

const verticalRhythmContainer = (props: { displayVerticalRhytm: boolean }) => {
  return {
    display: props.displayVerticalRhytm ? "flex" : "none",
    flexWrap: "wrap",
    height: "100%",
  };
};

const horizontalRhythmContainer = (props: {
  displayHorizontalRhytm: boolean;
}) => {
  return {
    display: props.displayHorizontalRhytm ? "flex" : "none",
    flexDirection: "column",
    width: "100%",
  };
};

const rhythmLine = (props: { lineColor: string }) => {
  return {
    display: "block",
    boxSizing: "border-box",
    borderColor: props.lineColor ? props.lineColor : "transparent",
    borderWidth: 1,
  };
};

const verticalRhythmLine = {
  label: "verticalRhythmLine",
  width: "var(--lem)",
  height: "100%",
  borderRightStyle: "solid",
};

const horizontalRhythmLine = {
  label: "horizontalRhythmLine",
  width: "100%",
  height: "var(--lem)",
  borderBottomStyle: "solid",
};

/**
 * Displays the typographic grid lines.
 * @category Components
 * @component
 * @example
 * return (<GridLines displayVerticalRhytm={true} displayHorizontalRhytm={true} numberOfHorizontalLines={10} numberOfVerticalLines={10}/>)
 */
const GridLines = (props: TGridLines) => {
  const {
    displayVerticalRhytm,
    displayHorizontalRhytm,
    numberOfHorizontalLines,
    numberOfVerticalLines,
  } = props;

  const [
    verticalRhythmContainerKlass,
    horizontalRhythmContainerKlass,
    verticalRhythmLineKlass,
    horizontalRhythmLineKlass,
    rhythmContainerKlass,
    rhythmLineKlass,
  ] = useStyles(
    [
      verticalRhythmContainer,
      horizontalRhythmContainer,
      verticalRhythmLine,
      horizontalRhythmLine,
      rhythmContainer,
      rhythmLine,
    ],
    props
  );

  const horizontalLines = drawLines({
    type: "horizontal",
    display: displayHorizontalRhytm,
    numberOfLines: numberOfHorizontalLines,
    container: horizontalRhythmContainerKlass,
    line: horizontalRhythmLineKlass,
    rhythmContainer: rhythmContainerKlass,
    rhythmLine: rhythmLineKlass,
  });

  const verticalLines = drawLines({
    type: "vertical",
    display: displayVerticalRhytm,
    numberOfLines: numberOfVerticalLines,
    container: verticalRhythmContainerKlass,
    line: verticalRhythmLineKlass,
    rhythmContainer: rhythmContainerKlass,
    rhythmLine: rhythmLineKlass,
  });

  return (
    <>
      {displayHorizontalRhytm && horizontalLines}
      {displayVerticalRhytm && verticalLines}
    </>
  );
};

GridLines.defaultProps = gridLines;

export default GridLines;
