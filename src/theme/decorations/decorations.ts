import type { TBorder, TBorderPresetNames } from "./borders";
import { default as borders } from "./borders";

import type { TPatternify, TPatternifyPresetNames } from "./patternify";
import { default as patternify } from "./patternify";

import type { TLinkStyle } from "./link";
import { default as linkStyles } from "./link";

/**
 * // NOTE: Experimental
 * Tries to achieve something like `useDecoration('link', 'default')` and `useDecoration('borders', 'heavy')`
 * However link styling is so complex it needs a special hook `useLinkStyle` to put together the styles.
 * For simple styling it works for now.
 */
export type TDecoration = {
  type?: "borders" | "patternify";
  preset?: TBorderPresetNames & TPatternifyPresetNames;
};

export type TDecorations = {
  borders?: TBorder[];
  patternify?: TPatternify[];
  links?: TLinkStyle[];
};

const decorations: TDecorations = {
  borders: borders,
  patternify: patternify,
  links: linkStyles,
};

export default decorations;
