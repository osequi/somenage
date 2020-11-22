module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    /**
     * A Next.js workaround
     * See https://github.com/vercel/next.js/issues/8663
     */
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
  projects: [
    /**
     * Configuring different test environments.
     * For React components: 'jsdom'
     * For hooks, theme: node
     * @see https://stackoverflow.com/questions/41318115/testing-two-environments-with-jest
     */
    "<rootDir>/src/components",
    "<rootDir>/src/hooks",
    "<rootDir>/src/theme",
  ],
  moduleNameMapper: {
    /**
     * Skipping non-testable files.
     * @see https://jestjs.io/docs/en/webpack#handling-static-assets
     */
    //"\\.(css|less)$": "<rootDir>/config/jest/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/jest/__mocks__/fileMock.js",
  },
  transform: {
    "\\.(css|less|scss|sass)$": "jest-transform-css",
  },
};
