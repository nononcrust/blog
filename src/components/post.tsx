import Link from "next/link";

type PostProps = {
  title: string;
  date: string;
  href: string;
};

export const Post = ({ title, date, href }: PostProps) => {
  return (
    <li>
      <Link className="flex flex-col" href={href}>
        <span className="text-subtle text-[0.8125rem]">{date}</span>
        <p className="w-fit text-[0.9375rem] font-medium">{title}</p>
      </Link>
    </li>
  );
};
