import chroma from "chroma-js";
import { useChroma } from ".";

it("Works with the Temperature namespace", () => {
  expect(
    useChroma({ value: "2000", spaceName: "Temperature", chroma: null })
  ).toStrictEqual(chroma.temperature(2000));
});

it("Works with the Number namespace", () => {
  expect(
    useChroma({ value: "0", spaceName: "Number", chroma: null })
  ).toStrictEqual(chroma("black"));
});

it("Works with the Hexadecimal namespace", () => {
  expect(
    useChroma({ value: "#fff", spaceName: "Hexadecimal", chroma: null })
  ).toStrictEqual(chroma("white"));
});

it("Works with the Name namespace", () => {
  expect(
    useChroma({ value: "white", spaceName: "Name", chroma: null })
  ).toStrictEqual(chroma("white"));
});
