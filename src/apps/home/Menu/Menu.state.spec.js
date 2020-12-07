import { Machine } from "xstate";
import { createModel } from "@xstate/test";
import { menuState } from ".";

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("/");
    cy.contains("Somenage");
  });
});
