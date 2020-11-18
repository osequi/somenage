/**
 * Formats a color value.
 *
 * Chroma returns numbers with many decimals which isn't human friendly.
 * This tool reduces the decimals.
 *
 * @param	number		The number with long decimals.
 * @param	decimals	How many decimals to return.
 * @return 				The number with fewer decimals.
 * @category Hooks
 * @example
 * useChromaValue(1.123456789, 2) => 1.12
 */
const useChromaValue = (number: number, decimals: number): number => {
  return Number(number.toFixed(decimals));
};

export default useChromaValue;
