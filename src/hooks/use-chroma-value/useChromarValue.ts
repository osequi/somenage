/**
 * Formats a color value.
 *
 * Chroma returns numbers with many decimals which isn't human friendly.
 * This tool reduces the decimals.
 *
 * @param  number	The number with long decimals.
 * @return 			The number with fewer decimals.
 *
 * @category Hooks
 */
const useChromaValue = (number: number, decimals: number): number => {
  return Number(number.toFixed(decimals));
};

export default useChromaValue;
