import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/router";
// import logo from "../static/img/logo.png";
import Sidebar from "./Sidebar";

function Navbar() {
  const router = useRouter();

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <section className="w-full px-8 text-gray-700 bg-white shadow-lg body-font sticky top-0 z-50">
      <div className="container flex flex-wrap items-center justify-between py-5 mx-auto flex-row max-w-7xl">
        <Link
          href="/"
          className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-gray-800 select-none space-x-2"
        >
          <div className="flex justify-center items-end">
            <img
              src={"/static/img/logo.png"}
              className="0 w-14 mx-1"
              alt="Paglaum Logo"
            />
            <span className="hidden md:flex text-[#09213d] font-bold text-2xl">
              Paglaum
            </span>
          </div>
        </Link>

        <nav className="top-0 left-0 z-0 hidden md:flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
          <Link href="/">
            <div
              className={`flex ${
                router.pathname == "/" ? "border-b-2" : ""
              } border-indigo-800 transition duration-300 ease-out cursor-pointer font-medium`}
            >
              <span
                className={`block hover:text-gray-900 text-gray-600 ${
                  router.pathname == "/" ? "" : "hover:-translate-y-1"
                }  transition duration-150 ease-in-out`}
              >
                Home
              </span>
            </div>
          </Link>
          <Link href="/projects" className="relative font-medium leading-6 ">
            <div
              className={`flex ${
                router.pathname.includes("/projects") ? "border-b-2" : ""
              } border-indigo-800 transition duration-300 ease-out cursor-pointer font-medium`}
            >
              <span
                className={`block hover:text-gray-900 text-gray-600 ${
                  router.pathname == "/projects" ? "" : "hover:-translate-y-1"
                }  transition duration-150 ease-in-out`}
              >
                Projects
              </span>
            </div>
          </Link>
          <Link href="/blog" className="relative font-medium leading-6 ">
            <div
              className={`flex ${
                router.pathname.includes("/blog") ? "border-b-2" : ""
              } border-indigo-800 transition duration-300 ease-out cursor-pointer font-medium`}
            >
              <span
                className={`block hover:text-gray-900 text-gray-600 ${
                  router.pathname == "/blog" ? "" : "hover:-translate-y-1"
                }  transition duration-150 ease-in-out`}
              >
                Blog
              </span>
            </div>
          </Link>
          {/* <Link href="/partnerships" className="relative font-medium leading-6">
            <div
              className={`flex ${
                router.pathname.includes("/partnerships") ? "border-b-2" : ""
              } border-indigo-800 transition duration-300 ease-out cursor-pointer font-medium`}
            >
              <span className={`block hover:text-gray-900 text-gray-600 ${
                  router.pathname == "/" ? "" : "hover:-translate-y-1"
                }  transition duration-150 ease-in-out`}>
                Partnerships
              </span>
            </div>
          </Link> */}
          <Link href="/about-us" className="relative font-medium leading-6">
            <div
              className={`flex ${
                router.pathname.includes("/about-us") ? "border-b-2" : ""
              } border-indigo-800 transition duration-300 ease-out cursor-pointer font-medium`}
            >
              <span
                className={`block hover:text-gray-900 text-gray-600 ${
                  router.pathname == "/about-us" ? "" : "hover:-translate-y-1"
                }  transition duration-150 ease-in-out`}
              >
                About Us
              </span>
            </div>
          </Link>
          <Link href="/contact-us" className="relative font-medium ">
            <div
              className={`flex ${
                router.pathname.includes("/contact-us") ? "border-b-2" : ""
              } border-indigo-800 transition duration-300 ease-out cursor-pointer font-medium `}
            >
              <span
                className={`block hover:text-gray-900 text-gray-600 ${
                  router.pathname == "/contact-us" ? "" : "hover:-translate-y-1"
                }  transition duration-150 ease-in-out`}
              >
                Contact Us
              </span>
            </div>
          </Link>
        </nav>

        <div className="relative z-10 inline-flex items-center space-x-2 md:space-x-3 md:ml-5 lg:justify-end">
          <Link href="/partner-with-us">
            <div className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs md:text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
              Partner with Us
            </div>
          </Link>
          <span className="inline-flex rounded-md shadow-sm">
            <Link href="/donate">
              <div className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs md:text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-blue-700 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Donate
              </div>
            </Link>
          </span>
          <button
            className="md:hidden"
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full">
        <div
          className={`top-0 right-0 w-full bg-blue-600 py-20 px-10 text-white fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <nav className="top-0 left-0 flex flex-col items-center justify-center w-full h-full space-y-10">
            <Link href="/">
              <span className="block relative font-medium leading-6 text-white transition duration-150 ease-out text-4xl hover:text-gray-800">
                Home
              </span>
            </Link>
            <Link href="/projects">
              <span className="block relative font-medium leading-6 text-white transition duration-150 ease-out text-4xl hover:text-gray-800">
                Projects
              </span>
            </Link>
            <Link href="/blog">
              <span className="block relative font-medium leading-6 text-white transition duration-150 ease-out text-4xl hover:text-gray-800">
                Blog
              </span>
            </Link>
            {/* <Link href="/partnerships">
              <span className="block relative font-medium leading-6 text-white transition duration-150 ease-out text-4xl hover:text-gray-800">
                Partnerships
              </span>
            </Link> */}
            <Link href="/about-us">
              <span className="block relative font-medium leading-6 text-white transition duration-150 ease-out text-4xl hover:text-gray-800">
                About Us
              </span>
            </Link>
            <Link href="/contact-us">
              <span className="block relative font-medium leading-6 text-white transition duration-150 ease-out text-4xl hover:text-gray-800">
                Contact Us
              </span>
            </Link>
            <div className="flex pt-12">
              <button
                className="font-semibold text-lg"
                onClick={() => {
                  setShowSidebar(false);
                }}
              >
                Close
              </button>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
