import type { TBorder, TBorderPresetNames } from "./borders";
import { default as borders } from "./borders";

import type { TPatternify, TPatternifyPresetNames } from "./patternify";
import { default as patternify } from "./patternify";

export type TDecorationPresetNames = TBorderPresetNames &
  TPatternifyPresetNames;

export type TDecorations = {
  borders?: TBorder[];
  patternify: TPatternify[];
};

const decorations: TDecorations = {
  borders: borders,
  patternify: patternify,
};

export default decorations;
