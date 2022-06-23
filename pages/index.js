import "@fontsource/balsamiq-sans";
import "@fontsource/comfortaa";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import "lazysizes";

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
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Head>
        <title>Rishabh Ajay | Portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="title" content="Rishabh Ajay's portfolio website" />
        <meta
          name="description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta
          name="keywords"
          content="portfolio, next.js, react, material-ui, engineering, software, website, web development"
        />
        <meta name="robots" content="index, nofollow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="og:title" content="Rishabh Ajay's portfolio website" />
        <meta
          name="og:description"
          content="A portfolio website created with Next.js and Material-UI"
        />
        <meta
          property="url"
          content="https://portfolio-rishabhajay.vercel.app/"
        />
        <meta property="image" content="/android-chrome-192x192.png" />
        <meta property="og:image" content="/android-chrome-192x192.png" />
        <meta
          property="og:url"
          content="https://portfolio-rishabhajay.vercel.app/"
        />
        <meta property="og:site_name" content="Rishabh Ajay's Portfolio" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <CssBaseline />
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
