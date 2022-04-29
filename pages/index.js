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
import { useEffect } from "react";

export async function getServerSideProps() {
  const req = await fetch(`${BASE_URL}/api/home`);
  const data = await req.json();
  // console.log(data);
  return {
    props: { data },
  };
}

export default function Home({ data }) {
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

      <main>
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
