import React, { useState, useRef } from "react";
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
  const form = useRef();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const res = await emailjs.sendForm(
        "gmail",
        "gmail_template_1",
        form.current,
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
          background: "rgb(84,3,3)",
          background:
            "linear-gradient(180deg, rgba(84,3,3,1) 0%, rgba(55,3,3,1) 35%, rgba(40,1,1,1) 100%)",
        }}
        id="contact"
      >
        <Typography data-aos="fade" variant="h4" className="headings">
          CONTACT ME
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0 0 4rem 0",
          }}
        >
          <div data-aos="fade">
            <Card sx={{ maxWidth: 275, backgroundColor: "#b9babd" }}>
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  autoComplete="off"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <TextField
                    type="text"
                    label="Your Name"
                    variant="outlined"
                    name="name"
                    required
                  />
                  <TextField
                    type="email"
                    label="Your Email"
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
