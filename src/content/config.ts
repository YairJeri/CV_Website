import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        image: image(),
        github: z.string().optional(),
        url: z.string().optional(),
        tags: z.array(z.string()),
        lang: z.string(),
    }),
});

export const collections = { portfolio };
