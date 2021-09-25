import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography, Button, CssBaseline } from "@mui/material";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
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
