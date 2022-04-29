import axios from "axios";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { BASE_URL } from "../../config/config";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import Link from "next/link";

export async function getStaticPaths() {
  const req = await fetch(`${BASE_URL}/api/author`);
  const authors = await req.json();

  const paths = authors?.map((author) => {
    return { params: { username: author?.user?.username } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res = await fetch(`${BASE_URL}/api/author?username=${params.username}`);
  let data = await res.json();
  console.log("AUTHOR", data);
  return {
    props: { author: data?.author, blogs: data?.blogs },
  };
}

export default function AuthorPage({ author, blogs }) {
  const router = useRouter();
  const { username } = router.query;

  //   const [author, setAuthor] = useState({});
  const [clean, setClean] = useState("");
  var options = { year: "numeric", month: "long", day: "numeric" };
  //   const getAuthor = () => {
  //     axios.get(`/api/author?username=${username}`).then((res) => {
  //       setAuthor(res.data);
  //     });
  //   };

  useEffect(() => {
    setClean(DOMPurify.sanitize(author?.about));
    // getAuthor();
  }, []);

  return (
    <div className="bg-gray-50">
      <Head>
        <title>
          Paglaum: {author?.user?.first_name} {author?.user?.last_name}
        </title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-screen container mx-auto">
        <div className="flex flex-col md:flex-row h-full items-center md:items-start md:justify-center text-left py-5 md:py-10 md:space-x-2">
          <div className="w-4/5 md:w-1/2 flex flex-col border-b">
            <div className="flex items-center border-b border-gray-200 pb-4">
              <img
                src={author?.picture}
                alt="avatar"
                class="object-cover w-14 h-14 md:w-20 md:h-20 mx-4 rounded-full sm:block bg-blue-100"
              />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">
                  {author?.user?.first_name} {author?.user?.last_name}
                </h2>
                <p>{author?.bio}</p>
                <div class="relative flex items-center justify-start space-x-3">
                  <a
                    href={author?.facebook}
                    class="text-gray-300 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                    </svg>
                  </a>
                  <a
                    href={author?.twitter}
                    class="text-gray-300 hover:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <p
              className="my-4 pl-5"
              // style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: clean,
              }}
            ></p>
          </div>
          <div className="flex flex-col pt-5 px-12 md:px-0 w-full md:w-1/3 lg:w-1/4">
            <h2 className="text-lg font-medium text-gray-800">Blog Posts</h2>
            {blogs?.map((blog) => (
              <div
                className="flex flex-col bg-white p-5 shadow-md space-y-2 w-auto"
                key={blog.id}
              >
                <Link href={`/blog/${blog?.slug}`}>
                  <p className="font-bold text-gray-700 text-left hover:underline cursor-pointer">
                    {blog?.title}
                  </p>
                </Link>
                <p className="text-xs text-right">
                  {new Date(blog?.created_at).toLocaleDateString(
                    "en-US",
                    options
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
