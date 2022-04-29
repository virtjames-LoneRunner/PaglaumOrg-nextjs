import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }) {
  // const [updatedAt, setUpdatedAt] = useState("");
  let date = new Date(blog.created_at);
  var options = { year: "numeric", month: "long", day: "numeric" };

  let updated_at = date.toLocaleDateString("en-US", options);
  return (
    <div className="mt-6">
      <div className="relative max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md text-left overflow-hidden">
        <div className="absolute top-0 right-0 bg-gray-50">
          <Image
            className="w-28 h-20"
            src={
              blog?.featured_image ? blog?.featured_image : "/media/default.png"
            }
            alt="Blog Featured Image"
            width={150}
            height={100}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">{updated_at}</span>
        </div>
        <div className="mt-2">
          <Link passHref href={`/blog/${blog?.slug}`}>
            <p className="cursor-pointer text-2xl font-bold text-gray-700 hover:underline w-4/6">
              {blog?.title}
            </p>
          </Link>
          <p className="mt-2 text-gray-600">{blog.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link passHref href={`/blog/${blog?.slug}`}>
            <p className="cursor-pointer text-blue-500 hover:underline">
              Read more
            </p>
          </Link>
          <div>
            <Link passHref href={`/author/${blog?.author?.user?.username}`}>
              <div className="cursor-pointer flex items-center">
                <Image
                  src={
                    blog?.author?.picture
                      ? blog?.author?.picture
                      : "/media/default.png"
                  }
                  alt="avatar"
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block bg-blue-100"
                  height={50}
                  width={50}
                />
                <h1 className="ml-2 font-bold text-gray-700 hover:underline">
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
