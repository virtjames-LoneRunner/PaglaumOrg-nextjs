import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function PartnerWithUs() {
  //   const form = document.getElementById("form");
  //   const result = document.getElementById("result");

  //   form?.addEventListener("submit", function (e) {
  //     const formData = new FormData(form);
  //     e.preventDefault();
  //     var object = {};
  //     formData.forEach((value, key) => {
  //       object[key] = value;
  //     });
  //     var json = JSON.stringify(object);
  //     result.innerHTML = "Please wait...";

  //     fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //       body: json,
  //     })
  //       .then(async (response) => {
  //         let json = await response.json();
  //         if (response.status == 200) {
  //           result.innerHTML = json.message;
  //           result.classList.remove("text-gray-500");
  //           result.classList.add("text-green-500");
  //         } else {
  //           console.log(response);
  //           result.innerHTML = json.message;
  //           result.classList.remove("text-gray-500");
  //           result.classList.add("text-red-500");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         result.innerHTML = "Something went wrong!";
  //       })
  //       .then(function () {
  //         form.reset();
  //         setTimeout(() => {
  //           result.style.display = "none";
  //         }, 5000);
  //       });
  //   });
  return (
    <div>
      <Head>
        <title>Donate to Our Cause</title>
        <meta name="description" content="Donate to Our Cause" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div
          className="flex justify-center md:pr-5"
          style={{
            backgroundImage: `url("/static/img/content/donate.JPG")`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div>
            <div className="max-w-md mx-auto my-5 bg-white p-5 rounded-md shadow-sm">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-gray-900 ">
                  Donate to Our Cause
                </h1>
                <p className="text-gray-800 ">
                  Fill up the form below to send us a message.
                </p>
              </div>
              <div className="m-7">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                >
                  <input
                    type="hidden"
                    name="apikey"
                    value="YOUR_ACCESS_KEY_HERE"
                  />
                  <input type="hidden" name="subject" value="Partnership" />
                  <input type="checkbox" name="botcheck" id="" hidden />

                  <div className="mb-6">
                    <label
                      for="name"
                      className="block mb-2 text-sm text-gray-800 text-left"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm text-gray-800  text-left"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@mail.com"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300"
                    />
                  </div>
                  <div className="mb-6 text-left">
                    <label
                      for="phone"
                      className="text-sm text-gray-800 text-left"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+63 000 0000 000"
                      required
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300 "
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="message"
                      className="block mb-2 text-sm text-gray-800  text-left"
                    >
                      Your Message
                    </label>

                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300 "
                      required
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                  <p
                    className="text-base text-center text-gray-400"
                    id="result"
                  ></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
