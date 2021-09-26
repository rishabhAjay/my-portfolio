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
      img: "/mongodb.webp",
      title: "MongoDB",
      link: "https://www.mongodb.com/",
    },
    {
      img: "/express.webp",
      title: "Express.js",
      link: "https://expressjs.com/",
    },
    {
      img: "/react.webp",
      title: "React.js",
      link: "https://reactjs.org/",
    },
    {
      img: "/node.webp",
      title: "Node.js",
      link: "https://expressjs.com/",
    },
    {
      img: "/git.webp",
      title: "Git",
      link: "https://git-scm.com/",
    },
    {
      img: "/python.webp",
      title: "Python",
      link: "https://www.python.org/",
    },
  ]);
  return (
    <>
      <div
        id="skills"
        style={{
          background: "rgb(28,26,26)",
          background:
            "linear-gradient(180deg, rgba(28,26,26,1) 0%, rgba(88,4,4,1) 42%, rgba(29,27,27,1) 100%)",
        }}
      >
        <Typography data-aos="slide-up" variant="h4" className="headings">
          SKILLS
        </Typography>
        <div>
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
                      style={{
                        textDecoration: "none",
                      }}
                      rel="noreferrer"
                      target="_blank"
                      href={item.link}
                    >
                      <CardMedia
                        data-aos="slide-up"
                        className="lazyload"
                        style={{
                          objectFit: "contain",
                        }}
                        component="img"
                        height="100"
                        image={item.img}
                        alt="skills"
                      />

                      <Typography
                        data-aos="slide-up"
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
    </>
  );
};

export default Skills;
