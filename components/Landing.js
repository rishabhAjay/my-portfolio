import { Box } from "@mui/system";

import Button from "@mui/material/Button";
import { Typography, Avatar } from "@mui/material";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import Typical from "react-typical";

import "animate.css/animate.min.css";

import styles from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <Box
      id="landing"
      style={{
        backgroundImage: "url(landingImage5.webp)",
        width: "100%",
        height: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        textAlign: "center",
        marginTop: "-2rem !important",
      }}
    >
      <div className={styles.avatar}>
        <Avatar
          className="lazyload"
          sx={{ width: "10rem", height: "10rem" }}
          alt="Rishabh Ajay"
          src="/avatar.webp"
        />
      </div>

      <Typography variant="h3" className={styles.landingText}>
        I am Rishabh Ajay
      </Typography>
      <Typography variant="h4" className={styles.landingTextSec}>
        A{" "}
        <Typical
          loop={Infinity}
          steps={["Software Engineer", 2500, "Web Developer", 2500]}
          wrapper="b"
        />
      </Typography>

      <a
        style={{ textDecoration: "none" }}
        href="https://drive.google.com/file/d/11EixbfaT8jeB5Q9QSfcw0Em7KqJrZTH6/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
      >
        <Button
          variant="contained"
          size="small"
          className={styles.buttons}
          style={{ backgroundColor: "#0b0c61" }}
        >
          <DescriptionIcon />
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
          <ContactMailIcon />
          &nbsp; Contact Me
        </Button>
      </a>
    </Box>
  );
};

export default Landing;
