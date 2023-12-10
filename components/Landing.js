import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DescriptionIcon from "@mui/icons-material/Description";
import { TypeAnimation } from "react-type-animation";
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
        <Avatar
          sx={{
            width: { xs: 220, sm: 190, md: 220 },
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <Image
            alt="Rishabh Ajay"
            src={avatarImageUri}
            width={200}
            height={220}
            loading="lazy"
          />
        </Avatar>
      </div>

      <Typography variant="h3" className={styles.landingText}>
        I am Rishabh Ajay
      </Typography>
      <Typography variant="h4" className={styles.landingTextSec}>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "A Software Engineer",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "A Full-Stack Developer",
            2000,
            "A Cybersecurity Aficionado",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
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
          href="https://drive.google.com/file/d/1C9ZBZ07P7HcXwhnFZVJi11B5NrIU3Yym/view?usp=drivesdk"
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
