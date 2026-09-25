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
            I have <span className="purple">8+ years of experience</span> as a{" "}
            <span className="purple">Lead Backend Engineer &amp; Systems Architect</span>,
            currently engineering distributed platforms at <span className="purple">Luminoguru Pvt Ltd</span>.
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
            My primary architectural focus centers on:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Distributed Microservices &amp; Async Queue Pipelines (Python/FastAPI, NestJS)
            </li>
            <li className="about-activity">
              <ImPointRight /> Enterprise Protocols &amp; Integrations (X12 EDI, AS2 Cryptography, Xero, PRODA/CCS)
            </li>
            <li className="about-activity">
              <ImPointRight /> Provider-Agnostic Generative AI &amp; Vision Pipelines (Gemini, ComfyUI, OpenCV)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
            "Designing systems built for extreme reliability, throughput, and scale."{" "}
          </p>
          <footer className="blockquote-footer">Raj Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
