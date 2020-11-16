/**
 * Defines the linear scale type.
 *
 * The various scale types share the same structure, like `name` and `settings`.
 * This way they are pluggable into the theme.
 * @category Theme
 */
export type TLinearScale = {
  /**
   * The name of the scale. It's always `linear`.
   */
  name: string;
  /**
   * The settings for the scale. For linear scale there are no settings for now.
   */
  settings: object;
};

/**
 * Defines the linear scale.
 *
 * On linear scale values scale with 1 unit. See `useLinearScale`.
 *
 * @category Theme
 * @example
 * name: "linear",
 * settings: {},
 */
const linearScale = {
  name: "linear",
  settings: {},
};

export default linearScale;
