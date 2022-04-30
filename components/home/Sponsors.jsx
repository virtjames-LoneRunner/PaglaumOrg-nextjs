import Image from "next/image";
import Link from "next/link";
import React from "react";

function Sponsors({ sponsors }) {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl px-10 mx-auto sm:text-center">
        {/* <p className="text-blue-500 font-medium uppercase">
          Our Application Integrations
        </p> */}
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">
          Our Sponsors
        </h2>
        <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">
          All of our projects has been made possible by the generousity of our
          sponsors.
        </p>
        <div className="grid grid-cols-4 gap-1 my-12 sm:my-16">
          {sponsors?.map((sponsor) => (
            <div
              key={sponsor.id}
              className="sponsor rounded-lg py-5 flex flex-col items-center justify-center shadow-lg border border-gray-100"
            >
              {sponsor.logo ? (
                <Image
                  alt="Sponsor Logo"
                  className="p-5"
                  src={sponsor.logo ? sponsor.logo : "/media/default.png"}
                  width="250"
                  height="150"
                />
              ) : null}
              <h2 className="text-xs md:text-2xl font-medium text-gray-800">
                {sponsor.name}
              </h2>
            </div>
          ))}
        </div>
        <Link passHref href="/projects">
          <p className="cursor-pointer px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-indigo-600 bg-indigo-500">
            Sponsor a Project
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Sponsors;
