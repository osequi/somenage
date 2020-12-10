import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createSerializer } from "@emotion/jest";
import { Grid } from ".";

/**
 * Testing media queries with Emotion.
 * @see https://emotion.sh/docs/@emotion/jest
 */
expect.addSnapshotSerializer(createSerializer());

it("When title set, but there is only one children, grid items are not displayed in a grid container.", () => {
  const { queryByTestId } = render(
    <Grid asProps={{ title: "Grid title" }} children={<>Grid item</>} />
  );
  expect(queryByTestId("grid-items")).toBeNull();
});

it("When title set, displays grid items in a grid container.", () => {
  const { container, queryByTestId } = render(
    <Grid asProps={{ title: "Grid title" }} children="Grid item" />
  );
  expect(container.firstChild).toContainElement(queryByTestId("grid-items"));
});

it("Displays a grid with title.", () => {
  const { container } = render(
    <Grid asProps={{ title: "Grid title" }} children="Grid item" />
  );
  expect(container.firstChild.firstChild.nodeName).toBe("H2");
});

it("Sets the `grid-template-columns` CSS attribute in a responsive way.", () => {
  const { container } = render(<Grid columns={[1, 2]} children="Grid item" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      background: blue;
      display: grid;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 320px) {
      .emotion-0 {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    @media (min-width: 768px) {
      .emotion-0 {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    <section
      class="Grid emotion-0"
    >
      <h2
        class="SemanticHeading-2"
        style="display: none;"
      >
        Grid emotion-0
      </h2>
      Grid item
    </section>
  `);
});

it("Sets the `grid-template-columns` CSS attribute.", () => {
  const { container } = render(<Grid children="Grid item" />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      background: blue;
      display: grid;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 320px) {
      .emotion-0 {
        grid-template-columns: repeat(1, 1fr);
      }
    }

    <section
      class="Grid emotion-0"
    >
      <h2
        class="SemanticHeading-2"
        style="display: none;"
      >
        Grid emotion-0
      </h2>
      Grid item
    </section>
  `);
});

it("Sets the `grid` CSS attribute.", () => {
  const { container } = render(<Grid children="Grid item" />);
  expect(container.firstChild).toHaveStyle("display: grid");
});

it("Works with children.", () => {
  const { container } = render(<Grid children="Grid item" />);
  expect(container.firstChild).toHaveTextContent("Grid item");
});

it("Fails back safely when no children.", () => {
  const { container } = render(<Grid />);
  expect(container.firstChild).toBeNull();
});
