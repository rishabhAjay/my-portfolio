import { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";

/* background: `rgb(135,22,22)`,
background: `linear-gradient(180deg, rgba(135,22,22,1) 0%, rgba(116,24,24,1) 35%, rgba(79,18,18,1) 100%)`; */

const Experience = () => {
  const [timelines, setTimelines] = useState([
    {
      title: "Our Own English High School",
      location: "Sharjah, UAE",
      designation: "10th Grade",
      date: "2015-2016",
    },
    {
       title: "Our Own English High School",
      location: "Sharjah, UAE",
      designation: "10th Grade",
      date: "2015-2016",
    },
    {
      title: "Our Own English High School",
      location: "Sharjah, UAE",
      designation: "10th Grade",
      date: "2015-2016",
    },
  ]);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="bodyFont"
      style={{
        background: "rgb(3,19,73)",
        background:
          "linear-gradient(180deg, rgba(3,19,73,1) 0%, rgba(3,30,57,1) 35%, rgba(1,8,40,1) 100%)",
        overflow: "hidden",
        height: "100%",
      }}
      id="timeline"
    >
      <Typography variant="h4" className="headings">
        TIMELINE
      </Typography>

      <VerticalTimeline>
        {timelines.map((timeline, i) =>
          i % 2 === 0 ? (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#086373", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={timeline.date}
              iconStyle={{ background: "#086373", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                {timeline.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {timeline.location}
              </h4>
              <p>{timeline.designation}</p>
            </VerticalTimelineElement>
          ) : (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#c9a30c", color: "#fff" }}
              date={timeline.date}
              iconStyle={{ background: "#c9a30c", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                {" "}
                {timeline.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {timeline.location}
              </h4>
              <p>{timeline.designation}</p>
            </VerticalTimelineElement>
          )
        )}
        <VerticalTimelineElement
          iconStyle={{ background: "#a30707", color: "#fff" }}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
