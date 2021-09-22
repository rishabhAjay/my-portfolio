import Head from "next/head";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/system";

import Button from "@mui/material/Button";
import { Typography, Avatar, CssBaseline } from "@mui/material";
import Zoom from "@mui/material/Fade";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import Typical from "react-typical";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";

const Spinner = dynamic(import("../components/layout/Spinner.js"));
const Navbar = dynamic(import("../components/layout/Navbar.js"));
const Experience = dynamic(import("../components/Experience.js"));
const Skills = dynamic(import("../components/Skills.js"));
const Project = dynamic(import("../components/projects/Project.js"));
const ContactMe = dynamic(import("../components/ContactMe"));
const Footer = dynamic(import("../components/layout/Footer"));

import styles from "../styles/Landing.module.css";
/*Photo by <a href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Florian Olivo</a> on <a href="https://unsplash.com/s/photos/coding-dark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
 */

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Head>
        <title>Rishabh Ajay | Portfolio</title>
      </Head>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />

          <Box className={styles.landingImage}>
            <div data-aos="fade" className={styles.avatar}>
              {/* <Zoom in="true" style={{ transitionDelay: "300ms" }}> */}
              <Avatar
                data-aos-easing="ease-out"
                sx={{ width: "8.5rem", height: "8.5rem" }}
                alt="Rishabh Ajay"
                src="/avatar.png"
              />
              {/* </Zoom> */}
            </div>

            <Typography
              data-aos="fade"
              variant="h3"
              className={styles.landingText}
            >
              I am Rishabh Ajay
            </Typography>
            <Typography
              data-aos="fade"
              variant="h4"
              className={styles.landingTextSec}
            >
              A{" "}
              <Typical
                loop={Infinity}
                steps={["Software Engineer", 1500, "Web Developer", 1500]}
                wrapper="b"
              />
            </Typography>
            <a
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1pTRg4or4qzXabjIuTsINCRCjIkCLDEBF/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              <Button
                variant="contained"
                size="small"
                className={styles.buttons}
                style={{ backgroundColor: "#1b70f7" }}
              >
                <DescriptionIcon style={{ marginBottom: "5px" }} />
                &nbsp; View my Resume
              </Button>
            </a>
            <a href="#contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="small"
                className={styles.buttons}
                style={{ backgroundColor: "#ed4a2d" }}
              >
                <ContactMailIcon style={{ marginBottom: "5px" }} />
                &nbsp; Contact Me
              </Button>
            </a>
          </Box>

          <CssBaseline />
          <Experience />

          <Skills />
          <Project />
          <ContactMe />
          <Footer />
        </>
      )}
    </>
  );
}
