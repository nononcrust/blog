import { Markdown } from "@/components/markdown";
import { site } from "@/configs/site";
import { allPosts } from "content-collections";
import { ArrowLeftIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import readingTime from "reading-time";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { slug } = await params;

  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) {
    throw new Error("게시글을 찾을 수 없습니다.");
  }

  return {
    title: `${post.title} | ${site.title}`,
  };
};

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    params: {
      slug: post._meta.path,
    },
  }));
};

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) {
    return notFound();
  }

  const stats = readingTime(post.content);

  return (
    <main className="flex flex-col py-16">
      <Link
        className="text-subtle hover:text-main mb-8 flex w-fit items-center gap-1.5 text-[15px] font-medium transition-colors"
        href="/posts"
      >
        <ArrowLeftIcon size={16} />
        목록으로 돌아가기
      </Link>

      <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
      <span className="text-subtle mb-8 flex text-sm">
        {post.date} · {stats.text}
      </span>
      <article className="prose dark:prose-invert max-w-none">
        <Markdown content={post.mdx} />
      </article>
    </main>
  );
}
