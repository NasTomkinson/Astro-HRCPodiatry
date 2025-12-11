import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: [
      "templates/components/**/test.ts",
      "templates/composites/**/test.ts",
    ],
  },
});
