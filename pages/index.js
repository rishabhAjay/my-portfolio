import Head from "next/head";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { CssBaseline } from "@mui/material";

import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";

const Spinner = dynamic(import("../components/layout/Spinner.js"));
const Navbar = dynamic(import("../components/layout/Navbar.js"));
const Landing = dynamic(import("../components/Landing.js"));
const Experience = dynamic(import("../components/Experience.js"));
const Skills = dynamic(import("../components/Skills.js"));
const Project = dynamic(import("../components/projects/Project.js"));
const ContactMe = dynamic(import("../components/ContactMe"));
const Footer = dynamic(import("../components/layout/Footer"));

const Home = () => {
  const [loading, setLoading] = useState(null);
  const [display, setDisplay] = useState(null);
  useEffect(() => {
    setDisplay("none");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisplay(null);
    }, 5000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
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

        <meta property="og:image" content="/favicon.png" />

        <meta property="og:site_name" content="Rishabh Ajay's Homepage" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {loading ? (
        <Spinner />
      ) : (
        <div display={display}>
          <Navbar />
          <Landing />
          <CssBaseline />
          <Experience />
          <Skills />
          <Project />
          <ContactMe />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
