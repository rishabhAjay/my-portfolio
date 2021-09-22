import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Typography } from "@mui/material";
import Carousel from "react-elastic-carousel";

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
      project: "Patient Record System",
      description:
        "A CRUD application that allows clinic staff members to add, delete, update and view patient Details. ",
      techs: ["Node.js", "Express", "EJS", "MySQL"],
      link: "https://github.com/rishabhAjay/patient-record-maintenance",
      image: "/registration.webp",
    },
    {
      id: 4,
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
    <div
      id="projects"
      style={{
        background: "rgb(3,19,73)",
        background:
          "linear-gradient(180deg, rgba(3,19,73,1) 0%, rgba(3,30,57,1) 35%, rgba(1,8,40,1) 100%)",
        paddingBottom: "3rem",
      }}
    >
      <Typography data-aos="fade" variant="h4" className="headings">
        PROJECTS
      </Typography>
      <div className="rec">
        <div data-aos="fade">
          <Carousel breakPoints={breakPoints}>
            {items.map((item, i) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Project;
