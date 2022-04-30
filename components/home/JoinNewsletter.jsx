import Link from "next/link";
import React from "react";

function JoinNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 to-sky-500">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
          How you can help
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Donate to the project, or join the effort!
        </p>
        <div className="flex justify-center mt-8 space-x-3">
          <Link passHref href="/donate">
            <div className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs md:text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Send a Donation
            </div>
          </Link>
          <Link passHref href="/partner-with-us">
            <div className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs md:text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Become a Partner
            </div>
          </Link>
          <Link passHref href="/projects">
            <div className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs md:text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Volunteer
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JoinNewsletter;
