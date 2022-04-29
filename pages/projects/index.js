import { useEffect } from "react";
import Head from "next/head";

import { BASE_URL } from "../../config/config";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProjectTimelineItem from "../../components/ProjectTimelineItem";

export async function getStaticProps() {
  // const [projects, setProjects] = useState([]);
  const req = await fetch(`${BASE_URL}/api/projects`);
  const projects = await req.json();
  // console.log(projects);
  return {
    props: { projects },
  };
}

export default function Projects({ projects }) {
  useEffect(() => {
    //   getProjects();
    // console.log(projects);
  }, []);

  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50">
        <Navbar />
        <div className="py-5 container mx-auto">
          <div className="relative wrap overflow-hidden pb-10 px-10 sm:px-0 md:px-10 lg:px-32 h-full">
            <h2 className="font-bold text-4xl text-gray-800 mb-5">Projects</h2>
            <div
              className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
              style={{ left: "50%" }}
            ></div>
            {projects?.map((project, index) => (
              <ProjectTimelineItem
                project={project}
                key={project.id}
                side={(index + 1) % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
