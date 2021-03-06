import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import Typical from "react-typical";
import styles from "../styles/Landing.module.css";
import Image from "next/image";
import { avatarImageUri, landingImageUri } from "./imageStrings";
const Landing = () => {
  return (
    <>
      <div className={styles.landing}>
        <Image
          alt="landing image"
          src={landingImageUri}
          id="landing"
          layout="fill"
          objectFit="cover"
          quality={80}
          loading="eager"
        />
      </div>

      <div className={styles.avatar}>
        <Avatar sx={{ width: { xs: 180, sm: 180, md: 200 }, height: "auto" }}>
          <Image
            alt="Rishabh Ajay"
            src={avatarImageUri}
            width={200}
            height={200}
            loading="eager"
          />
        </Avatar>
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
          href="https://drive.google.com/file/d/1u7f8iFwfi7w-RyZXop4K7Iv6TTYX-dcg/view?usp=sharing"
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
    </>
  );
};

export default Landing;
