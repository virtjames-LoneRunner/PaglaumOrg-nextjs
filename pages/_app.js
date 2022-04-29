import { useEffect } from "react";

import axios from "axios";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  axios.defaults.baseURL = "http://localhost:8000";
  return <Component {...pageProps} />;
}

export default MyApp;
