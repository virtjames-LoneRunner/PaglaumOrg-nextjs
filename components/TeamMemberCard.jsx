import Image from "next/image";
import React from "react";

function TeamMemberCard({ officer }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center col-span-1"
    >
      <div className="relative p-5">
        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-[#fad1a0]"></div>
        <Image
          alt="Team Member Picture"
          className="relative z-20 w-full rounded-full"
          src={officer?.picture}
        />
      </div>
      <div className="mt-3 space-y-2 text-center">
        <div className="space-y-1 text-lg font-medium leading-6">
          <h3>{officer?.full_name}</h3>
          <p className="text-blue-600">{officer?.position}</p>
        </div>
        <div className="relative flex items-center justify-center space-x-3">
          <a
            href={officer?.facebook}
            className="text-gray-300 hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
            </svg>
          </a>
          <a
            href={officer?.twitter}
            className="text-gray-300 hover:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
