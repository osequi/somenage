import type { TPreset, TStyle } from "../";

export type TButton = {
  preset?: TPreset;
  styles?: TStyle[];
};

const defaultButton: TButton = {
  preset: {
    type: "button",
    name: "default",
  },
  styles: [
    {
      state: "default",
      presets: [
        {
          type: "border",
          name: "default",
        },
      ],
    },
  ],
};

const buttons: TButton[] = [defaultButton];

export default buttons;
