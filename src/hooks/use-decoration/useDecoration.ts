import type { TDecorationPresetNames } from "../../theme/";
import { theme } from "../../theme/";

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
