import type { TBorder } from "./borders";
import { default as borders } from "./borders";

import type { TButton } from "./buttons";
import { default as buttons } from "./buttons";

import type { TLink } from "./links";
import { default as links } from "./links";

export type TDecorations = {
  borders?: TBorder[];
  links?: TLink[];
  buttons?: TButton[];
};

const decorations: TDecorations = {
  borders: borders,
  links: links,
  buttons: buttons,
};

export default decorations;
