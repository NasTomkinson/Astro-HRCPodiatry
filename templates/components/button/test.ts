import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import Button from "./index.astro";
import type { Props } from "./types";

const defaultProps: Props = {
  type: "button",
  variant: "primary",
  label: "Click Me",
};

describe("Button Component", () => {
  test("should render a primary button ", async () => {
    const container = await AstroContainer.create();
    const button = await container.renderToString(Button, {
      props: { ...defaultProps },
    });

    expect(button).toContain('class="button primary"');
  });

  test("should render a secondary button ", async () => {
    const container = await AstroContainer.create();
    const button = await container.renderToString(Button, {
      props: { ...defaultProps, variant: "secondary" },
    });

    expect(button).toContain('class="button secondary"');
  });

  test("should render an inline button ", async () => {
    const container = await AstroContainer.create();
    const button = await container.renderToString(Button, {
      props: { ...defaultProps, variant: "inline" },
    });

    expect(button).toContain('class="button inline"');
  });
});
