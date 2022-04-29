import Link from "next/link";
import React from "react";

function JoinNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
          How you can help
        </h2>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Donate to the project, or join the effort!
        </p>
        <div className="flex justify-center mt-8 space-x-3">
          <Link href="/donate">
            <div className="cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-700">
              Send a Donation
            </div>
          </Link>
          <Link href="/partner-with-us">
            <div className="cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
              Become a Partner
            </div>
          </Link>
          <Link href="/projects">
            <div className="cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md shadow hover:bg-blue-200">
              Volunteer
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default JoinNewsletter;
