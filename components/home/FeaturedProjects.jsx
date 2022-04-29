import Link from "next/link";
import React from "react";

import BlogCard from "../../components/BlogCard";

import FeaturedProject from "../../components/FeaturedProject";

function FeaturedProjects({ projects }) {
  return (
    <section class="relative w-full bg-white">
      <div class="absolute w-full h-32 bg-white"></div>
      <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl bg-white">
        <Link href="/projects">
          <h1 class="cursor-pointer  mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
            Recent Projects
          </h1>
        </Link>
        <p class="text-lg font-medium text-gray-500 sm:text-2xl hidden">
          Hidden subtext
        </p>

        <div class="grid grid-cols-12 col-span-12 gap-7 mt-4 sm:mt-12"></div>
        <div class="grid h-full grid-cols-12 gap-5 pb-10 mt-4 sm:mt-16">
          {projects?.map((project) => (
            <FeaturedProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
