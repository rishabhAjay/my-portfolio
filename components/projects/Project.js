import React, { useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@mui/material/Typography";
import ProjectsData from "../data/ProjectsData.js";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton } from "@mui/material";
import ProjectCard from "./ProjectCard.js";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import styles from "../../styles/Projects.module.css";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 100,
        top: 180,
        left: 0,
        right: 0,
      }}
    >
      <IconButton
        className={`${styles["custom-left-arrow"]} ${
          currentSlide === 0 ? "disable" : ""
        }`}
        onClick={previous}
      >
        <ArrowBackIosOutlinedIcon />
      </IconButton>

      <IconButton
        className={`${styles["custom-right-arrow"]} ${
          currentSlide === 0 ? "disable" : ""
        }`}
        onClick={next}
      >
        <ArrowForwardIosOutlinedIcon />
      </IconButton>
    </Box>
  );
};

const Project = (props) => {
  const [items, setItems] = useState(ProjectsData);

  const breakPoints = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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

        <Box
          sx={{
            margin: "0 10% 0 10%",
          }}
          data-aos="slide-up"
        >
          <Carousel
            arrows={false}
            customButtonGroup={<ButtonGroup />}
            responsive={breakPoints}
            showDots={true}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
          >
            {items.map((item, i) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </Carousel>
        </Box>
      </div>
    </>
  );
};

export default Project;
