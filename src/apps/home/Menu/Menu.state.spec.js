import { Machine } from "xstate";
import { createModel } from "@xstate/test";
import { menuStateTransitions } from "./Menu";

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("/");
    cy.contains("Somenage");
  });
});
