import React, { useState } from "react";
import {
  Card,
  Grid,
  CardMedia,
  CardActionArea,
  Typography,
} from "@mui/material";

const Skills = () => {
  const [itemData, setItemData] = useState([
    {
      img: "/mongodb.png",
      title: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      img: "/express.png",
      title: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      img: "/react.png",
      title: "React.js",
      link: "https://reactjs.org/",
    },
    {
      img: "/node.png",
      title: "Node.js",
      link: "https://expressjs.com/",
    },
    {
      img: "/git.png",
      title: "Git",
      link: "https://git-scm.com/",
    },
    {
      img: "/python.png",
      title: "Python",
      link: "https://www.python.org/",
    },
  ]);
  return (
    <div
      id="skills"
      style={{
        background: "rgb(84,3,3)",
        background:
          "linear-gradient(180deg, rgba(84,3,3,1) 0%, rgba(55,3,3,1) 35%, rgba(40,1,1,1) 100%)",
      }}
    >
      <Typography data-aos="fade" variant="h4" className="headings">
        SKILLS
      </Typography>
      <div data-aos="fade">
        <Grid
          container
          rowSpacing={6}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          style={{ padding: "0 5rem 5rem 5rem" }}
        >
          {itemData.map((item, i) => (
            <Grid key={item.title} item xs={12} md={4} sm={6}>
              <Card
                sx={{
                  maxWidth: "100%",
                }}
                style={{
                  backgroundColor: "inherit",
                  boxShadow: "none",
                }}
              >
                <CardActionArea className="cardAction">
                  <a
                    style={{ textDecoration: "none" }}
                    rel="noreferrer"
                    target="_blank"
                    href={item.link}
                  >
                    <CardMedia
                      style={{
                        objectFit: "contain",
                      }}
                      component="img"
                      height="100"
                      image={item.img}
                      alt="skills"
                    />

                    <Typography
                      className="bodyFont"
                      variant="h6"
                      style={{ textAlign: "center", color: "white" }}
                    >
                      {item.title}
                    </Typography>
                  </a>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
