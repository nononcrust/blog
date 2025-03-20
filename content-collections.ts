import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";

const posts = defineCollection({
  name: "posts",
  directory: "posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    date: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
