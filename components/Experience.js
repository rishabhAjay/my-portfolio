import { useState } from "react";
import dynamic from "next/dynamic";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Typography } from "@mui/material";
import experience from "./data/ExperienceData";
const Experience = () => {
  const [timelines, setTimelines] = useState(experience);

  return (
    <div
      className="bodyFont"
      style={{
        background: "rgb(28,26,26)",
        background:
          "linear-gradient(180deg, rgba(28,26,26,1) 0%, rgba(8,4,88,1) 42%, rgba(29,27,27,1) 100%)",
        overflow: "hidden",
        height: "100%",
      }}
      id="timeline"
    >
      <Typography data-aos="slide-up" variant="h4" className="headings">
        TIMELINE
      </Typography>
      <div style={{ padding: "0 1rem 0 1rem" }}>
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
                contentStyle={{ background: "#947507", color: "#fff" }}
                date={timeline.date}
                iconStyle={{ background: "#947507", color: "#fff" }}
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
    </div>
  );
};

export default Experience;
