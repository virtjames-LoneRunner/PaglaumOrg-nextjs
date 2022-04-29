import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { BASE_URL } from "../../config/config";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Head from "next/head";
import DOMPurify from "dompurify";
import CommentForm from "../../components/CommentForm";
import BlogComment from "../../components/BlogComment";
import Image from "next/image";

// export async function getStaticPaths() {
//   const req = await fetch(`${BASE_URL}/api/projects`);
//   const data = await req.json();

//   const paths = data.map((project) => {
//     return { params: { slug: project.slug } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params }) {
  let res = await fetch(`${BASE_URL}/api/projects?project_id=${params.slug}`);
  let project = await res.json();

  return {
    props: { project },
  };
}

export default function Project({ project }) {
  const router = useRouter();
  const { slug } = router.query;

  let date = new Date(project?.updated_at);
  var options = { year: "numeric", month: "long", day: "numeric" };
  let updatedAt = date.toLocaleDateString("en-US", options);

  const [clean, setClean] = useState();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setClean(DOMPurify.sanitize(project?.project_details));
    setComments(project?.comment_set);
  }, []);
  return (
    <div>
      <Head>
        <title>Paglaum: {project?.project_name}</title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <Navbar />
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center text-left py-10 md:space-x-2">
          <div className="w-3/4 md:w-1/2 flex flex-col">
            <h2 className="text-3xl font-medium text-gray-900">
              {project?.project_name}
            </h2>
            <p className="text-base font-medium">
              Project Date: {project?.project_date}
            </p>
            <p className="text-sm mb-4">Last Updated: {updatedAt}</p>
            {/* <img src={project?.featured_image} alt="..." /> */}

            {/* <p className="mt-5" style={{ whiteSpace: "pre-wrap" }}> */}

            <p
              className="mt-2 mb-5"
              // style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: clean,
              }}
            ></p>

            {/* {project?.project_details} */}
            {/* </p> */}
            {/* {clean} */}
            <div>
              <h2 className="text-2xl font-medium text-gray-800 mb-2">
                Sponsors
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-1">
                {project?.sponsors?.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="rounded-lg py-2 flex flex-col items-center justify-center shadow-lg border border-gray-100"
                  >
                    {sponsor.logo ? (
                      <Image
                        alt="Sponsor Logo"
                        className="p-2"
                        src={sponsor.logo ? sponsor.logo : "/media/default.png"}
                        height="350"
                        width="500"
                      />
                    ) : null}
                    <h2 className="text-xs lg:text-base font-medium text-gray-800">
                      {sponsor.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <CommentForm
              type={"project"}
              item={project}
              setComments={setComments}
            />
            <div>
              {comments?.map((comment) => (
                <BlogComment key={comment.id} comment={comment} />
              ))}
            </div>
          </div>
          <div className="space-y-2 mt-4 md:mt-20">
            <div className="flex flex-col w-full bg-white p-5 shadow-md space-y-2">
              <h1 className="font-bold text-2xl text-gray-700 text-center">
                Volunteer
              </h1>
              <input
                type="text"
                placeholder="Name"
                className="border-2 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-2 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full">
                Volunteer
              </button>
            </div>
            <div>
              <div className="flex flex-col w-full bg-white p-5 shadow-md space-y-2">
                <h1 className="font-bold text-2xl text-gray-700 text-center">
                  Donate
                </h1>
                <p>Please Contact Us to Send your Donations</p>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-2 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border-2 rounded-lg h-12 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-red-400 text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full">
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
