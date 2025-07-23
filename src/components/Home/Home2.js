import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A quick <span className="purple"> INTRO </span> 
            </h1>
            <p className="home-about-body">
              💻 Software Development Engineer with a passion for clean, impactful code<br/><br/>

🔁 Experienced in full-stack development: .NET, C#, SQL, JavaScript<br/><br/>

🚀 Building scalable, user-friendly solutions in agile teams<br/><br/>

🌱 Lifelong learner who loves debugging and delivering value<br/><br/>

🎯 On a mission to turn real-world challenges into elegant software<br/><br/>

🧠 Love solving problems that need both logic and creativity<br/><br/>

              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                   href="https://www.linkedin.com/in/pavani-muthyam-b105a5253"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/Pavani-28"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>               
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
