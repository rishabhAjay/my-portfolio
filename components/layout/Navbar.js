import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/navigation";
const Navbar = ({ setShown }) => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" className={styles.navbarStyles}>
        <Toolbar>
          <Typography
            className={styles.navlinks}
            variant="body"
            sx={{ flexGrow: 1 }}
          >
            <a className={styles.navlinks} href="#landing">
              MY PORTFOLIO
            </a>
          </Typography>

          <Button
            color="inherit"
            onClick={() => {
              setShown((prev) => {
                return { ...prev, showSkills: true };
              });
              setTimeout(() => {
                router.push("/#skills");
              }, 400);
            }}
          >
            <a className={styles.navlinks}>Skills</a>
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setShown((prev) => {
                const hello = { ...prev, showProject: true };
                return hello;
              });
              setTimeout(() => {
                router.push("/#projects");
              }, 400);
            }}
          >
            <a className={styles.navlinks}>projects</a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
