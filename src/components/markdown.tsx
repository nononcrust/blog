import { Code } from "bright";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

Code.theme = "one-dark-pro";
Code.lineNumbers = true;

type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <ReactMarkdown
      components={{
        pre: Code,
        a: ({ children, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ),
      }}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
};
