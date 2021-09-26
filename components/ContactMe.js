import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";

import emailjs from "emailjs-com";

const Notif = dynamic(import("./layout/Notif"));

const ContactMe = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "gmail",
        "gmail_template_1",
        e.target,
        "user_bOO0ZiXPVubItFZHXNlPB"
      );

      e.target.reset();
      setOpen(true);
      setError(false);
    } catch (error) {
      e.target.reset();
      setOpen(true);
      setError(true);
    }
  };

  return (
    <>
      <div
        style={{
          background: "rgb(28,26,26)",
          background:
            "linear-gradient(180deg, rgba(28,26,26,1) 0%, rgba(88,4,4,1) 42%, rgba(29,27,27,1) 100%)",
          overflow: "hidden",
        }}
        id="contact"
      >
        <Typography
          data-aos="slide-up"
          data-aos-offset="100"
          variant="h4"
          className="headings"
        >
          CONTACT ME
        </Typography>

        <div
          data-aos="slide-up"
          data-aos-offset="200"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 0 4rem 0",
          }}
        >
          <Card sx={{ maxWidth: 275, backgroundColor: "#b9babd" }}>
            <CardContent>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                autoComplete="off"
                onSubmit={sendEmail}
              >
                <TextField
                  type="text"
                  label="Name"
                  variant="outlined"
                  name="name"
                  required
                />
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  placeholder="Enter email"
                  name="email"
                  required
                />
                <TextField
                  label="Message"
                  placeholder="Enter Message"
                  name="message"
                  variant="outlined"
                  multiline
                  required
                />
                <CardActions>
                  <Button
                    className="contactBtn"
                    type="submit"
                    size="small"
                    value="Send"
                  >
                    Send
                  </Button>
                </CardActions>
              </Box>
            </CardContent>
          </Card>
        </div>
      </div>

      {open === true && error === false && (
        <Notif
          open={open}
          severity={"success"}
          message={"Message sent successfully!"}
          handleClose={handleClose}
        />
      )}
      {open === true && error === true && (
        <Notif
          open={open}
          severity={"error"}
          message={"An Error occurred!"}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default ContactMe;
