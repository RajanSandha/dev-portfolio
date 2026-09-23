import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raj Kumar</span> from{" "}
            <span className="purple">Mohali, Punjab, India</span>.
            <br />
            <br />
            I am currently working as an{" "}
            <span className="purple">Associate Software Engineer</span> at{" "}
            <span className="purple">Luminoguru Pvt Ltd</span>, specializing in
            building robust full-stack web and mobile applications.
            <br />
            <br />
            I hold a{" "}
            <span className="purple">
              Master of Computer Applications (MCA)
            </span>{" "}
            from Maharaja Ranjeet Singh Punjab Technical University (Grade A)
            and a{" "}
            <span className="purple">
              Bachelor of Computer Applications (BCA)
            </span>{" "}
            from Panjab University.
            <br />
            <br />
            My technical focus encompasses architecting scalable systems with
            React, React Native, NestJS, TypeScript, Python, Shopify ecosystem,
            and cutting-edge AI product development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring &amp; Experimenting with AI Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing Mobile Apps &amp; Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Codebases
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Driven by curiosity, powered by code — building solutions that create real impact."{" "}
          </p>
          <footer className="blockquote-footer">Raj Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
