import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogAuthor({ author }) {
  return (
    <li className="flex items-center">
      <Image
        src={author?.picture ? author?.picture : "/media/default.png"}
        alt="avatar"
        className="object-cover w-10 h-10 mx-2 rounded-full bg-blue-100"
        width="50"
        height="50"
      />
      <div className="flex flex-col ml-4">
        <Link passHref href={`/author/${author?.user?.username}`}>
          <p className="cursor-pointer font-bold text-gray-700 hover:underline">
            {author?.user?.first_name} {author?.user?.last_name}
          </p>
        </Link>
        <span className="text-sm font-light text-gray-700">
          Created {author?.blog_set.length} posts
        </span>
      </div>
    </li>
  );
}

export default BlogAuthor;
