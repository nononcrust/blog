import { site } from "@/configs/site";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="mt-8 grid grid-cols-[80px_1fr] gap-3">
      <dd className="text-subtle">Email</dd>
      <dt className="font-medium">
        <Link
          href={`mailto:${site.link.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.link.email}
        </Link>
      </dt>
      <dd className="text-subtle">Github</dd>
      <dt className="font-medium">
        <Link href={site.link.github} target="_blank" rel="noopener noreferrer">
          {site.nickname}
        </Link>
      </dt>
    </div>
  );
};
