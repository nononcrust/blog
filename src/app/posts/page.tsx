import { Post } from "@/components/post";
import { Profile } from "@/components/profile";
import { TransitionMount } from "@/components/transition-mount";
import { allPosts } from "content-collections";

export default function PostListPage() {
  const posts = allPosts.toSorted((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mt-8 mb-16 md:mt-32">
      <TransitionMount>
        <Profile />
      </TransitionMount>
      <TransitionMount delay={0.07}>
        <ul className="mt-16 space-y-4">
          {posts.map((post) => (
            <Post
              key={post._meta.path}
              title={post.title}
              date={post.date}
              href={`/posts/${post._meta.path}`}
            />
          ))}
        </ul>
      </TransitionMount>
    </main>
  );
}
