import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scheduler from "../../Assets/Projects/scheduler.jpeg";




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
              imgPath={scheduler}
              isBlog={false}
              title="Swift Scheduler"
              description="Experience hassle-free healthcare with Swift Scheduler.Connect with licensed professionals through 24/7 appointment scheduling, and prescription management."
              ghLink="https://github.com/Pavani-28/swift_scheduler"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
