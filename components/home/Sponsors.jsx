import Link from "next/link";
import React from "react";

function Sponsors({ sponsors }) {
  return (
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl px-10 mx-auto sm:text-center">
        {/* <p class="text-blue-500 font-medium uppercase">
          Our Application Integrations
        </p> */}
        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">
          Our Sponsors
        </h2>
        <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">
          All of our projects has been made possible by the generousity of our
          sponsors.
        </p>
        <div class="grid grid-cols-4 gap-1 my-12 sm:my-16">
          {sponsors?.map((sponsor) => (
            <div
              key={sponsor.id}
              data-aos="fade-up"
              class="rounded-lg py-5 flex flex-col items-center justify-center shadow-lg border border-gray-100"
            >
              {sponsor.logo ? <img className="p-5" src={sponsor.logo} /> : null}
              <h2 className="text-xs md:text-2xl font-medium text-gray-800">
                {sponsor.name}
              </h2>
            </div>
          ))}
        </div>
        <Link href="/projects">
          <p class="cursor-pointer px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-indigo-600 bg-indigo-500">
            Sponsor a Project
          </p>
        </Link>
      </div>
    </section>
  );
}

export default Sponsors;
