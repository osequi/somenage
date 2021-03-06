import chroma from "chroma-js";
import { useColorMaxContrast } from ".";

it("Fails back with the wrong args", () => {
  expect(useColorMaxContrast(null)).toBeNull();
});

it("Works", () => {
  expect(useColorMaxContrast({ chroma: chroma("red") })).toStrictEqual([
    { chroma: chroma("black"), name: "Black" },
    5.25,
    true,
    true,
    false,
  ]);
});
