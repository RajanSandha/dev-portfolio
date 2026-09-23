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
                    Full Stack Developer &amp; AI Product Builder
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
                    Versatile and results-driven <strong>Full Stack Developer</strong> with 6+ years of comprehensive experience architecting, developing, and deploying robust web, mobile, and AI-powered solutions. Specialized in <strong>React, React Native, NestJS, TypeScript, Python, and Node.js</strong>, alongside extensive e-commerce development with <strong>Shopify (Liquid &amp; Custom Apps)</strong>. Proven track record delivering mission-critical applications across childcare management (accredited with Australian government CCS/PRODA compliance and Stripe AU BECS billing), fintech, social networking with real-time WebSockets, and modern generative AI workflows (voice cloning, image-to-stencil conversion, and AI virtual try-on pipelines).
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
                          JavaScript (ES6+), TypeScript, Python, PHP, Dart, Java, SQL, HTML5, CSS3
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Frontend:</td>
                        <td style={skillValue}>
                          React.js, Next.js, React Native (iOS &amp; Android), Vue.js, Vite, Tailwind CSS, shadcn/ui, Bootstrap
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Backend &amp; APIs:</td>
                        <td style={skillValue}>
                          NestJS, Node.js, Express.js, Laravel, CodeIgniter, RESTful APIs, WebSockets, GraphQL
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>AI &amp; Data:</td>
                        <td style={skillValue}>
                          Python AI Pipelines, Image Processing, K-Means Clustering, Voice Cloning, NLP, Gemini API, ComfyUI
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Databases:</td>
                        <td style={skillValue}>
                          PostgreSQL, MongoDB, MySQL, Firebase Firestore / Realtime DB, TypeORM, Mongoose
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>E-Commerce:</td>
                        <td style={skillValue}>
                          Shopify (Liquid Theme Development, Custom Snippets, App Integrations, Checkout), WooCommerce
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>Integrations:</td>
                        <td style={skillValue}>
                          Stripe (Connect, BECS Direct Debit, ADH), OAuth 2.0, JWT &amp; MFA, PRODA/CCS, Mapbox API, Alpaca API
                        </td>
                      </tr>
                      <tr>
                        <td style={skillLabel}>DevOps &amp; Tools:</td>
                        <td style={skillValue}>
                          Git, GitHub Actions, Docker, Vercel, AWS, Postman, Swagger, Jira, Figma, Linux
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
                      <strong>Associate Software Engineer / Full Stack Developer — Luminoguru Pvt Ltd</strong>
                      <span style={projectDate}>2020 – Present | Mohali, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Architect and engineer full-stack web and cross-platform mobile systems utilizing React, React Native, NestJS, TypeScript, and Node.js.</li>
                      <li>Lead technical delivery of enterprise childcare management system (TGA) handling complex Australian government child care subsidy (CCS/ACCS) integrations via PRODA cryptographic tokens.</li>
                      <li>Engineered automated recurring billing pipelines integrating Stripe AU BECS Direct Debit and real-time webhook reconciliation.</li>
                      <li>Developed cross-platform mobile application (TGAMesh) for staff attendance and shifts with geolocation tracking and real-time WebSocket messaging.</li>
                      <li>Developed custom Shopify themes, storefront customizations with Liquid, and tailored third-party integrations for high-growth e-commerce brands.</li>
                      <li>Designed and implemented AI-powered production features including image processing pipelines, voice cloning workflows, and AI try-on engines.</li>
                    </ul>
                  </div>

                  {/* Quadrish */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Web Developer — Quadrish Innovations</strong>
                      <span style={projectDate}>2019 – 2020 | Chandigarh, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Built and maintained scalable database-driven web platforms using PHP, CodeIgniter, Laravel, and MySQL following OOP standards.</li>
                      <li>Explored and integrated Node.js and MongoDB micro-modules to optimize real-time data handling and backend throughput.</li>
                      <li>Collaborated with cross-functional teams to translate UI/UX designs into fully responsive, cross-browser compatible client interfaces.</li>
                    </ul>
                  </div>

                  {/* Tuespot */}
                  <div style={{ marginBottom: "14px" }}>
                    <div style={projectHeader}>
                      <strong>Trainee / Android &amp; Web Developer — Tuespot Pvt Ltd</strong>
                      <span style={projectDate}>2017 – 2019 | Mohali, India</span>
                    </div>
                    <ul style={bulletList}>
                      <li>Honed foundational full-stack capabilities, developing native Android modules with Java, XML, and RESTful API consumption.</li>
                      <li>Contributed to dynamic web portal development with PHP, JavaScript, HTML5, CSS3, and relational database schema design.</li>
                    </ul>
                  </div>
                </div>

                {/* Key Projects */}
                <div style={{ marginBottom: "22px" }}>
                  <h2 style={sectionTitle}>FEATURED PROJECTS &amp; AI PRODUCTS</h2>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>TheCroveAcademy (TGA) — Enterprise Childcare Management</strong>
                      <span style={projectLink}>
                        <a href="https://tga.edu.au/" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          tga.edu.au ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>React · TypeScript · Vite · Tailwind · NestJS · PostgreSQL · Stripe AU BECS · PRODA/CCS</p>
                    <ul style={bulletList}>
                      <li>Childcare centre operations platform with parent/child records, attendance kiosk, Australian government ACCS/CCS subsidy claiming via PRODA tokens, and automated Stripe BECS direct-debit billing.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>TGAMesh — Mobile Workforce Management App</strong>
                      <span style={projectLink}>
                        <a href="https://play.google.com/store/apps/details?id=mesh.tga.edu.au" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          Google Play ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>React Native (iOS/Android) · NestJS · WebSockets · Geolocation</p>
                    <ul style={bulletList}>
                      <li>Cross-platform mobile app for staff shift scheduling, attendance with GPS fencing, leave requests, real-time WebSocket chats, stories, posts, and polls.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>StenGen (TattooStencils) — AI Stencil Generator</strong>
                      <span style={projectLink}>
                        <a href="https://stengen.com/" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          stengen.com ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>NestJS · Python · K-Means Clustering · OpenCV · SVG Generation</p>
                    <ul style={bulletList}>
                      <li>AI service converting photographic artwork into print-ready tattoo stencils via a Python image processing pipeline and automated vector SVG generation.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>Globetrottr — Social Travel Map &amp; Real-Time Messenger</strong>
                      <span style={projectLink}>
                        <a href="https://globetrottrapi.lusites.xyz/swagger" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          API Docs ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>Mapbox GL · React · Node.js · Real-Time Translation API · Swagger</p>
                    <ul style={bulletList}>
                      <li>Travel social network with Mapbox tracking, digital passport stamps, feeds, and real-time chat with instant multi-language translation.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>VillageVest — FinTech Investment Platform for Minors</strong>
                      <span style={projectLink}>
                        <a href="https://villagevest.com/" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          villagevest.com ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>React · Node.js · Stripe ADH · OAuth 2.0 · Alpaca API</p>
                    <ul style={bulletList}>
                      <li>Custodial investment and micro-funding platform enabling financial gifting for minors with Stripe ADH bank linking and Alpaca investment APIs.</li>
                    </ul>
                  </div>

                  <div style={{ marginBottom: "12px" }}>
                    <div style={projectHeader}>
                      <strong>Boldify — High-Volume Shopify Storefront</strong>
                      <span style={projectLink}>
                        <a href="https://getboldify.com/" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                          getboldify.com ↗
                        </a>
                      </span>
                    </div>
                    <p style={projectTech}>Shopify · Liquid · Theme Customization · App Integrations</p>
                    <ul style={bulletList}>
                      <li>Engineered custom Liquid theme snippets, high-converting product pages, and third-party merchant integrations.</li>
                    </ul>
                  </div>
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

                {/* Additional Highlights */}
                <div>
                  <h2 style={sectionTitle}>ADDITIONAL HIGHLIGHTS</h2>
                  <ul style={{ ...bulletList, marginBottom: 0 }}>
                    <li>
                      <strong>Open Source Repositories:</strong>{" "}
                      <a href="https://github.com/RajanSandha/compilecraftcode" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                        CompileCraftCode
                      </a>
                      ,{" "}
                      <a href="https://github.com/RajanSandha/nanonomad" target="_blank" rel="noreferrer" style={{ color: "#6c63ff", textDecoration: "none" }}>
                        NanoNomad
                      </a>
                    </li>
                    <li>
                      <strong>Mobile Apps on Google Play:</strong> ChessRoyal Game, TGAMesh
                    </li>
                    <li>
                      <strong>Spoken Languages:</strong> English (Professional), Hindi (Fluent), Punjabi (Native)
                    </li>
                  </ul>
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
  width: "130px",
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
