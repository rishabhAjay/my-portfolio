import React, { useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import ProjectsData from "../data/ProjectsData.js";
const Carousel = dynamic(import("react-elastic-carousel"));

const ProjectCard = dynamic(import("./ProjectCard.js"));

const Project = (props) => {
  const [items, setItems] = useState(ProjectsData);

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
