import Link from "next/link";
import React from "react";

function ProjectTimelineItem({ project, side }) {
  return (
    <div
      className={`mb-8 flex justify-between items-center w-full ${side}-timeline ${
        side === "left" ? "flex-row-reverse" : ""
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-blue-600 shadow-xl w-4 md:w-8 h-4 md:h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white"></h1>
      </div>
      <div
        className={`project overflow-hidden order-1 rounded-lg shadow-xl w-5/12 px-0 pb-4`}
        data-direction={side}
      >
        <Link passHref href={`/projects/${project?.slug}`}>
          <div
            className="cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 bg-center bg-cover block h-32 md:h-96"
            style={{
              backgroundImage: `url(${project?.featured_image})`,
            }}
          ></div>
        </Link>
        <div className="p-4 text-left">
          <Link passHref href={`/projects/${project?.slug}`}>
            <p className="font-bold text-gray-800 text-md md:text-xl hover:underline cursor-pointer">
              {project?.project_name}
            </p>
          </Link>
          <p className="text-xs sm:text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
            Project Date:
          </p>
          <p className="text-xs sm:text-base leading-snug tracking-wide text-gray-900 font-semibold mb-2">
            {project?.project_date}
          </p>
          <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
            {project?.description}
          </p>
        </div>
        <div className="flex justify-center mt-4 mx-2">
          <Link passHref href={`/projects/${project?.slug}`}>
            <p className="cursor-pointer px-2 md:px-5 py-1 md:py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold w-full md:w-1/2 text-center text-sm md:text-base">
              Learn More
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectTimelineItem;
