import Head from "next/head";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "@fontsource/comfortaa";
import "@fontsource/balsamiq-sans";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import "lazysizes";
// import a plugin
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const Spinner = dynamic(import("../components/layout/Spinner.js"));
const Navbar = dynamic(import("../components/layout/Navbar.js"));
const Landing = dynamic(import("../components/Landing.js"));
const Experience = dynamic(import("../components/Experience.js"));
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
    }, 5000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <Head>
        <title>Rishabh Ajay | Portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta
          name="description"
          content="A portfolio website built with Next.js and Material UI"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Rishabh Ajay's Portfolio website." />

        <meta
          property="og:description"
          content="A portfolio website built with Next.js and Material UI"
        />

        <meta property="og:image" content="/favicon.webp" />

        <meta property="og:site_name" content="My Homepage" />
        <link rel="icon" href="/favicon.webp" />
      </Head>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Navbar />
            <Landing />
            <CssBaseline />
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
