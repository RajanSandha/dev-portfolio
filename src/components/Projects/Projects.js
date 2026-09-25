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
          Enterprise platforms, AI systems, mobile applications, and distributed backends I've engineered and shipped.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* 1. TGA Grove Academy */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TGA Grove Academy"
              status="Live"
              description="Enterprise childcare platform for Australian centres (~505 TS files, 34 controllers, 56 entities). Features parent/child management, kiosk PIN attendance with authorized pickup verification, Australian government ACCS/CCS subsidy claiming via PRODA cryptographic tokens, and automated recurring billing with Stripe AU BECS Direct Debit."
              tags={["NestJS 11", "TypeScript", "PostgreSQL", "React 18", "PRODA/CCS", "Stripe BECS", "Puppeteer", "Tailwind"]}
              demoLink="https://tga.edu.au/"
            />
          </Col>

          {/* 2. EDI Middleware */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="EDI Middleware (X12)"
              status="Live"
              description="Async multi-tenant X12 EDI middleware in Python 3.12/FastAPI. Ingests inbound X12 850/945/944/810 and generates outbound 997/855/940. Implements production AS2 transport with OpenSSL CMS encryption/signing, partner certificate store, sync/async MDN, Redis + ARQ workers, and swappable REST ERP adapter (Icicle Foods)."
              tags={["Python 3.12", "FastAPI", "PostgreSQL", "Redis 7", "ARQ", "AS2 Crypto", "X12 EDI", "AWS S3/SQS"]}
            />
          </Col>

          {/* 3. Talent Bridge */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Talent Bridge"
              status="Live"
              description="Full-stack AI recruitment platform (~237 TS files, 26 controllers). Features resume ingestion/parsing (PDF/DOCX via pdf-parse/mammoth), OpenAI-powered candidate-job scoring pipeline via BullMQ workers, Stripe subscription billing, and a 3-portal React SPA (Admin, Recruiter, Enterprise) with Recharts analytics."
              tags={["NestJS 11", "OpenAI SDK", "PostgreSQL", "React 18", "BullMQ", "Redis", "Stripe", "TanStack Query"]}
            />
          </Col>

          {/* 4. Globetrottr */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Globetrottr"
              status="Live"
              description="Large-scale travel-social platform (~338 TS files, 29 controllers, 60 services). Features dynamic Mapbox GL tracking, passport stamp collections, real-time messaging using Socket.IO with multi-language automated translation, event discovery via Tiqets API, and Stripe business subscriptions."
              tags={["NestJS 11", "MongoDB", "Socket.IO", "Mapbox GL", "Redis", "BullMQ", "Elasticsearch", "Stripe"]}
              demoLink="https://globetrottrapi.lusites.xyz/swagger"
            />
          </Col>

          {/* 5. Givicle */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Givicle"
              status="Live"
              description="Full-stack CSR employee-giving platform (~142 backend files). Features an employee payroll-deduction ledger, organisation top-up pools, brand voucher marketplace, social thanks wall with reactions, TOTP 2FA, PDF/Excel statement exports, and a 3-portal React SPA with TanStack Query and shadcn UI."
              tags={["AdonisJS v6", "Node 22", "React 18", "MySQL", "BullMQ", "Redis", "Azure Blob", "AWS S3", "Tailwind"]}
            />
          </Col>

          {/* 6. BarChase API */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="BarChase API"
              status="Live"
              description="Modular nightlife discovery backend (18 controllers, 28 services, 25 entities). Implements geo-aware bar discovery with Mapbox, live crowd status submissions, user check-ins/reviews, multi-provider social auth (Google/Apple/Facebook), and Stripe subscription/sponsorship billing."
              tags={["NestJS 11", "TypeScript", "MySQL", "TypeORM", "Mapbox", "Stripe", "Firebase Push", "Swagger"]}
            />
          </Col>

          {/* 7. TGAMesh */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="TGAMesh"
              status="Published"
              description="Workforce operations platform (~371 TS files) and mobile app for childcare centres. Features shift rostering, leave management, timesheet worker aggregation, Xero payroll sync with encrypted credentials, Socket.IO messaging, and staff geolocation attendance."
              tags={["React Native", "NestJS 11", "MongoDB", "Socket.IO", "Xero API", "BullMQ", "Geolocation"]}
              playStoreLink="https://play.google.com/store/apps/details?id=mesh.tga.edu.au&hl=en"
            />
          </Col>

          {/* 8. Village Vest */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Village Vest"
              status="Live"
              description="Community group-funding platform ('Village Pots'). Implements Stripe Connect Express escrow funding, member contributions, interactive polls with quorum calculation, social feed, Twilio SMS OTP, and automated OFAC sanctions compliance screening."
              tags={["React 18", "NestJS 11", "Stripe Connect", "PostgreSQL", "Twilio", "OFAC Compliance", "FinTech"]}
              demoLink="https://villagevest.com/"
            />
          </Col>

          {/* 9. StenGen (TattooStencils) */}
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

          {/* 10. Boldify */}
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

          {/* 11. ContentCreationAI */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="ContentCreationAI"
              status="In Development"
              description="AI-powered multilingual video and audio processing engine. Orchestrates video ingestion, audio extraction, speaker voice cloning, Portuguese-to-Hebrew translation with domain terminology dictionaries, automated subtitle generation, and text-to-video synthesis."
              tags={["Python", "Generative AI", "Voice Cloning", "NLP", "Speech-to-Text", "Text-to-Video"]}
            />
          </Col>

          {/* 12. FashionTryOn */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FashionTryOn"
              status="In Development"
              description="AI virtual fitting room platform and Shopify merchant plugin. Allows shoppers to submit photos and view realistic garment try-ons directly on product pages. Built with a provider-independent architecture supporting Gemini, ComfyUI, and Decart/FASHN."
              tags={["Shopify Plugin", "Generative AI", "Gemini API", "ComfyUI", "FASHN", "Virtual Try-On"]}
            />
          </Col>

          {/* 13. ChessRoyal Game */}
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

          {/* 14. WishStory */}
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

          {/* 15. Pelmen */}
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Pelmen"
              status="In Development"
              description="Digital workflow execution and task process orchestration platform. Engineered user experience flows, structured multi-step process states, and modular system interfaces."
              tags={["Product Design", "Workflow Engine", "State Management", "Process Automation"]}
            />
          </Col>

          {/* 16. CompileCraftCode */}
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

          {/* 17. NanoNomad */}
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

          {/* 18. Upittson */}
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
