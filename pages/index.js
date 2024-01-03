import "aos/dist/aos.css";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import Aos from "aos";
import Spinner from "../components/layout/Spinner.js";
import Navbar from "../components/layout/Navbar.js";
import Landing from "../components/Landing.js";
import Experience from "../components/Experience.js";
const Skills = dynamic(() => import("../components/Skills.js"), {
  loading: () => <Spinner size={40} color="white" style={styles.loader} />,
});
const Project = dynamic(() => import("../components/projects/Project.js"), {
  loading: () => <Spinner size={40} color="white" style={styles.loader} />,
});
const ContactMe = dynamic(() => import("../components/ContactMe"), {
  loading: () => <Spinner size={40} color="white" style={styles.loader} />,
});
import Footer from "../components/layout/Footer";
import styles from "../styles/Spinner.module.css";

const defaultValue = {
  showSkills: false,
  showProject: false,
  showContactMe: false,
};

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const [shown, setShown] = useState(defaultValue);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    Aos.init({ duration: 1000 });
    const onScroll = () => {
      if (window.scrollY >= 500 && window.scrollY < 1000) {
        setShown((prev) => {
          return { ...prev, showSkills: true };
        });
      }
      if (window.scrollY >= 1000 && window.scrollY < 1500) {
        setShown((prev) => {
          return { ...prev, showProject: true };
        });
      }
      if (window.scrollY >= 1500 && window.scrollY < 2000) {
        setShown((prev) => {
          return { ...prev, showContactMe: true };
        });
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rishabh Ajay | Portfolio</title>
      </Head>

      <CssBaseline />
      {loading ? (
        <Spinner color={"#f72a1b"} size={140} style={styles.spinner} />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Landing />
            <Experience />

            {shown.showSkills && <Skills />}
            {shown.showProject && <Project />}
            {shown.showContactMe && <ContactMe />}
            <Footer />
          </ThemeProvider>
        </>
      )}
    </>
  );
};

export default Home;
