import React from "react";
import { CssBaseline, Typography, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div
      className="bodyFont"
      style={{
        background: `rgb(14,14,14)`,
        background: `linear-gradient(180deg, rgba(14,14,14,1) 0%, rgba(29,29,29,1) 56%, rgba(69,67,67,1) 100%)`,
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Stack direction="row" spacing={10}>
          <Link
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/rishabhAjay"
            target="_blank"
          >
            <GitHubIcon className="footerIcons" />
          </Link>
          <Link
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/rishabhajay/"
            target="_blank"
          >
            <LinkedInIcon className="footerIcons" />
          </Link>

          <Link
            href="mailto: rishabhajay24@gmail.com"
            style={{ color: "white" }}
          >
            <EmailIcon className="footerIcons" />
          </Link>
        </Stack>
      </div>
      <div style={{ color: "white", textAlign: "center" }}>
        <Typography variant="body" align="center" component="div">
          Made with Next.js & Material UI
        </Typography>

        <a
          href="https://unsplash.com/photos/Q1p7bh3SHj8"
          style={{ color: "white", fontSize: "0.8rem" }}
          rel="noreferrer"
          target="_blank"
        >
          Landing Image Courtesy
        </a>
        <Typography
          style={{ paddingBottom: "15px" }}
          className="bodyFont"
          variant="body2"
          align="center"
          component="div"
        >
          <CopyrightIcon fontSize="small" style={{ marginBottom: "-5px" }} />{" "}
          <CssBaseline /> Rishabh Ajay&nbsp;{new Date().getFullYear()}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
