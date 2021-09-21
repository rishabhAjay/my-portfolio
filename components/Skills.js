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
    },
    {
      img: "/express.png",
      title: "Express.js",
    },
    {
      img: "/react.png",
      title: "React.js",
    },
    {
      img: "/node.png",
      title: "Node.js",
    },
    {
      img: "/git.png",
      title: "Git",
    },
    {
      img: "/python.png",
      title: "Python",
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
                <CardActionArea>
                  <CardMedia
                    style={{
                      objectFit: "contain",
                    }}
                    component="img"
                    height="100"
                    image={item.img}
                    alt="green iguana"
                  />
                </CardActionArea>
                <Typography
                  className="bodyFont"
                  variant="h6"
                  style={{ textAlign: "center", color: "white" }}
                >
                  {item.title}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Skills;
