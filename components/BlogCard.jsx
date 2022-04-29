import Link from "next/link";
import React from "react";

function BlogCard({ blog }) {
  // const [updatedAt, setUpdatedAt] = useState("");
  let date = new Date(blog.created_at);
  var options = { year: "numeric", month: "long", day: "numeric" };

  let updated_at = date.toLocaleDateString("en-US", options);
  return (
    <div class="mt-6">
      <div class="relative max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md text-left overflow-hidden">
        <div className="absolute top-0 right-0 bg-gray-50">
          <img
            className="w-28 h-20"
            src={blog.featured_image}
            alt="Blog Featured Image"
          />
        </div>
        <div class="flex items-center justify-between">
          <span class="font-light text-gray-600">{updated_at}</span>
        </div>
        <div class="mt-2">
          <Link href={`/blog/${blog?.slug}`}>
            <p class="cursor-pointer text-2xl font-bold text-gray-700 hover:underline w-4/6">
              {blog.title}
            </p>
          </Link>
          <p class="mt-2 text-gray-600">{blog.description}</p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <Link href={`/blog/${blog?.slug}`}>
            <p class="cursor-pointer text-blue-500 hover:underline">
              Read more
            </p>
          </Link>
          <div>
            <Link href={`/author/${blog?.author?.user?.username}`}>
              <div class="cursor-pointer flex items-center">
                <img
                  src={blog?.author?.picture}
                  alt="avatar"
                  class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block bg-blue-100"
                />
                <h1 class="font-bold text-gray-700 hover:underline">
                  {blog?.author?.user?.first_name}{" "}
                  {blog?.author?.user?.last_name}
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
