import chroma from "chroma-js";
import { useColorContrast } from ".";

it("Fails back safely with no args ", () => {
  expect(useColorContrast(null, null)).toBeNull();
});

it("Fails back safely with wrong args ", () => {
  expect(
    useColorContrast({ chroma: null }, { chroma: chroma("black") })
  ).toBeNull();
});

it("Works ", () => {
  expect(
    useColorContrast({ chroma: chroma("white") }, { chroma: chroma("black") })
  ).toStrictEqual([21, true, true, true]);
});
