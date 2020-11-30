import type { TBorder } from "./borders";
import { default as borders } from "./borders";

export type TDecorations = {
  borders?: TBorder[];
};

const decorations: TDecorations = {
  borders: borders,
};

export default decorations;
