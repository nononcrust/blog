import { MDXContent } from "@content-collections/mdx/react";
import { Code } from "bright";

Code.theme = "one-dark-pro";
Code.lineNumbers = true;

type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <MDXContent
      code={content}
      components={{
        pre: Code,
        a: ({ children, ...props }) => (
          <a
            className="break-all"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {children}
          </a>
        ),
      }}
    />
  );
};
