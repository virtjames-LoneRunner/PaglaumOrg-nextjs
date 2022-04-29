import Link from "next/link";
import React from "react";

function BlogAuthor({ author }) {
  return (
    <li className="flex items-center">
      <img
        src={author?.picture}
        alt="avatar"
        className="object-cover w-10 h-10 mx-2 rounded-full bg-blue-100"
      />
      <div className="flex flex-col">
        <Link href={`/author/${author?.user?.username}`}>
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
