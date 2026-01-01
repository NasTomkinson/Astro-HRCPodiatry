import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import Anchor from "./index.astro";
import type { Props } from "./types";

const defaultProps: Props = {
  variant: "primary",
  label: "Click Me",
  href: "#",
};

describe("Anchor Component", () => {
  test("should render a button with default args", async () => {
    const container = await AstroContainer.create();
    const anchor = await container.renderToString(Anchor, {
      props: { ...defaultProps },
    });

    expect(anchor).toContain('class="button primary"');
    expect(anchor).not.toContain("disabled");
    expect(anchor).toContain("Click Me <");
    expect(anchor).toContain('aria-label="Click Me"');
    expect(anchor).toContain('href="#"');
  });
});
