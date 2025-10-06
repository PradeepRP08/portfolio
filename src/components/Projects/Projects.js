import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/ipl2.webp";
import bitsOfCode from "../../Assets/Projects/jp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IPL Winner Prediction"
              description="The IPL Winner Prediction project uses machine learning techniques to analyze historical match data, player performance, and team statistics. It predicts the probable winner of upcoming matches with data-driven insights and visualization support."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Job Portal"
              description="The Job Portal project is a full-stack web application that connects job seekers with employers. It enables posting and managing job listings, applying for jobs, and streamlining the recruitment process."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
