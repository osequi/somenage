/**
 * Defines the modular scale type.
 *
 * It's a typographic scale preset. See `TTypographicScale`.
 * @category Theme
 */
export type TModularScale = {
  /**
   * The name of the scale. It's always `modular`.
   */
  name: string;
  /**
   * The settings for the scale. It comes from [modularscale-js](https://github.com/modularscale/modularscale-js).
   */
  settings: {
    /**
     * The base(s) of the scale(s).
     * A base defines the value of the 0th element on the scale. For example `base=1` makes the 0th element size `1em`.
     * `modularscale-js` supports multiple bases.
     */
    base: number[];
    /**
     * The logic of scaling. See [Ratios](https://github.com/modularscale/modularscale-js#ratios).
     */
    ratio: number;
  };
};

/**
 * Defines the modular scale.
 *
 * On modular scale values scale according to a specific logic defined in the settings. See [Modular Scale](https://www.modularscale.com/).
 *
 * @category Theme
 * @example
 * name: 'modular',
 * settings: {base:[1], ratio: 1.33}
 * @see https://github.com/modularscale/modularscale-js
 */
const modularScale: TModularScale = {
  name: "modular",
  settings: {
    base: [1],
    ratio: 1.25,
  },
};

export default modularScale;
