import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
          <Card.Title style={{ marginBottom: 0, fontWeight: "600" }}>{props.title}</Card.Title>
          {props.status && (
            <span
              style={{
                fontSize: "0.72em",
                padding: "2px 8px",
                borderRadius: "10px",
                fontWeight: "600",
                backgroundColor: props.status === "Live" ? "rgba(34, 197, 94, 0.2)" : props.status === "Published" ? "rgba(59, 130, 246, 0.2)" : "rgba(234, 179, 8, 0.2)",
                color: props.status === "Live" ? "#4ade80" : props.status === "Published" ? "#60a5fa" : "#facc15",
                border: `1px solid ${props.status === "Live" ? "rgba(34, 197, 94, 0.4)" : props.status === "Published" ? "rgba(59, 130, 246, 0.4)" : "rgba(234, 179, 8, 0.4)"}`,
                whiteSpace: "nowrap",
                marginLeft: "8px"
              }}
            >
              {props.status}
            </span>
          )}
        </div>

        <Card.Text style={{ textAlign: "justify", flexGrow: 1, fontSize: "0.92em", color: "#e2e8f0" }}>
          {props.description}
        </Card.Text>

        {props.tags && (
          <div style={{ marginBottom: "15px", flexWrap: "wrap", display: "flex" }}>
            {props.tags.map((tag, index) => (
              <span
                key={index}
                style={{
                  display: "inline-block",
                  background: "rgba(199, 112, 240, 0.15)",
                  color: "#c770f0",
                  padding: "2px 8px",
                  borderRadius: "12px",
                  fontSize: "0.75em",
                  margin: "2px 4px 2px 0",
                  border: "1px solid rgba(199, 112, 240, 0.3)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "auto" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginRight: "8px", marginBottom: "6px" }}>
              <BsGithub /> &nbsp;
              GitHub
            </Button>
          )}

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginRight: "8px", marginBottom: "6px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}

          {props.playStoreLink && (
            <Button
              variant="primary"
              href={props.playStoreLink}
              target="_blank"
              style={{ marginRight: "8px", marginBottom: "6px" }}
            >
              <FaGooglePlay /> &nbsp;
              {"Play Store"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
