import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shootsCollection = defineCollection({
    loader: glob({ pattern: '**/*.md', base: "./src/content/shoots" }),
    schema: ({ image }) => z.object({
        title: z.string(), // Couple's Names
        date: z.string(),
        location: z.string(),
        description: z.string(),
        coverImage: image(),
        coverAlt: z.string(), // Required SEO field
        testimonial: z.object({
            quote: z.string(),
            author: z.string()
        }),
        gallery: z.array(z.object({
            src: image(),
            alt: z.string(), // Required SEO field
            size: z.enum(['large', 'medium', 'small'])
        }))
    }),
});

export const collections = {
    'shoots': shootsCollection,
};
