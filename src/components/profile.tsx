import profileImage from "@/assets/images/profile-image.jpg";
import Image from "next/image";
import Link from "next/link";

export const Profile = () => {
  return (
    <div className="flex items-center gap-8">
      <Image
        className="h-[100px] w-[100px] rounded-full"
        src={profileImage.src}
        alt="프로필 이미지"
        width={100}
        height={100}
      />
      <div className="flex flex-col">
        <h1 className="w-fit text-2xl font-medium">
          <Link href="/">신상호</Link>
        </h1>
        <span className="text-sub mt-1">Frontend Developer</span>
      </div>
    </div>
  );
};
