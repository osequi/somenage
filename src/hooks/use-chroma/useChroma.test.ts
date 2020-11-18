import chroma from "chroma-js";
import { useChroma } from ".";

it("Works with the GL namespace", () => {
  expect(
    useChroma({ value: "0.6, 0, 0.8, 0.5", spaceName: "GL", chroma: null })
  ).toStrictEqual(chroma(0.6, 0, 0.8, 0.5, "gl"));
});

it("Works with the CMYK namespace", () => {
  expect(
    useChroma({ value: "0.2, 0.8, 0, 0", spaceName: "CMYK", chroma: null })
  ).toStrictEqual(chroma(0.2, 0.8, 0, 0, "cmyk"));
});

it("Works with the HCL namespace", () => {
  expect(
    useChroma({ value: "130, 40, 80", spaceName: "HCL", chroma: null })
  ).toStrictEqual(chroma(130, 40, 80, "hcl"));
});

it("Works with the LCH namespace", () => {
  expect(
    useChroma({ value: "74.94, 23.93, 78.95", spaceName: "LCH", chroma: null })
  ).toStrictEqual(chroma(74.94, 23.93, 78.95, "lch"));
});

it("Works with the Lab namespace", () => {
  expect(
    useChroma({ value: "74.94, 23.93, 78.95", spaceName: "Lab", chroma: null })
  ).toStrictEqual(chroma(74.94, 23.93, 78.95, "lab"));
});

it("Works with the HSV namespace", () => {
  expect(
    useChroma({ value: "10, 0, 0", spaceName: "HSV", chroma: null })
  ).toStrictEqual(chroma(10, 0, 0, "hsv"));
});

it("Works with the HSL namespace", () => {
  expect(
    useChroma({ value: "10, 0, 0", spaceName: "HSL", chroma: null })
  ).toStrictEqual(chroma(10, 0, 0, "hsl"));
});

// This works differently than any other entry....
it("Works with the RGB namespace", () => {
  expect(
    chroma.valid(
      useChroma({ value: "0, 0, 0", spaceName: "RGB", chroma: null })
    )
  ).toBe(true);
});

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
