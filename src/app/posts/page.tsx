import { allPosts } from "content-collections";
import Link from "next/link";

export default function PostListPage() {
  const posts = allPosts.toSorted((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="mt-8 md:mt-32">
      <ul className="space-y-4">
        {posts.map((post) => (
          <Post
            key={post._meta.path}
            title={post.title}
            date={post.date}
            href={`/posts/${post._meta.path}`}
          />
        ))}
      </ul>
    </main>
  );
}

type PostProps = {
  title: string;
  date: string;
  href: string;
};

const Post = ({ title, date, href }: PostProps) => {
  return (
    <li className="flex flex-col">
      <span className="text-subtle text-[13px]">{date}</span>
      <Link className="w-fit text-[15px] font-medium hover:underline" href={href}>
        {title}
      </Link>
    </li>
  );
};
