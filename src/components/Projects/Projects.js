import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects &amp; Products </strong>
        </h1>
        <p style={{ color: "white" }}>
          Production systems, mobile applications, and AI products I've engineered and shipped.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. TheCroveAcademy */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TheCroveAcademy (TGA)"
              status="Live"
              description="Comprehensive childcare centre management platform for staff and parents. Features parent & child records, attendance with kiosk mode, Australian government subsidy (ACCS/CCS) integration via PRODA tokens, and automated recurring billing with Stripe AU BECS Direct Debit."
              tags={["React", "TypeScript", "NestJS", "PostgreSQL", "Stripe AU BECS", "Tailwind", "PRODA/CCS"]}
              demoLink="https://tga.edu.au/"
            />
          </Col>

          {/* 2. TGAMesh */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TGAMesh"
              status="Published"
              description="Workforce management mobile app for iOS and Android. Features staff authentication, shifts, leave & attendance tracking with GPS geolocation fencing, real-time messaging via WebSockets, team stories, status feeds, and interactive polls."
              tags={["React Native", "NestJS", "WebSockets", "Geolocation", "Mobile App"]}
              playStoreLink="https://play.google.com/store/apps/details?id=mesh.tga.edu.au&hl=en"
            />
          </Col>

          {/* 3. Globetrottr */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Globetrottr"
              status="Live"
              description="Interactive social travel and location discovery platform powered by Mapbox GL. Includes digital passport stamp tracking, friends feed, stories, real-time messenger with automated message translation, and business dashboards for location management and QR voucher redemption."
              tags={["Mapbox GL", "React", "Node.js", "WebSockets", "Translation API", "Swagger"]}
              demoLink="https://globetrottrapi.lusites.xyz/swagger"
            />
          </Col>

          {/* 4. StenGen (TattooStencils) */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="StenGen (TattooStencils)"
              status="Live"
              description="AI-powered image-to-stencil conversion platform tailored for tattoo artists. Features a custom Python computer vision pipeline utilizing K-Means clustering, edge extraction, and automated SVG conversion, seamlessly orchestrated via a NestJS API."
              tags={["NestJS", "Python", "AI/ML", "K-Means", "OpenCV", "SVG Engine"]}
              demoLink="https://stengen.com/"
            />
          </Col>

          {/* 5. VillageVest */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="VillageVest"
              status="Live"
              description="FinTech investment and micro-funding platform designed for minors. Implements secure multi-channel onboarding (OAuth 2.0, phone, email), social contribution links for family gifting, Stripe ADH bank linking, and investment account integrations via Alpaca API."
              tags={["React", "Node.js", "Stripe ADH", "OAuth 2.0", "Alpaca API", "FinTech"]}
              demoLink="https://villagevest.com/"
            />
          </Col>

          {/* 6. Boldify */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Boldify"
              status="Live"
              description="High-volume Shopify e-commerce brand storefront. Engineered custom Shopify theme architecture with modular Liquid snippets, custom section schema, third-party application integrations, and speed optimizations."
              tags={["Shopify", "Liquid", "Theme Architecture", "Custom Snippets", "E-Commerce"]}
              demoLink="https://getboldify.com/"
            />
          </Col>

          {/* 7. ContentCreationAI */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ContentCreationAI"
              status="In Development"
              description="AI-powered multilingual video and audio processing engine. Orchestrates video ingestion, audio extraction, speaker voice cloning, Portuguese-to-Hebrew translation with domain terminology dictionaries, automated subtitle generation, and text-to-video synthesis."
              tags={["Python", "Generative AI", "Voice Cloning", "NLP", "Speech-to-Text", "Text-to-Video"]}
            />
          </Col>

          {/* 8. FashionTryOn */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FashionTryOn"
              status="In Development"
              description="AI virtual fitting room platform and Shopify merchant plugin. Allows shoppers to submit photos and view realistic garment try-ons directly on product pages. Built with a provider-independent architecture supporting Gemini, ComfyUI, and Decart/FASHN."
              tags={["Shopify Plugin", "Generative AI", "Gemini API", "ComfyUI", "FASHN", "Virtual Try-On"]}
            />
          </Col>

          {/* 9. ChessRoyal Game */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ChessRoyal Game"
              status="Published"
              description="Strategic mobile chess game available on Google Play. Features intuitive chess mechanics, move validations, responsive board animations, and offline/online game modes built for mobile performance."
              tags={["Android", "Mobile Game", "Java", "Game Logic", "UI Animations"]}
              playStoreLink="http://play.google.com/store/apps/details?id=in.compilecraft.chessroyal&hl=en"
            />
          </Col>

          {/* 10. WishStory */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="WishStory"
              status="Live"
              description="Dynamic digital celebration and greeting card platform. Allows users to craft, customize, and share interactive multimedia stories for birthdays, milestones, and festivals with responsive animations."
              tags={["React", "JavaScript", "Animations", "CompileCraft", "Web App"]}
              demoLink="https://wishme.compilecraft.in/"
            />
          </Col>

          {/* 11. Pelmen */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Pelmen"
              status="In Development"
              description="Digital workflow execution and task process orchestration platform. Engineered user experience flows, structured multi-step process states, and modular system interfaces."
              tags={["Product Design", "Workflow Engine", "State Management", "Process Automation"]}
            />
          </Col>

          {/* 12. CompileCraftCode */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CompileCraftCode"
              status="Live"
              description="Open-source repository of reusable developer utilities, architectural boilerplates, and modular code snippets designed for full-stack engineering and API acceleration."
              tags={["TypeScript", "Node.js", "Open Source", "Developer Tools", "Boilerplates"]}
              ghLink="https://github.com/RajanSandha/compilecraftcode"
            />
          </Col>

          {/* 13. NanoNomad */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="NanoNomad"
              status="Live"
              description="Open-source lightweight workspace utility tailored for digital nomads and remote engineers to organize project essentials, assets, and portable workflows."
              tags={["Full Stack", "JavaScript", "Open Source", "Productivity", "Utility"]}
              ghLink="https://github.com/RajanSandha/nanonomad"
            />
          </Col>

          {/* 14. TalentBridge */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TalentBridge"
              status="Concept"
              description="Modern career and talent discovery marketplace concept. Designed with role-matching filters, developer portfolio showcases, applicant tracking pipelines, and recruiter analytics dashboards."
              tags={["UI/UX Design", "Talent Platform", "Dashboard", "Recruitment Tech"]}
            />
          </Col>

          {/* 15. Upittson */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Upittson"
              status="Live"
              description="Tailored corporate web solution built with custom WordPress Divi architecture. Features custom responsive layouts, brand identity styling, dynamic landing sections, and content management capability."
              tags={["WordPress", "Divi Builder", "Custom CSS", "Responsive Design", "Corporate"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
