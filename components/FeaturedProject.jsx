import Link from "next/link";
import React from "react";

function FeaturedProject({ project }) {
  const category_return = () => {
    switch (project.project_category) {
      case "giving":
        return "bg-purple-500";
      case "government":
        return "bg-blue-400";
      default:
        return "bg-green-500";
    }
  };
  let category = category_return();
  return (
    <div
      data-aos="fade-up"
      className="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col"
    >
      <Link passHref href={`/projects/${project?.slug}`}>
        <p
          className="cursor-pointer block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-80 hover:scale-110"
          style={{
            backgroundImage: `url(${project?.featured_image})`,
          }}
        ></p>
      </Link>
      <div
        className={`${category} relative z-20 flex flex-col items-start justify-center w-full py-8 text-white border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7`}
      >
        {/* <a
                href="#_"
                className="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
              >
                Resources
              </a> */}
        <h2 className="mb-5 text-2xl md:text-5xl font-bold">
          <Link passHref href={`/projects/${project?.slug}`}>
            <p className="cursor-pointer">{project?.project_name}</p>
          </Link>
        </h2>
        <p className="mb-2 text-lg font-normal text-purple-100 opacity-100">
          {project?.description}
        </p>
      </div>
    </div>
  );
}

export default FeaturedProject;
