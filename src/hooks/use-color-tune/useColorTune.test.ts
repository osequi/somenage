import chroma from "chroma-js";
import { useColorTune } from ".";

it("Fails back silently when the args are wrong", () => {
  expect(useColorTune(null, { chroma: chroma("white") })).toBe(null);
});

it("Fails back silently if the recursion is not successful", () => {
  expect(
    useColorTune({ chroma: chroma("red") }, { chroma: chroma("white") })
  ).toBe(null);
});

it("Works", () => {
  expect(
    useColorTune({ chroma: chroma("red") }, { chroma: chroma("black") })
  ).toStrictEqual(chroma([255, 94, 94, 1]));
});
