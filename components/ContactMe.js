import React, { useState, useRef } from "react";
import {
  Box,
  Card,
  Snackbar,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import emailjs from "emailjs-com";

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
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "gmail_template_1",
        form.current,
        "user_bOO0ZiXPVubItFZHXNlPB"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setOpen(true);
          setError(false);
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          setOpen(true);
          setError(true);
        }
      );
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
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
            <Card sx={{ maxWidth: 275, backgroundColor: "#b6c7cc" }}>
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
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Message sent successfully!
          </Alert>
        </Snackbar>
      )}
      {open === true && error === true && (
        <Snackbar open={true} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            An Error occurred
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default ContactMe;
