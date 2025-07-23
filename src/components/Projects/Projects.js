import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import scheduler from "../../Assets/Projects/scheduler.jpeg";
import dashboardimg from "../../Assets/Projects/dashboardimg.jpg";




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
              description="A full-stack healthcare platform enabling 24/7 appointment scheduling with licensed professionals.
        Built secure user authentication and real-time booking using React and Node.js. Integrated MongoDB 
        for prescription and patient profile management.      
"
              ghLink="https://github.com/Pavani-28/swift_scheduler"

            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboardimg}
              isBlog={false}
              title="Admin Dashboard"
              description="Developed a responsive dashboard using ReactJS and Material-UI (MUI) to visualize real-time analytics. 
              Integrated charts, tables, and widgets to enhance data accessibility for non-technical users.
Implemented efficient state management and API integration for dynamic data fetching and filtering."
              ghLink="https://github.com/Pavani-28/Admin_Dashboard"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
