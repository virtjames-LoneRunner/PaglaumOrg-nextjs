import React, { useEffect, useState } from "react";

import DOMPurify from "dompurify";
import axios from "axios";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export async function getStaticProps() {
  const res = await axios.get("/api/about");
  const data = await res.data;

  return {
    props: { data },
  };
}

export default function AboutUs({ data }) {
  const [about, setAbout] = useState("");
  const [vision, setVision] = useState("");
  const [mission, setMission] = useState("");
  //   const getAbout = () => {
  //     axios.get(`/api/about`).then((res) => {
  //       if (res.status === 200) {
  //     }
  // });
  // };

  useEffect(() => {
    setAbout(DOMPurify.sanitize(data?.about));
    setVision(DOMPurify.sanitize(data?.vision));
    setMission(DOMPurify.sanitize(data?.mission));
    // getAbout();
  }, []);
  return (
    <div>
      <Head>
        <title>About Paglaum</title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-screen">
        <div className="h-full pt-10 text-left bg-gray-50">
          <div className="w-5/6 md:w-2/3 mx-auto">
            <p className="font-semibold text-gray-800 text-2xl">
              About Paglaum
            </p>
            <p
              className="my-2"
              // style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: about,
              }}
            ></p>
            <p className="font-semibold text-gray-800 text-2xl">Vision</p>
            <p
              className="my-2"
              // style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: vision,
              }}
            ></p>
            <p className="font-semibold text-gray-800 text-2xl">Mission</p>
            <p
              className="my-2"
              // style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: mission,
              }}
            ></p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
