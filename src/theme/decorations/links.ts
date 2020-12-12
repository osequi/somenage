import type { TPreset, TStyle } from "../";

export type TLink = {
  preset?: TPreset;
  styles?: TStyle[];
};

/**
 * Defines the default link style.
 */
const defaultLink: TLink = {
  preset: {
    type: "link",
    name: "default",
  },
  styles: [
    {
      state: "default",
      presets: [
        {
          type: "colorPair",
          name: "default",
        },
      ],
      css: {
        textDecoration: "underline",
      },
    },
    {
      state: "active",
      presets: [
        {
          type: "colorPair",
          name: "inverted",
        },
      ],
      css: {
        textDecoration: "line-through",
      },
    },
    {
      state: "visited",
      presets: [
        {
          type: "colorPair",
          name: "default",
        },
      ],
      css: {
        textDecorationColor: "red",
      },
    },
    {
      state: "hidden",
      css: {
        display: "none",
      },
    },
  ],
};

/**
 * Defines the available link styles.
 */
const links: TLink[] = [defaultLink];

export default links;
