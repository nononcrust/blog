import Link from "next/link";

type PostProps = {
  title: string;
  date: string;
  href: string;
};

export const Post = ({ title, date, href }: PostProps) => {
  return (
    <li className="flex flex-col">
      <span className="text-subtle text-[13px]">{date}</span>
      <Link
        className="w-fit text-[15px] font-medium hover:underline"
        href={href}
      >
        {title}
      </Link>
    </li>
  );
};
