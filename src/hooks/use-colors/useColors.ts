import { TColorPairNames } from "../../theme";
import { theme } from "../../theme";

const useColors = (name?: TColorPairNames): object | null => {
  if (!name) return null;

  const colors = theme?.colors;
  if (!colors) return null;

  const colorPairs = theme?.colorPairs;
  if (!colorPairs) return null;

  const colorPair = colorPairs.find((item) => item.name === name);
  if (!colorPair) return null;

  const { text, background } = colorPair;
  const textColor = colors.find((item) => item.for === text);
  const backgroundColor = colors.find((item) => item.for === background);

  const textColorValue = textColor?.value;
  const backgroundColorValue = backgroundColor?.value;

  return {
    color: textColorValue ? textColorValue : null,
    backgroundColor: backgroundColorValue ? backgroundColorValue : null,
  };
};

export default useColors;
