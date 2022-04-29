import axios from "axios";
import React, { useEffect, useState } from "react";

import DOMPurify from "dompurify";

import CommentForm from "../../components/CommentForm";
import BlogComment from "../../components/BlogComment";
import BlogPostAuthor from "../../components/BlogPostAuthor";
import { useRouter } from "next/router";
import { BASE_URL } from "../../config/config";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";

export async function getStaticPaths() {
  const req = await fetch(`${BASE_URL}/api/blog`);
  const data = await req.json();

  const paths = data?.blogs?.map((blog) => {
    return { params: { slug: blog.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let res = await fetch(`${BASE_URL}/api/blog?id=${params.slug}`);
  let blog = await res.json();
  return {
    props: { blog },
  };
}

export default function BlogPost({ blog }) {
  const router = useRouter();
  const { slug } = router.query;
  //   const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [clean, setClean] = useState("");
  var options = { year: "numeric", month: "long", day: "numeric" };

  // const [recommend, setRecommend] = useState([]);

  const getBlogPost = () => {
    axios.get(`/api/blog?id=${slug}`).then((res) => {
      if (res.status === 200) {
        setBlog(res.data);
        setComments(res.data.comment_set);
        setClean(DOMPurify.sanitize(res.data.body));
      }
    });
  };

  useEffect(() => {
    // getBlogPost();
    setComments(blog?.comment_set);
    setClean(DOMPurify.sanitize(blog?.body));
  }, []);
  return (
    <div>
      <Head>
        <title>Paglaum: {blog?.title}</title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <div className="flex justify-center bg-gray-50 text-left py-10">
          <div className="w-3/4 md:w-1/2 flex flex-col">
            <h2 className="text-3xl font-medium text-gray-900">
              {blog?.title}
            </h2>
            <em className="text-sm">
              Author: {blog?.author?.user?.first_name}{" "}
              {blog?.author?.user?.last_name}
            </em>
            <em className="text-sm">
              Published:{" "}
              {new Date(blog?.created_at).toLocaleDateString("en-US", options)}
            </em>
            <em className="text-sm mb-4">
              Last Updated:{" "}
              {new Date(blog?.updated_at).toLocaleDateString("en-US", options)}
            </em>
            {/* <img src={blog?.featured_image} alt="..." /> */}
            <p
              className="mt-2"
              // style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: clean,
              }}
            ></p>
            <BlogPostAuthor author={blog?.author} />
            <CommentForm type={"blog"} item={blog} setComments={setComments} />
            <div>
              {comments?.map((comment) => (
                <BlogComment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
