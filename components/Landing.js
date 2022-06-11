import { Box } from "@mui/system";

import Button from "@mui/material/Button";
import { Typography, Avatar, Stack } from "@mui/material";

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
          sx={{ width: "11rem", height: "auto" }}
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
      <Stack
        justifyContent={"center"}
        alignItems="center"
        direction={"row"}
        // spacing={{ xs: 1, sm: 2, md: 4 }}
        // spacing={1}
      >
        <a
          style={{ textDecoration: "none" }}
          href="https://drive.google.com/file/d/1b8kmPfi_vyzJysursWClCknsNz3KqBKD/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
        >
          <Button
            variant="contained"
            size="small"
            startIcon={<DescriptionIcon />}
            className={styles.buttons}
            style={{ backgroundColor: "#0b0c61" }}
          >
            View my Resume
          </Button>
        </a>
        <a href="#contact" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            startIcon={<ContactMailIcon />}
            size="small"
            className={styles.buttons}
            style={{ backgroundColor: "#6b0b0b" }}
          >
            Contact Me
          </Button>
        </a>
      </Stack>
    </Box>
  );
};

export default Landing;
