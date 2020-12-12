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
          type: "colorPair2",
          name: "default",
          state: "default",
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
          type: "colorPair2",
          name: "default",
          state: "active",
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
          type: "colorPair2",
          name: "default",
          state: "visited",
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
