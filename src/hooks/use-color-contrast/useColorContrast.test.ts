import chroma from "chroma-js";
import { useColorContrast } from ".";

it("Works ", () => {
  expect(
    useColorContrast({ chroma: chroma("white") }, { chroma: chroma("black") })
  ).toStrictEqual([21, true, true, true]);
});
