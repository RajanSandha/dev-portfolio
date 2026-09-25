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
                    Lead Full Stack Engineer &amp; Systems Architect
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
                    High-impact <strong>Lead Full Stack &amp; Systems Engineer</strong> with 6+ years of specialized experience architecting and scaling enterprise distributed backends, compliance platforms, and modern web/mobile applications. Proficient in <strong>TypeScript, Python, Node.js, NestJS, FastAPI, and React</strong>, with proven expertise building mission-critical integrations: Australian Government <strong>PRODA/CCS compliance</strong>, multi-tenant <strong>X12 EDI &amp; AS2 cryptographic transports</strong>, <strong>Stripe Connect/BECS Direct Debit billing</strong>, real-time <strong>Socket.IO</strong> clusters, and <strong>OpenAI/LLM-powered candidate matching pipelines</strong>.
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
                        <td style={skillLabel}>Languages:</td>
                        <td style={skillValue}>
                          TypeScript, JavaScript (ES6+), Python 3.12, PHP, Dart, Java, SQL, HTML5/CSS3
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Backend &amp; APIs:</td>
                        <td style={skillValue}>
                          NestJS 11, FastAPI (Async), Node.js, AdonisJS v6, Express.js, Laravel, REST APIs, WebSockets, Socket.IO
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Frontend &amp; Mobile:</td>
                        <td style={skillValue}>
                          React 18, Vite, Next.js, React Native (iOS &amp; Android), TanStack Query, Tailwind CSS, shadcn/ui, Bootstrap
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>AI &amp; Data:</td>
                        <td style={skillValue}>
                          OpenAI SDK, Prompt Engineering, Document Extraction (pdf-parse/mammoth), Computer Vision (OpenCV, K-Means)
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Protocols:</td>
                        <td style={skillValue}>
                          X12 EDI (850, 945, 944, 810, 997, 855), AS2 (OpenSSL CMS Encrypt/Sign, MDN), SFTP, S3/SQS
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Databases &amp; Queues:</td>
                        <td style={skillValue}>
                          PostgreSQL (asyncpg/Neon), MySQL, MongoDB/Mongoose, Redis 7, BullMQ, ARQ, TypeORM, Drizzle, SQLAlchemy 2.0
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Integrations:</td>
                        <td style={skillValue}>
                          Stripe (Connect Express, BECS Direct Debit, Billing), PRODA/CCS Gov API, Xero Payroll, Mapbox GL
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>DevOps &amp; Security:</td>
                        <td style={skillValue}>
                          Docker, Docker Compose, AWS (S3, SQS, Secrets Manager), Azure Blob, JWT + OAuth2 rotation, TOTP 2FA, Git
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
                      <strong>Associate Software Engineer / Lead Full Stack Engineer — Luminoguru Pvt Ltd</strong>
                      <span style={projectDate}>2020 – Present | Mohali, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Architect and engineer full-stack platforms, high-throughput asynchronous backend services, and scalable web/mobile applications.</li>
                      <li>Engineered the flagship TGA childcare compliance engine (56 entities, 34 controllers) interfacing with Australian Government PRODA cryptographic auth and automated Stripe AU BECS recurring billing.</li>
                      <li>Built enterprise multi-tenant X12 EDI middleware in Python 3.12/FastAPI handling AS2 encrypted communications, idempotent deduplication, and ERP sync.</li>
                      <li>Designed and implemented full-stack AI recruitment platform (Talent Bridge) integrating OpenAI SDK for automated candidate scoring and resume parsing.</li>
                      <li>Spearheaded real-time architectures with Socket.IO and BullMQ, handling high-frequency chats, live location maps, and workforce event scheduling.</li>
                    </ul>
                  </div>

                  {/* Quadrish */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Web Developer — Quadrish Innovations</strong>
                      <span style={projectDate}>2019 – 2020 | Chandigarh, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Developed scalable database-driven web platforms using PHP, CodeIgniter, Laravel, and MySQL following strict OOP patterns.</li>
                      <li>Engineered RESTful APIs, optimized complex relational queries, and introduced Node.js/MongoDB micro-modules for real-time throughput.</li>
                    </ul>
                  </div>

                  {/* Tuespot */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Trainee / Android &amp; Web Developer — Tuespot Pvt Ltd</strong>
                      <span style={projectDate}>2017 – 2019 | Mohali, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Developed native Android applications using Java, XML, and SQLite, implementing responsive UI components and background sync.</li>
                      <li>Collaborated on dynamic web portal development utilizing PHP, JavaScript, HTML5, CSS3, and relational database schema design.</li>
                    </ul>
                  </div>
                </div>

                {/* 4 High Profile Projects */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>HIGH-PROFILE FEATURED PROJECTS (4 FLAGSHIP SYSTEMS)</h2>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>1. TGA Grove Academy — Childcare Operations &amp; Government CCS Compliance</strong>
                      <span style={projectLink}>
                        <a href="https://tga.edu.au/" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          tga.edu.au ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>TypeScript · NestJS 11 · PostgreSQL · TypeORM · React 18 · Vite · Tailwind · PRODA/CCS · Stripe BECS · Puppeteer</p>
                    <ul style={bulletList}>
                      <li>Architected enterprise childcare management system (500+ files, 34 controllers, 56 entities) with role-scoped staff/parent portals and kiosk PIN attendance.</li>
                      <li>Engineered end-to-end Australian CCS compliance pipeline via PRODA device auth/cryptographic key rotation, automated session-reporting state machine (INIT/VARY/NOCHG/NOCARE), and audit trails.</li>
                      <li>Implemented automated direct-debit billing using Stripe AU BECS with webhook idempotency, retry scheduling, and automated PDF invoice generation via Puppeteer.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>2. EDI Middleware — Multi-Tenant X12 Transport &amp; ERP Integration</strong>
                      <span style={projectDate}>Production Enterprise System</span>
                    </div>
                    <p style={projectTech}>Python 3.12 · FastAPI (Async) · PostgreSQL 16 · SQLAlchemy 2.0 · Redis 7 · ARQ Workers · AS2 (OpenSSL CMS) · pyx12 · AWS SQS/S3</p>
                    <ul style={bulletList}>
                      <li>Designed async multi-tenant X12 pipeline processing inbound 850/945/944/810 documents and generating outbound 997/855/940 acknowledgments with status tracking.</li>
                      <li>Implemented production AS2 transport: OpenSSL CMS signing/encryption, partner certificate store, sync/async MDN handling, and integrated live warehouse partner (Solvira).</li>
                      <li>Engineered resilient ingestion engine with Redis + ARQ workers, PostgreSQL audit trail with control-number deduplication (409 handling), and swappable REST ERP adapter (Icicle Foods).</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>3. Talent Bridge — AI-Powered Recruitment &amp; Candidate Matching Platform</strong>
                      <span style={projectDate}>Full-Stack AI Monorepo</span>
                    </div>
                    <p style={projectTech}>TypeScript · NestJS 11 · PostgreSQL · TypeORM · Drizzle ORM · OpenAI SDK · Redis · BullMQ · React 18 · Vite · TanStack Query · Stripe</p>
                    <ul style={bulletList}>
                      <li>Built full-stack AI recruitment platform: automated resume extraction (PDF/DOCX), OpenAI-powered scoring, and asynchronous candidate-job matching via BullMQ worker queues.</li>
                      <li>Shipped multi-role architecture (Admin, Recruiter, Enterprise) with Stripe subscription tiers, checkout sessions, team invitations, and comprehensive Recharts analytics.</li>
                      <li>Engineered responsive 3-portal SPA with TanStack Query caching, form validations (RHF + Zod), inline PDF resume viewing, and AWS S3 presigned asset storage.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>4. Globetrottr — Travel Social Network &amp; Real-Time Messaging Platform</strong>
                      <span style={projectLink}>
                        <a href="https://globetrottrapi.lusites.xyz/swagger" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          API Docs ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>TypeScript · NestJS 11 · MongoDB · Mongoose 8 · Redis · BullMQ · Socket.IO · Mapbox GL · Elasticsearch · Typesense · AWS S3 · Stripe</p>
                    <ul style={bulletList}>
                      <li>Architected large-scale social backend (~338 TS files, 29 controllers, 60 services) powering social travel feeds, stories, country passport tracking, and dynamic Mapbox clustering.</li>
                      <li>Built high-concurrency real-time messaging gateway using Socket.IO with typing indicators, presence tracking, media sharing via AWS S3, and Google Cloud automated translation.</li>
                      <li>Integrated Tiqets Distributor API for travel event discovery, business accounts with QR redemption, and Stripe subscriptions.</li>
                    </ul>
                  </div>
                </div>

                {/* Additional Notable Projects with Portfolio Link */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>ADDITIONAL PRODUCTION PROJECTS</h2>
                  <p style={{ fontSize: "0.92em", color: "#6c63ff", fontStyle: "italic", marginBottom: "8px" }}>
                    Detailed architecture, technical specifications, and demos for 15+ production systems viewable on portfolio:{" "}
                    <a href="https://rajansandha.github.io/dev-portfolio" target="_blank" rel="noreferrer" style={{ fontWeight: "700", color: "#6c63ff", textDecoration: "underline" }}>
                      rajansandha.github.io/dev-portfolio ↗
                    </a>
                  </p>
                  <ul style={bulletList}>
                    <li><strong>Givicle:</strong> Full-stack CSR employee-giving platform with double-entry contribution ledger, payroll deductions, and statement exports. <em>(AdonisJS v6, React 18, MySQL, Redis, BullMQ, Azure Blob, S3)</em></li>
                    <li><strong>BarChase API:</strong> Nightlife discovery platform with Mapbox geo-filtering, crowd status tracking, Stripe sponsorships, and push notifications. <em>(NestJS 11, MySQL, TypeORM, Stripe, Firebase)</em></li>
                    <li><strong>TGA-Mesh:</strong> Childcare workforce ops platform with shift rostering, timesheet aggregation, Xero payroll sync, and GPS attendance. <em>(React Native, NestJS, MongoDB, Socket.IO, Xero API)</em></li>
                    <li><strong>Village Vest:</strong> Community group-funding escrow platform with Stripe Connect Express onboarding, OFAC compliance screening, and SMS OTP. <em>(NestJS 11, React 18, Stripe Connect, Twilio)</em></li>
                    <li><strong>StenGen:</strong> AI image-to-stencil conversion pipeline utilizing K-Means clustering and automated vector SVG generation. <em>(Python, OpenCV, NestJS, SVG Engine)</em></li>
                    <li><strong>Boldify:</strong> High-volume Shopify brand storefront engineered with custom modular Liquid snippet architecture. <em>(Shopify Liquid, App Integrations)</em></li>
                    <li><strong>Mobile &amp; AI Labs:</strong> Published mobile applications (ChessRoyal Game on Google Play) and active generative AI experiments (FashionTryOn virtual fitting room &amp; ContentCreationAI voice cloning).</li>
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
