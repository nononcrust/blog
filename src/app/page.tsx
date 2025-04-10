import profileImage from "@/assets/images/profile-image.jpg";
import { Post } from "@/components/post";
import { allPosts } from "content-collections";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-8 mb-16 md:mt-32">
      <div className="flex items-center gap-8">
        <Image
          className="rounded-full"
          src={profileImage.src}
          alt="프로필 이미지"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">신상호</h1>
          <span className="text-sub mt-1">Frontend Developer</span>
        </div>
      </div>
      <RecentPosts />
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
          className="text-subtle hover:text-main flex w-fit items-center gap-1.5 text-[15px] font-medium transition-colors"
          href="/posts"
        >
          전체보기
          <ArrowRightIcon size={16} />
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
