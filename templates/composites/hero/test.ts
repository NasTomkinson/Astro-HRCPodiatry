import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import  Hero from "./index.astro";
import type { Props } from "./types";

const defaultProps: Props = {
 
};

describe("Hero Component", () => {
  test("should render a button with default args", async () => {
    const container = await AstroContainer.create();
    const button = await container.renderToString(Hero, {
      props: { ...defaultProps },
    });

    expect(button).toContain('<h1');
  });
});