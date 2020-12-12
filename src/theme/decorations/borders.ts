import type { TPreset, TStyle } from "../";

export type TBorder = {
  preset?: TPreset;
  styles?: TStyle[];
};

const defaultBorder: TBorder = {
  preset: {
    type: "border",
    name: "default",
  },
  styles: [
    {
      state: "default",
      css: {
        borderStyle: "solid",
        borderWidth: "1px",
      },
    },
  ],
};

const borders: TBorder[] = [defaultBorder];

export default borders;
