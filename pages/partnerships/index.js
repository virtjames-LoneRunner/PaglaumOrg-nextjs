import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Partnerships() {
  return (
    <div>
      <Head>
        <title>Partnerships</title>
        <meta name="description" content="Here are our partners!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="h-screen">
        <div className="flex justify-center md:pr-5 h-full b-gray-50">
          Partnerships
        </div>
      </main>
      <Footer />
    </div>
  );
}
