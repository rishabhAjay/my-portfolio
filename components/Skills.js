import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import usePagination from "./functions/Pagination.js";
import skills from "./data/SkillsData.js";
import Image from "next/image.js";
import Spinner from "./layout/Spinner.js";
import spinnerStyles from "../styles/Spinner.module.css";

const Skills = () => {
  const [itemData, setItemData] = useState(skills);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  const count = Math.ceil(itemData.length / PER_PAGE);
  const Data = usePagination(itemData, PER_PAGE);
  const handleChange = (e, p) => {
    setPage(p);
    Data.jump(p);
  };

  useEffect(() => {
    setLoading(true);
  }, [page]);
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
        <Box
          data-aos="slide-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            p: 3,
          }}
        >
          <Pagination
            className="pagination"
            count={count}
            size="large"
            page={page}
            color="secondary"
            sx={{ color: "primary.main" }}
            onChange={handleChange}
          />
        </Box>
        <div>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            style={{ padding: "2rem 5rem 5rem 5rem" }}
          >
            {Data.currentData().map((item, i) => (
              <Grid key={item.id} item xs={12} md={4} sm={6}>
                {loading && (
                  <Spinner
                    size={40}
                    color="white"
                    style={spinnerStyles.imageLoader}
                  />
                )}
                <Card
                  sx={{
                    maxWidth: "100%",
                  }}
                  style={{
                    backgroundColor: "inherit",
                    boxShadow: "none",
                    visibility: loading && "hidden",
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
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          data-aos="slide-up"
                          width={110}
                          objectFit="contain"
                          height={110}
                          src={item.img}
                          quality={90}
                          alt="skills"
                          loading="lazy"
                          onLoad={() => setLoading(false)}
                        />
                      </div>
                      <Typography
                        data-aos="slide-up"
                        className="bodyFont"
                        variant="h6"
                        style={{
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </a>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box dire></Box>
        </div>
      </div>
    </>
  );
};

export default Skills;
