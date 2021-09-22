import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "../styles/globals.css";

const Spinner = dynamic(import("../components/layout/Spinner.js"));
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return <> {loading ? <Spinner /> : <Component {...pageProps} />}</>;
}

export default MyApp;
