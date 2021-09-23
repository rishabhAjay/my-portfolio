import { Box } from "@mui/system";

import Button from "@mui/material/Button";
import { Typography, Avatar } from "@mui/material";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import Typical from "react-typical";

import "aos/dist/aos.css";
import "animate.css/animate.min.css";

import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <Box
      bg
      style={{
        backgroundImage: "url(landingImage3.jpg)",
        height: "33rem !important",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        marginTop: "-2rem !important",
      }}
    >
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

      <Typography data-aos="fade" variant="h3" className={styles.landingText}>
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
        href="https://drive.google.com/file/d/1PvW_kq_KOuMpRxiGkgODQ4ktQ9kUqE_q/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        <Button
          variant="contained"
          size="small"
          className={styles.buttons}
          style={{ backgroundColor: "#0b0c61" }}
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
          style={{ backgroundColor: "#6b0b0b" }}
        >
          <ContactMailIcon style={{ marginBottom: "5px" }} />
          &nbsp; Contact Me
        </Button>
      </a>
    </Box>
  );
};

export default Landing;
