import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import  Hero from "./index.astro";
import type { Props } from "./types";

const defaultProps: Props = {
  heading: "Main Heading",
  copy: "A subheading for the hero composite",
  ctas: [{
    href: "https://google.co.uk",
    label: "Google",
    variant: "primary"
  }]
};

describe("Hero Component", () => {
  test("should render a Hero Composite with default args", async () => {
    const container = await AstroContainer.create();
    const hero = await container.renderToString(Hero, {
      props: { ...defaultProps },
    });

    expect(hero).toContain('Main Heading');
    expect(hero).toContain('A subheading for the hero composite') 
    expect(hero).toContain("https://google.co.uk")
  });
}); 