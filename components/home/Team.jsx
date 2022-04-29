import Link from "next/link";
import React from "react";
import TeamMemberCard from "../../components/TeamMemberCard";

function Team({ officers }) {
  return (
    <section className="relative py-20 overflow-hidde bg-gradient-to-b from-gray-100 to-white">
      {/* <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50">
          <a className="">See the Whole Team</a>
        </span>
      </span> */}

      <span className="absolute bottom-0 left-0"> </span>

      <div className="relative px-16 mx-auto max-w-7xl">
        {/* <p className="font-medium tracking-wide text-blue-500 uppercase">
          OUR TEAM
        </p> */}
        <h2 className="relative max-w-lg mt-5 mb-10 text-4xl font-semibold leading-tight lg:text-5xl">
          Meet the Excecutive Officers
        </h2>
        <div className="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
          {officers?.map((officer) => (
            <TeamMemberCard key={officer.id} officer={officer} />
          ))}
        </div>
        {/* <div className="w-full flex justify-center mt-8">
          <Link href="#_">
            <div className="cursor-pointer px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-indigo-600 bg-indigo-500">
              View All Members
            </div>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default Team;
