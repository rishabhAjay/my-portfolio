import AppBar from "@mui/material/AppBar";
import Link from "next/link";

import { Box, Toolbar, Typography, Button, CssBaseline } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.navbarStyles}>
        <Toolbar>
          <Link passHref={true} href="/">
            <Typography
              className={styles.navlinks}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <HomeIcon style={{ fontSize: "2rem" }} />
            </Typography>
          </Link>

          <Button color="inherit">
            <a className={styles.navlinks} href="#skills">
              Skills
            </a>
          </Button>
          <Button color="inherit">
            <a className={styles.navlinks} href="#projects">
              projects
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
