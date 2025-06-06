import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Post } from "@/components/post";
import { Profile } from "@/components/profile";
import { TransitionMount } from "@/components/transition-mount";
import { allPosts } from "content-collections";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-8 mb-16 md:mt-32">
      <TransitionMount>
        <Profile />
      </TransitionMount>
      <TransitionMount delay={0.07}>
        <About />
      </TransitionMount>
      <TransitionMount delay={0.14}>
        <Contact />
      </TransitionMount>
      <TransitionMount delay={0.21}>
        <RecentPosts />
      </TransitionMount>
    </main>
  );
}

const RecentPosts = () => {
  const posts = allPosts
    .toSorted((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <section>
      <div className="mt-16 flex items-center justify-between">
        <h2 className="text-xl font-medium">최근 포스팅</h2>
        <Link
          className="text-subtle hover:text-main flex w-fit items-center gap-1.5 text-[0.9375rem] font-medium transition-colors"
          href="/posts"
        >
          전체보기
          <ArrowRightIcon className="size-4" />
        </Link>
      </div>
      <ul className="mt-8 space-y-4">
        {posts.map((post) => (
          <Post
            key={post._meta.path}
            title={post.title}
            date={post.date}
            href={`/posts/${post._meta.path}`}
          />
        ))}
      </ul>
    </section>
  );
};
