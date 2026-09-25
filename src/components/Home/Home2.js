import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              With <b>8+ years</b> of engineering experience, I specialize in architecting
              resilient distributed backends, asynchronous messaging pipelines, and scalable enterprise platforms.
              <br />
              <br />I primarily engineer in
              <i>
                <b className="purple"> Python (FastAPI, AsyncIO), TypeScript, Node.js (NestJS), and SQL </b>
              </i>
              with a laser focus on high-throughput services, transactional integrity, and low-latency APIs.
              <br />
              <br />
              My core domains of expertise span
              <i>
                <b className="purple"> Enterprise Middleware, Cryptographic Protocols (AS2 &amp; X12 EDI), </b>
              </i>
              multi-tenant cloud architectures, and real-time event systems with
              <i>
                <b className="purple"> Socket.IO, Redis, and BullMQ/ARQ queues.</b>
              </i>
              <br />
              <br />
              I also build production-grade
              <b className="purple"> Generative AI &amp; Vision Pipelines</b> — including
              provider-agnostic model orchestration (Gemini, ComfyUI, Decart) and automated vectorization engines.
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
                  href="https://github.com/RajanSandha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajansandha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
