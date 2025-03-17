import rehypeShiki from "@shikijs/rehype";
import { ExternalLinkIcon } from "lucide-react";
import { MarkdownAsync } from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  return (
    <MarkdownAsync
      components={{
        a: ({ children, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer">
            {children}
            <ExternalLinkIcon className="ml-2 inline" size={16} />
          </a>
        ),
      }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[[rehypeShiki, { theme: "one-dark-pro", tabindex: -1 }]]}
    >
      {content}
    </MarkdownAsync>
  );
};
