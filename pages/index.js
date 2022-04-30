import { useEffect, useRef } from "react";

import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import { BASE_URL } from "../config/config";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/home/Team";
import Header from "../components/home/Header";
import Sponsors from "../components/home/Sponsors";
import DonateCTA from "../components/home/DonateCTA";
import JoinNewsletter from "../components/home/JoinNewsletter";
import FeaturedProjects from "../components/home/FeaturedProjects";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export async function getServerSideProps() {
  const req = await fetch(`${BASE_URL}/api/home`);
  const data = await req.json();
  // console.log(data);
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.fromTo(
      q(".header-div"),
      { x: "-50%", opacity: "0" },
      { x: 0, duration: 4, opacity: "100%", ease: "expo.out" }
    );
    gsap.fromTo(
      q(".featured-project"),
      { y: "-20%", opacity: "0%" },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top 90%",
          // scrub: true,
        },
        stagger: 0.4,
        opacity: "100%",
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      q(".team-member"),
      { x: "20%", opacity: "0%" },
      {
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-member",
          start: "top 80%",
        },
        stagger: 0.2,
        opacity: "100%",
        ease: "sine.inOut",
      }
    );
    gsap.fromTo(
      q(".home-contact-form"),
      { x: "-50%", opacity: "0%" },
      {
        x: 0,
        duration: 2,
        opacity: "100%",
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".team-member",
          start: "top 50%",
        },
      }
    );
    gsap.fromTo(
      q(".sponsor"),
      { y: "-40%", opacity: "0%" },
      {
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".sponsor",
          start: "top 80%",
        },
        stagger: 0.3,
        opacity: "100%",
        ease: "sine.inOut",
      }
    );
  }, []);

  return (
    <div>
      <Head>
        <title>Paglaum Jagna</title>
        <meta
          name="description"
          content="We are a group of young Jagnaanons eager to serve our community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main ref={el}>
        <NavBar />
        <Header />
        <JoinNewsletter />
        <FeaturedProjects projects={data ? data.projects : []} />
        <Team officers={data ? data.officers : []} />
        <DonateCTA />
        <Sponsors sponsors={data ? data.major_sponsors : []} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
