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
const Skills = dynamic(import("../components/Skills.js"));
const Project = dynamic(import("../components/projects/Project.js"));
const ContactMe = dynamic(import("../components/ContactMe"));
const Footer = dynamic(import("../components/layout/Footer"));

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rishabh Ajay | Portfolio</title>
      </Head>

      <CssBaseline />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Landing />
            <Experience />
            <Skills />
            <Project />
            <ContactMe />
            <Footer />
          </ThemeProvider>
        </>
      )}
    </>
  );
};

export default Home;
