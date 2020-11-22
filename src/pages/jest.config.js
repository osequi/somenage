module.exports = {
  preset: "ts-jest",
  /**
   * A fix ...
   * @see https://github.com/nrwl/nx/issues/3776
   */
  testEnvironment: "jest-environment-jsdom-fifteen",
  globals: {
    // A Next.js workaround
    // See https://github.com/vercel/next.js/issues/8663
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};
