import { theme } from "@theme";

/**
 * // NOTE: Experimental
 * Tries to achieve something like `useDecoration('link', 'default')` and `useDecoration('borders', 'heavy')`
 * However link styling is so complex it needs a special hook `useLinkStyle` to put together the styles.
 * For simple styling it works for now.
 */
const useDecoration = (type?: string, preset?: string) => {
  if (!type || !preset) return null;

  const decorations = theme?.decorations;
  if (!decorations) return null;

  const decorations2 = decorations[type];
  if (!decorations2) return null;

  const decoration =
    decorations2 && decorations2.find((item) => item.preset === preset);
  if (!decoration) return null;

  const { preset: preset2, ...rest } = decoration;

  return { ...rest };
};

export default useDecoration;
