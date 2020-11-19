import { useStyles } from ".";

const style2 = {
  backgroundColor: "red",
};

const style3 = {
  label: "style3",
  backgroundColor: "red",
};

it("Works with a simple argument", () => {
  expect(useStyles(style2)).not.toBeNull();
});

it("Works with an array argument", () => {
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
