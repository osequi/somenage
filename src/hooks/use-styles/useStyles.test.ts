import { useStyles } from ".";

/**
 * NOTE: This hook can't be really tested.
 * Hooks use the 'node' test environment.
 * We should have a 'jsdom' environment to be able to render the styles.
 * @ignore
 */

const style2 = {
  backgroundColor: "blue",
};

const style3 = {
  label: "style3",
  backgroundColor: "red",
};

it("Works with a simple argument", () => {
  expect(useStyles(style2)).not.toBeNull();
});

it("Works with a single element array argument", () => {
  expect(useStyles([style2])).not.toBeNull();
});

it("Returns multiple results", () => {
  expect(useStyles([style2, style3], {})).toHaveLength(2);
});

it("It works fine when a style object with a `label` is passed.", () => {
  expect(useStyles([style3])).not.toBeNull();
});

it("Falls back silently on a style object without `label`.", () => {
  expect(useStyles([style2])).not.toBeNull();
});

it("Falls back silently when there are not enough arguments", () => {
  expect(useStyles()).not.toBeNull();
});
