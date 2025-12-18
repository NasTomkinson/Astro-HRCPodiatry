import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest"
import CTAs from "./index.astro"
import type { Props } from "./types"

const defaultProps: Props = [
    {
        href: "https://google.co.uk",
        variant: "primary",
        label: "Google"
    }
]

describe("CTA Component", () => {
    test("Should render a CTA", async () => {
        const container = await AstroContainer.create();
        const CTA = await container.renderToString(CTAs, {
            props: {
                ctas: defaultProps
            }
        })

        expect(CTA).toContain("<a class=\"button primary\"")
    })
})