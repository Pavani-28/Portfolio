import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi!!, I am <span className="purple">Pavani Muthyam </span>
            from <span className="purple"> Bangalore, India.</span>
            <br /><br/>
            <span className="purple">Education</span>
            <br/>B.Tech in Computer Science and Engineering
            <br/>
            Sree Vidyanikethan Engineering College (2020–2024) - CGPA: 9.4
            <br/><br/>
            <span className="purple">Professional Experience</span>
            <br/> Associate Software Engineer at Accenture (Aug 2024 – Present)
            <br />
            Working on GMAS (Group Maritime Assurance System)<br/>A vessel clearance and vetting applicaion
            <br />
            <br />
            Apart from coding, some <span className="purple">Other Activities</span> that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving to build solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Pavani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
