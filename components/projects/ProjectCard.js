import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import styles from "../../styles/Projects.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";

import Chip from "@mui/material/Chip";
const ProjectCard = ({ item }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 300,
          backgroundColor: "#807d7d",
          color: "white",
        }}
      >
        <CardMedia
          className="lazyload"
          component="img"
          alt="Project Image"
          style={{ height: 150 }}
          image={item.image}
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
    </>
  );
};

export default ProjectCard;
