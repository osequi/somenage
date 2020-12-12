import type { TPreset, TStyle } from "../";
import { colors } from "../colors";

export type TColorPair2 = {
  preset?: TPreset;
  styles?: TStyle[];
};

const defaultColorPair: TColorPair2 = {
  preset: {
    type: "colorPair2",
    name: "default",
  },
  styles: [
    {
      state: "default",
      css: {
        color: colors.find((item) => item.for === "Text").value,
        backgroundColor: colors.find((item) => item.for === "Background").value,
      },
    },
    {
      state: "active",
      css: {
        color: colors.find((item) => item.for === "Background").value,
        backgroundColor: colors.find((item) => item.for === "Text").value,
      },
    },
    {
      state: "visited",
      css: {
        color: colors.find((item) => item.for === "Shade").value,
        backgroundColor: colors.find((item) => item.for === "Background").value,
      },
    },
  ],
};

const colorPairs2: TColorPair2[] = [defaultColorPair];

export default colorPairs2;
