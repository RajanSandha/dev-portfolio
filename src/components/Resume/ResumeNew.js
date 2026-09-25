import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Raj_Kumar_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          {/* Top Download Button */}
          <Row style={{ justifyContent: "center", position: "relative", marginBottom: "25px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              download="Raj_Kumar_Resume.pdf"
              style={{ maxWidth: "260px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume (PDF)
            </Button>
          </Row>

          {/* Resume Paper View */}
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Col md={10} lg={9}>
              <div
                style={{
                  background: "#ffffff",
                  color: "#1a1a2e",
                  padding: "50px 45px",
                  borderRadius: "10px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
                  lineHeight: "1.6",
                  maxWidth: "850px",
                  margin: "0 auto",
                  textAlign: "left",
                }}
                id="resume-content"
              >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <h1
                    style={{
                      fontSize: "2.2em",
                      fontWeight: "700",
                      color: "#1a1a2e",
                      margin: "0 0 5px 0",
                      letterSpacing: "1px",
                    }}
                  >
                    RAJ KUMAR
                  </h1>
                  <p
                    style={{
                      fontSize: "1.1em",
                      color: "#6c63ff",
                      fontWeight: "600",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Lead Backend Engineer &amp; Systems Architect
                  </p>
                  <p
                    style={{
                      fontSize: "0.9em",
                      color: "#555",
                      margin: "0",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: "6px 14px",
                    }}
                  >
                    <span>📍 Mohali, Punjab, India</span>
                    <span>📞 +91 98350 04000</span>
                    <span>
                      ✉️{" "}
                      <a href="mailto:rajatworkplace@gmail.com" style={{ color: "#6c63ff", textDecoration: "none" }}>
                        rajatworkplace@gmail.com
                      </a>
                    </span>
                    <span>
                      🔗{" "}
                      <a href="https://linkedin.com/in/rajansandha" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                        linkedin.com/in/rajansandha
                      </a>
                    </span>
                    <span>
                      💻{" "}
                      <a href="https://github.com/RajanSandha" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                        github.com/RajanSandha
                      </a>
                    </span>
                  </p>
                </div>

                <hr
                  style={{
                    border: "none",
                    borderTop: "2px solid #6c63ff",
                    margin: "18px 0",
                  }}
                />

                {/* Professional Summary */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>PROFESSIONAL SUMMARY</h2>
                  <p style={{ fontSize: "0.95em", color: "#333", margin: 0, textAlign: "justify" }}>
                    Accomplished <strong>Lead Backend Engineer &amp; Systems Architect</strong> with <strong>8+ years of experience</strong> designing, scaling, and maintaining resilient distributed architectures, asynchronous message pipelines, and high-concurrency microservices. Core expertise in <strong>Python 3.12 (FastAPI, AsyncIO), TypeScript, Node.js, NestJS, and Go/PHP</strong>, with deep specialization in enterprise middleware: multi-tenant <strong>X12 EDI &amp; AS2 cryptographic transports</strong>, <strong>Xero accounting/payroll sync</strong>, real-time <strong>Socket.IO &amp; WebSockets</strong>, and provider-agnostic <strong>Generative AI model orchestration</strong> (Gemini, ComfyUI, OpenAI).
                  </p>
                </div>

                {/* Technical Skills */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>TECHNICAL COMPETENCIES</h2>
                  <table
                    style={{
                      width: "100%",
                      fontSize: "0.9em",
                      borderCollapse: "collapse",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td style={skillLabel}>Backend &amp; Arch:</td>
                        <td style={skillValue}>
                          NestJS 11, FastAPI (AsyncIO), Node.js, AdonisJS v6, Express.js, Microservices, Event-Driven Systems, REST, WebSockets, Socket.IO
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Languages:</td>
                        <td style={skillValue}>
                          Python 3.12, TypeScript, JavaScript (ES6+), PHP, Java, SQL, C++, Bash/Shell scripting
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Protocols:</td>
                        <td style={skillValue}>
                          X12 EDI (850, 945, 944, 810, 997, 855), AS2 Protocol (OpenSSL CMS Signing &amp; Encryption), SFTP, S3/SQS
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>AI &amp; Vision:</td>
                        <td style={skillValue}>
                          Generative AI Orchestration (Gemini Vertex AI, ComfyUI, Decart/FASHN), OpenAI SDK, Computer Vision (OpenCV, K-Means Clustering, Vector SVG)
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Databases:</td>
                        <td style={skillValue}>
                          PostgreSQL 16 (asyncpg/Neon), MongoDB/Mongoose 8, MySQL, Redis 7 (Pub/Sub, Caching, Streams), TypeORM, SQLAlchemy 2.0, Drizzle
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Job Queues:</td>
                        <td style={skillValue}>
                          BullMQ, ARQ Workers, Redis Queues, Background Schedulers, Idempotent Webhook Event Store, Asynchronous File Streams
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Integrations:</td>
                        <td style={skillValue}>
                          Xero Accounting/Payroll API, Stripe (Connect Express, BECS Direct Debit, Webhooks), PRODA/CCS Gov Tokens, Mapbox GL
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>DevOps &amp; Security:</td>
                        <td style={skillValue}>
                          Docker Compose, AWS (S3, SQS, Secrets Manager), Azure Blob, JWT + OAuth2 rotation, TOTP 2FA, OpenSSL CMS, Git, Linux
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Professional Experience */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>PROFESSIONAL EXPERIENCE</h2>

                  {/* Luminoguru */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Lead Backend Engineer &amp; Systems Architect — Luminoguru Pvt Ltd</strong>
                      <span style={projectDate}>2020 – Present | Mohali, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Direct the architectural strategy and backend implementation of enterprise systems, microservices, and asynchronous pipelines using Python (FastAPI), TypeScript (NestJS), and Node.js.</li>
                      <li>Engineered production X12 EDI middleware in Python 3.12 with AS2 encryption/signing, custom parser/validator, and ERP integration.</li>
                      <li>Built workforce management platform (TGA-Mesh) with Socket.IO messaging, background timesheet workers, and automated Xero payroll sync.</li>
                      <li>Architected multi-model Generative AI fitting room orchestration layer routing jobs dynamically across Gemini, ComfyUI, and Decart.</li>
                      <li>Designed computer vision image-to-stencil vector engine (StenGen) combining NestJS microservices and Python OpenCV image quantization.</li>
                      <li>Constructed high-throughput social travel infrastructure (Globetrottr) with distributed Redis caching, BullMQ queues, and Mapbox geospatial querying.</li>
                    </ul>
                  </div>

                  {/* Quadrish */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Backend &amp; Web Developer — Quadrish Innovations</strong>
                      <span style={projectDate}>2019 – 2020 | Chandigarh, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Designed and maintained scalable relational database models and RESTful APIs with PHP (CodeIgniter, Laravel) and MySQL.</li>
                      <li>Built asynchronous data ingestion services and integrated Node.js and MongoDB micro-modules to optimize real-time throughput.</li>
                    </ul>
                  </div>

                  {/* Tuespot */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Software &amp; Mobile Engineer (Trainee to Developer) — Tuespot Pvt Ltd</strong>
                      <span style={projectDate}>2017 – 2019 | Mohali, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Engineered native Android mobile applications with Java/XML, building local SQLite storage layers, background sync, and REST consumers.</li>
                      <li>Contributed to dynamic web portal architectures, backend schema design, and server-side script optimizations with PHP and SQL.</li>
                    </ul>
                  </div>
                </div>

                {/* 5 Featured Projects Specified by User */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>FEATURED BACKEND &amp; SYSTEM ARCHITECTURE PROJECTS</h2>

                  {/* 1. TGA-Mesh */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>1. TGA-Mesh — Workforce Operations Backend &amp; Mobile App</strong>
                      <span style={projectLink}>
                        <a href="https://play.google.com/store/apps/details?id=mesh.tga.edu.au&hl=en" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          Google Play Link ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>NestJS 11 · TypeScript · MongoDB · Mongoose 8 · Redis · BullMQ · Socket.IO · Xero API · React Native · Firebase · AWS S3</p>
                    <ul style={bulletList}>
                      <li>Architected multi-centre workforce backend (~371 TS files, 30 controllers, 29 schemas) handling shifts, leave requests, and timesheet worker aggregation.</li>
                      <li>Built automated Xero Accounting &amp; Payroll sync service with encrypted bank credentials, AWS Secrets Manager storage, and queued timesheet reconciliation.</li>
                      <li>Implemented real-time Socket.IO communication cluster with typing indicators, presence, and GPS-fenced mobile attendance (published on Google Play).</li>
                    </ul>
                  </div>

                  {/* 2. EDI Middleware */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>2. EDI Middleware — Standalone Multi-Tenant X12 &amp; AS2 Platform</strong>
                      <span style={projectDate}>Enterprise Production Middleware</span>
                    </div>
                    <p style={projectTech}>Python 3.12 · FastAPI (AsyncIO) · PostgreSQL 16 · SQLAlchemy 2.0 · Redis 7 · ARQ Workers · AS2 (OpenSSL CMS) · pyx12 · AWS SQS/S3 · Docker</p>
                    <ul style={bulletList}>
                      <li>Built async multi-tenant X12 pipeline: transport → parse → validate → map → ERP → ack/audit, handling 850/945/944/810 docs with 997/855/940 generation.</li>
                      <li>Implemented production AS2 transport: OpenSSL CMS signing/encryption (AES-256), partner certificate store, sync/async MDN, and integrated live partner (Solvira).</li>
                      <li>Engineered resilient ingestion engine with Redis + ARQ workers, idempotent deduplication on control numbers (409 handling), and swappable REST ERP adapter (Icicle Foods).</li>
                    </ul>
                  </div>

                  {/* 3. FashionTryOn */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>3. FashionTryOn — AI Virtual Fitting Room Engine &amp; Shopify Plugin</strong>
                      <span style={projectDate}>AI Model Orchestration</span>
                    </div>
                    <p style={projectTech}>Python · FastAPI · Node.js · Gemini API (Vertex AI) · ComfyUI Cloud · Decart/FASHN · Shopify App Bridge · Redis · BullMQ · AWS S3</p>
                    <ul style={bulletList}>
                      <li>Architected provider-independent generative AI fitting room orchestration layer decoupling e-commerce logic from underlying ML diffusion models.</li>
                      <li>Built dynamic AI routing adapter across Google Vertex AI / Gemini, ComfyUI workflows, and Decart/FASHN with automated model failover and cost optimization.</li>
                      <li>Designed async worker queue with Redis and webhook callbacks for GPU-heavy image inference without blocking merchant storefront execution.</li>
                    </ul>
                  </div>

                  {/* 4. StenGen */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>4. StenGen (TattooStencils) — AI Image-to-Stencil Vector Engine</strong>
                      <span style={projectLink}>
                        <a href="https://stengen.com/" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          stengen.com ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>Python 3.11 · OpenCV · K-Means Clustering · NumPy · NestJS · TypeScript · Docker · AWS S3 · Vector SVG Engine</p>
                    <ul style={bulletList}>
                      <li>Engineered multi-stage computer vision pipeline: luminance thresholding, K-Means segmentation, bilateral filtering, and automated vector path tracing.</li>
                      <li>Built asynchronous micro-service bridge connecting NestJS API gateway with Python CV workers for low-latency image processing and SVG delivery.</li>
                      <li>Implemented algorithmic line density and shading controls, supporting instant vector SVG rendering and high-DPI thermal stencil print exports.</li>
                    </ul>
                  </div>

                  {/* 5. Globetrottr */}
                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>5. Globetrottr — Travel Social Network &amp; Real-Time Messaging Platform</strong>
                      <span style={projectLink}>
                        <a href="https://globetrottrapi.lusites.xyz/swagger" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          globetrottrapi.lusites.xyz/swagger ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>TypeScript · NestJS 11 · MongoDB · Mongoose 8 · Redis · BullMQ · Socket.IO · Mapbox GL · Elasticsearch · Typesense · AWS S3 · Stripe</p>
                    <ul style={bulletList}>
                      <li>Architected high-throughput social backend (~338 TS files, 29 controllers, 60 services) powering social travel feeds, stories, and Mapbox clustering.</li>
                      <li>Built high-concurrency real-time Socket.IO messaging gateway with typing indicators, presence, AWS S3 media pipeline, and Google Cloud translation.</li>
                      <li>Integrated Tiqets Distributor API for travel event discovery, business accounts with QR redemption, and Stripe subscriptions.</li>
                    </ul>
                  </div>
                </div>

                {/* Additional Notable Projects with Portfolio Link */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>ADDITIONAL PRODUCTION SYSTEMS &amp; ENTERPRISE PLATFORMS</h2>
                  <p style={{ fontSize: "0.92em", color: "#6c63ff", fontStyle: "italic", marginBottom: "8px" }}>
                    Comprehensive architecture breakdowns, API docs, and demos for 15+ production systems viewable on portfolio:{" "}
                    <a href="https://rajansandha.github.io/dev-portfolio" target="_blank" rel="noreferrer" style={{ fontWeight: "700", color: "#6c63ff", textDecoration: "underline" }}>
                      rajansandha.github.io/dev-portfolio ↗
                    </a>
                  </p>
                  <ul style={bulletList}>
                    <li><strong>TGA Grove Academy:</strong> Enterprise childcare management &amp; compliance platform (500+ files, 56 entities) with Australian PRODA/CCS tokens &amp; Stripe BECS. <em>(NestJS, PostgreSQL, PRODA)</em></li>
                    <li><strong>Talent Bridge:</strong> Full-stack AI recruitment platform with automated resume parsing (PDF/DOCX), OpenAI candidate scoring, and BullMQ queues. <em>(NestJS, OpenAI SDK, Redis)</em></li>
                    <li><strong>Givicle:</strong> Full-stack CSR employee-giving platform with double-entry contribution ledger, payroll deductions, and statement exports. <em>(AdonisJS v6, MySQL, Redis, BullMQ, Azure Blob)</em></li>
                    <li><strong>BarChase API:</strong> Nightlife discovery platform with Mapbox geo-filtering, crowd status tracking, Stripe sponsorships, and push notifications. <em>(NestJS 11, MySQL, TypeORM, Stripe, Firebase)</em></li>
                    <li><strong>Village Vest:</strong> Community group-funding escrow platform with Stripe Connect Express onboarding, OFAC compliance screening, and SMS OTP. <em>(NestJS 11, Stripe Connect, Twilio)</em></li>
                    <li><strong>Boldify:</strong> High-volume Shopify brand storefront engineered with custom modular Liquid snippet architecture. <em>(Shopify Liquid, Custom Apps)</em></li>
                    <li><strong>Mobile &amp; Open Source:</strong> ChessRoyal Game (Google Play), ContentCreationAI (Voice cloning), CompileCraftCode, NanoNomad. <em>(Open Source Repositories)</em></li>
                  </ul>
                </div>

                {/* Education */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>EDUCATION</h2>

                  <div style={{ marginBottom: "8px" }}>
                    <div style={projectHeader}>
                      <strong>Master of Computer Applications (MCA)</strong>
                      <span style={projectDate}>2016 – 2018 | Grade A</span>
                    </div>
                    <p style={{ margin: "2px 0 0 0", fontSize: "0.9em", color: "#555" }}>
                      Maharaja Ranjeet Singh Punjab Technical University (MRSPTU), Punjab, India
                    </p>
                  </div>

                  <div>
                    <div style={projectHeader}>
                      <strong>Bachelor of Computer Applications (BCA)</strong>
                      <span style={projectDate}>2012 – 2015 | Grade A (65%)</span>
                    </div>
                    <p style={{ margin: "2px 0 0 0", fontSize: "0.9em", color: "#555" }}>
                      Panjab University, Chandigarh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                  marginBottom: "20px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  download="Raj_Kumar_Resume.pdf"
                  style={{ minWidth: "220px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download Resume (PDF)
                </Button>
                <button
                  onClick={() => window.print()}
                  style={{
                    background: "rgba(108, 99, 255, 0.2)",
                    color: "#c770f0",
                    border: "1px solid #c770f0",
                    padding: "10px 24px",
                    borderRadius: "5px",
                    fontSize: "1em",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  🖨️ Print / Save as PDF
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Print styles */}
      <style>
        {`
          @media print {
            .navbar, .footer, #tsparticles, .particle-canvas, button, .btn {
              display: none !important;
            }
            .resume-section {
              padding-top: 0 !important;
              padding-bottom: 0 !important;
              background: #ffffff !important;
            }
            #resume-content {
              box-shadow: none !important;
              padding: 15px 25px !important;
              max-width: 100% !important;
            }
            body {
              background: #ffffff !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            @page {
              margin: 0.35in;
            }
          }
        `}
      </style>
    </div>
  );
}

const sectionTitle = {
  fontSize: "0.95em",
  fontWeight: "700",
  color: "#1a1a2e",
  borderBottom: "2px solid #e2e8f0",
  paddingBottom: "4px",
  marginBottom: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const skillLabel = {
  fontWeight: "600",
  color: "#1e293b",
  padding: "3px 12px 3px 0",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  width: "140px",
};

const skillValue = {
  color: "#475569",
  padding: "3px 0",
};

const projectHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  fontSize: "0.95em",
  color: "#1a1a2e",
};

const projectDate = {
  fontSize: "0.85em",
  color: "#64748b",
  fontWeight: "500",
};

const projectLink = {
  fontSize: "0.85em",
  color: "#6c63ff",
  fontWeight: "500",
};

const projectTech = {
  fontSize: "0.82em",
  color: "#64748b",
  margin: "1px 0 3px 0",
  fontStyle: "italic",
};

const bulletList = {
  fontSize: "0.9em",
  color: "#334155",
  paddingLeft: "18px",
  margin: "0",
  lineHeight: "1.5",
};

export default ResumeNew;
