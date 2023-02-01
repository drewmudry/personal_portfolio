import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="black">

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2022"
          iconStyle={{ background: "#00f2ea", color: "black" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            Arizona State University
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p> Computer Systems Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "black", color: "#00f2ea" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            FIT Application Engineering Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            ON Semiconductor
          </h4>
          <p>Validate and test the FIT application through collaboration with <br/>the Power MOSFET new product development team.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Summer 2022 - present"
          iconStyle={{ background: "#00f2ea", color: "black" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Here Technologies
          </h4>
          <p>
            Develop thoroughly tested C++ code and custom unit tests for the
            lane derivation CI/CD pipeline.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;