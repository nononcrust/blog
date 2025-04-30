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
    return {
      title: site.title,
      description: site.description,
    };
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
      <ReturnToList />
      <h1 className="mt-8 mb-1 text-3xl font-bold">{post.title}</h1>
      <span className="text-subtle mb-8 flex text-sm">
        {post.date} · {stats.text}
      </span>
      <article className="prose dark:prose-invert mb-8 max-w-none">
        <Markdown content={post.mdx} />
      </article>
      <ReturnToList />
    </main>
  );
}

const ReturnToList = () => {
  return (
    <Link
      className="text-subtle hover:text-main flex w-fit items-center gap-1.5 text-[0.9375rem] font-medium transition-colors"
      href="/posts"
    >
      <ArrowLeftIcon className="size-4" />
      목록으로 돌아가기
    </Link>
  );
};
