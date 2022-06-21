import React, { useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
const Carousel = dynamic(import("react-elastic-carousel"));

const ProjectCard = dynamic(import("./ProjectCard.js"));

const Project = (props) => {
  const [items, setItems] = useState([
    {
      id: 1,
      project: "Location Tracker",
      description:
        "A location tracker based on JavaScript's Geolocation API that takes touch sensing as an input. ",
      techs: ["Bolt API", "Node.js", "Express"],
      link: "https://github.com/rishabhAjay/bolt-iot-location-tracker",
      image: "/iot3.webp",
    },
    {
      id: 2,
      project: "E-Commerce Website",
      description:
        "An E-commerce website primarily involving the Frontend design and functionalities. Has a Login/Register system. ",
      techs: ["Bootstrap", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/rishabhAjay/exceptionalHandlersIC",
      image: "/cart.webp",
    },
    {
      id: 3,
      project: "Typing Game ",
      description:
        "A typing game built with the MERN stack. Uses JWT for Authentication. ",
      techs: ["React", "Node.js", "MongoDB", "Express"],
      link: "https://github.com/rishabhAjay/word-race",
      image: "/Game.webp",
    },
    {
      id: 4,
      project: "Lights Off ",
      description:
        "A Discord Bot that inverts the colors or grayscales an image. Useful for light-mode images. ",
      techs: ["Discord.js", "Node.js", "Puppeteer"],
      link: "https://github.com/rishabhAjay/lightsoff",
      image: "/LightsOff.webp",
    },
    {
      id: 5,
      project: "Patient Record System",
      description:
        "A CRUD application that allows clinic staff members to add, delete, update and view patient Details. ",
      techs: ["Node.js", "Express", "EJS", "MySQL"],
      link: "https://github.com/rishabhAjay/patient-record-maintenance",
      image: "/registration.webp",
    },
    {
      id: 6,
      project: "Circular Buffer Simulation ",
      description:
        "A computer graphics project that simulates the working of a Circular Queue. ",
      techs: ["OpenGL", "GLUT"],
      link: "https://github.com/rishabhAjay/circularBufferOpenGL",
      image: "/queue.webp",
    },
  ]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 4 },
  ];

  return (
    <>
      <div
        id="projects"
        style={{
          background: "rgb(28,26,26)",
          background:
            "linear-gradient(180deg, rgba(28,26,26,1) 0%, rgba(8,4,88,1) 42%, rgba(29,27,27,1) 100%)",
          paddingBottom: "3rem",
        }}
      >
        <Typography data-aos="slide-up" className="headings" variant="h4">
          PROJECTS
        </Typography>

        <div data-aos="slide-up">
          <Carousel breakPoints={breakPoints}>
            {items.map((item, i) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Project;
