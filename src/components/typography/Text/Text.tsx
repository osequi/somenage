import { FC, ComponentClass, HTMLProps, createElement } from "react";
import { cx } from "emotion";
import { startCase } from "lodash";

/**
 * Imports other components ans hooks.
 */
import {
  useStyles,
  useFont,
  useMaxWidth,
  useScale,
  useSpacing,
  useHeadings,
} from "../../../hooks";

/**
 * Defines the text types.
 */
export type TTextVariants = "default" | "body" | "longform" | "title";

/**
 * Defines the prop types.
 */
export type TText = {
  variant: TTextVariants;
  as?: FC | ComponentClass | string;
  children?: any | any[];
};

/**
 * Defines the default props.
 */
const defaultProps: TText = {
  variant: "default",
  as: "div",
  children: null,
};

/**
 * Defines the styles.
 */
const defaultText = (props: {
  nimbusRegular: object;
  defaultScale: object;
  sameSizeHeadings: object;
}): object => ({
  ...props.nimbusRegular,
  ...props.defaultScale,
  ...props.sameSizeHeadings,
});

const bodyText = (props: {
  nimbusRegular: object;
  defaultScale: object;
  maxWidth: object;
  adjacentSpacing: object;
  differentSizeHeadings: object;
}): object => ({
  ...props.nimbusRegular,
  ...props.defaultScale,
  ...props.maxWidth,
  ...props.adjacentSpacing,
  ...props.differentSizeHeadings,
});

/**
 * Displays content inside a Text container.
 */
const Text = (props: TText) => {
  const { variant, as, children } = props;

  /**
   * Prepares data.
   */
  const nimbusRegular = useFont("Nimbus Sans Regular");
  const defaultScale = useScale({ value: 1, preset: "linear" });
  const maxWidth = useMaxWidth();
  const adjacentSpacing = useSpacing("Adjacent siblings margin top");
  const [sameSizeHeadings, differentSizeHeadings] = useHeadings([
    {
      preset: "sameSize",
      settings: {
        font: "Nimbus Sans Medium",
        lineHeight: 1,
        scale: 3,
      },
    },
    {
      preset: "differentSizes",
      settings: {
        font: "Nimbus Sans Medium",
        lineHeight: 1,
        scales: [3],
      },
    },
  ]);

  /**
   * Loads styles.
   */
  const [defaultTextKlass, bodyTextKlass] = useStyles([defaultText, bodyText], {
    nimbusRegular: nimbusRegular,
    defaultScale: defaultScale,
    maxWidth: maxWidth,
    adjacentSpacing: adjacentSpacing,
    sameSizeHeadings: sameSizeHeadings,
    differentSizeHeadings: differentSizeHeadings,
  });

  /**
   * Matches styles with the variants.
   */
  let klass = null;
  switch (variant) {
    case "default":
      klass = defaultTextKlass;
    case "body":
      klass = bodyTextKlass;
  }

  /**
   * Prepares the props for the new element.
   */
  const props2: HTMLProps<any> = {
    className: cx(klass, `Text${startCase(variant)}`),
  };

  return createElement(as, props2, children);
};

Text.defaultProps = defaultProps;

export default Text;
