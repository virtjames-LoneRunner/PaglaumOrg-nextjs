import React, { useEffect, useState } from "react";

import axios from "axios";
import BlogAuthor from "../../components/BlogAuthor";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BASE_URL } from "../../config/config";
import Head from "next/head";

export async function getServerSideProps() {
  // const [projects, setProjects] = useState([]);
  const req = await fetch(`${BASE_URL}/api/blog`);
  const data = await req.json();
  //   console.log(data);
  return {
    props: { data },
  };
}

export default function Blog({ data }) {
  //   const [blogs, setBlogs] = useState(blogs);
  //   const [authors, setAuthors] = useState(authors);
  //   const getBlogs = () => {
  //     axios.get("/api/blog").then((res) => {
  //       if (res.status === 200) {
  //         setBlogs(res.data.blogs);
  //         setAuthors(res.data.authors);
  //       }
  //     });
  //   };
  //   console.log(data);
  useEffect(() => {
    // getBlogs();
  }, []);
  return (
    <div className="h-screen">
      <Head>
        <title>Paglaum Blogs</title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-full">
        <div className="flex justify-center py-10 px-8 md:px-[15%] bg-gray-50 h-full">
          <div className="flex w-full space-x-5">
            <div className="flex flex-col w-full md:w-2/3 items-start p-2">
              <div className="flex justify-between w-full items-center">
                <h2 className="text-2xl font-medium text-gray-700">Posts</h2>
                <select
                  name="filter"
                  id=""
                  className="px-4 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
                >
                  <option value="latest" className="">
                    Latest
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full mt-2">
                {data?.blogs?.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
            <div className="hidden md:flex flex-col items-start flex-auto p-2">
              <h2 className="text-2xl font-medium text-gray-700 mb-4">
                Authors
              </h2>
              <div className="flex flex-col max-w-sm pl-5 pr-10 py-4 bg-white rounded-lg shadow-md">
                <ul className="-mx-1 text-left space-y-4">
                  {data?.authors?.map((author) => (
                    <BlogAuthor author={author} key={author.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
