import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogPostAuthor({ author }) {
  return (
    <div className="mt-20 bg-white p-5 shadow-md">
      <p className="mb-2 text-xl font-semibold">Author</p>
      <div className="flex">
        <Image
          src={author?.picture ? author?.picture : "/media/default.png"}
          alt="avatar"
          className="object-cover w-20 h-20 mx-4 rounded-full"
          width="100"
          height="100"
        />
        <div className="flex flex-col ml-4">
          <Link passHref href={`/author/${author?.user?.username}`}>
            <p className="text-2xl font-bold text-gray-800 hover:underline cursor-pointer">
              {author?.user?.first_name} {author?.user?.last_name}
            </p>
          </Link>
          <p>{author?.bio}</p>
        </div>
      </div>
    </div>
  );
}
