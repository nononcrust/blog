import { defineCollection, defineConfig } from "@content-collections/core";

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
  }),
});

export default defineConfig({
  collections: [posts],
});
