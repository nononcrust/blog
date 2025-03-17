import rehypeShiki from "@shikijs/rehype";
import { createElement, Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import rehypeReact from "rehype-react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

const markdownToReact = async (markdown: string) => {
  const parsed = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeShiki, { theme: "one-dark-pro" })
    .use(rehypeReact, { Fragment, createElement, jsx, jsxs })
    .process(markdown);

  return parsed.result;
};

type MarkdownProps = {
  markdown: string;
};

export const Markdown = async ({ markdown }: MarkdownProps) => {
  const content = await markdownToReact(markdown);

  return <>{content}</>;
};
