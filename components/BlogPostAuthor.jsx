import Link from "next/link";
import React from "react";

function BlogPostAuthor({ author }) {
  return (
    <div className="mt-20 bg-white p-5 shadow-md">
      <p className="mb-2 text-xl font-semibold">Author</p>
      <div className="flex">
        <img
          src={author?.picture}
          alt="avatar"
          class="object-cover w-20 h-20 mx-4 rounded-full"
        />
        <div className="flex flex-col">
          <Link href={`/author/${author?.user?.username}`}>
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

export default BlogPostAuthor;
