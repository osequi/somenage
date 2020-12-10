import { CSSProperties } from "react";
import type { TColorPairNames } from "../";

export type TButtonPresetNames = "default";

const buttonPresetNames = ["default"];

export type TButton = {
  preset?: "default";
  colors?: TColorPairNames[];
  styles?: CSSProperties;
};

const defaultButton: TButton = {
  preset: "default",
};
