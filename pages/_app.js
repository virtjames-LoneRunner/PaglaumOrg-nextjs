import { useEffect } from "react";

import axios from "axios";

import "../styles/globals.css";
import { BASE_URL } from "../config/config";

import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  axios.defaults.baseURL = BASE_URL;
  return <Component {...pageProps} />;
}

export default MyApp;
