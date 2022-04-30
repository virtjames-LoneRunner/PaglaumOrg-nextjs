import React from "react";

// import contact_CTA from "../../static/img/content/contact_CTA.JPG";

function DonateCTA() {
  return (
    <section
      className="w-full px-8 py-16 xl:px-8 bg-blend-multiply bg-gradient-to-tr from-indigo-500 to-sky-300"
      style={{
        // backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.6) 0%, rgba(14, 165, 233, 0.6) 100%)`,
        //  url("/static/img/content/contact_CTA.JPG")`
        backgroundPosition: `top`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-full space-y-5 md:w-3/5 md:pr-16">
            {/* <p className="font-medium text-blue-500 uppercase">
              Building Businesses
            </p> */}
            <h2 className="text-2xl font-extrabold leading-none text-white sm:text-3xl md:text-5xl">
              Join our mission!
            </h2>
            <p className="text-xl text-gray-50 md:pr-16">
              Learn what you can do for your others. Aid, teach, and impower the
              community!
            </p>
          </div>

          <div className="w-full mt-16 md:mt-0 md:w-2/5">
            <div className="home-contact-form relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
              <h3 className="mb-6 text-2xl font-medium text-center">
                Contact Us!
              </h3>
              <input
                type="text"
                name="email"
                className="block w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Email address"
              />
              <input
                className="block w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Contact Number"
              />
              <textarea
                className="block w-full px-4 py-3 mb-4 border-2 border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                placeholder="Message"
              />
              <div className="block">
                <button className="w-full px-3 py-4 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">
                  Send Message
                </button>
              </div>
              {/* <p className="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a href="#_" className="text-blue-500 underline">
                  Sign up here
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateCTA;
