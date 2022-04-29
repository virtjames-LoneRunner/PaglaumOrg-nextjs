import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function ContactUs() {
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
        <title>Contact Us!</title>
        <meta name="description" content="Contact Us!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div
          class="flex justify-center md:pr-5"
          style={{
            backgroundImage: `url("/static/img/contact_us.JPG")`,
            backgroundPosition: `top`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div>
            <div class="max-w-md mx-auto my-5 bg-white p-5 rounded-md shadow-sm">
              <div class="text-center">
                <h1 class="my-3 text-3xl font-semibold text-gray-900 ">
                  Contact Us!
                </h1>
                <p class="text-gray-800 ">
                  Fill up the form below to send us a message.
                </p>
              </div>
              <div class="m-7">
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

                  <div class="mb-6">
                    <label
                      for="name"
                      class="block mb-2 text-sm text-gray-800 text-left"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-800  text-left"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@mail.com"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300"
                    />
                  </div>
                  <div class="mb-6 text-left">
                    <label for="phone" class="text-sm text-gray-800 text-left">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+63 000 0000 000"
                      required
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300 "
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="message"
                      class="block mb-2 text-sm text-gray-800  text-left"
                    >
                      Your Message
                    </label>

                    <textarea
                      rows="5"
                      name="message"
                      id="message"
                      placeholder="Your Message"
                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 focus:border-indigo-300 "
                      required
                    ></textarea>
                  </div>
                  <div class="mb-6">
                    <button
                      type="submit"
                      class="w-full px-3 py-4 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                  <p
                    class="text-base text-center text-gray-400"
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
