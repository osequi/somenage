module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
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
  moduleNameMapper: {
    /**
     * Settings for Next.js module path aliases
     * @see https://stackoverflow.com/questions/50171412/jest-typescript-absolute-paths-baseurl-gives-error-cannot-find-module
     */
    "@home/(.*)": "../apps/home/$1",
    "@pages/(.*)": "../pages/$1",
    "@components/(.*)": "../components/$1",
    "@hooks": "../hooks/",
    "@theme": "../theme/",
    /**
     * Settings for excluding assets
     * @see https://jestjs.io/docs/en/webpack.html
     */
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "../../jest.mock.file.js",
    "\\.(css|less)$": "../../jest.mock.css.js",
  },
};
