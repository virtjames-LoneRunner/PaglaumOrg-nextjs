import { useEffect } from "react";

import axios from "axios";

import "../styles/globals.css";
import { BASE_URL } from "../config/config";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = BASE_URL;
  return <Component {...pageProps} />;
}

export default MyApp;
