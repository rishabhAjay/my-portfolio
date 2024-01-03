import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Image from "next/image";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import styles from "../../styles/Projects.module.css";
import spinnerStyles from "../../styles/Spinner.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

import Chip from "@mui/material/Chip";
import Spinner from "../layout/Spinner";
import { useState } from "react";
const ProjectCard = ({ item }) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && (
        <Spinner size={40} color="white" style={spinnerStyles.imageLoader} />
      )}
      <Card
        sx={{
          visibility: loading && "hidden",
          margin: "0 5% 0 5%",
          backgroundColor: "#807d7d",
          color: "white",
        }}
      >
        <Image
          alt="Project Image"
          height={600}
          width={1000}
          quality={100}
          objectFit="cover"
          src={item.image}
          layout="responsive"
          loading="lazy"
          onLoad={() => setLoading(false)}
        />

        <CardContent>
          <Typography
            className="bodyFont"
            style={{ color: "white" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {item.project}
          </Typography>
          <Typography
            className="bodyFont"
            style={{ color: "white" }}
            variant="body2"
            color="text.secondary"
          >
            {item.description}
          </Typography>
          {item.techs.map((tech, i) => (
            <Chip
              className="bodyFont"
              variant="outlined"
              style={{
                margin: "10px 0.8px 0 0.8px",
                color: "white",
                borderColor: "white",
              }}
              key={i}
              label={tech}
            />
          ))}
        </CardContent>
        <CardActions>
          <a
            className={styles.githubLink}
            rel="noreferrer"
            style={{}}
            href={`${item.link}`}
            target="_blank"
          >
            <GitHubIcon style={{ marginBottom: "-4px" }} /> Github
          </a>
        </CardActions>
      </Card>
      <br />
    </>
  );
};

export default ProjectCard;
