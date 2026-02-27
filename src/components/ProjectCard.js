import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ProjectCard({ title, shortDesc, longDesc, githubLink, technologies = [], status }) {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        className="card bg-dark text-light border-success project-card"
        style={{ cursor: "pointer", minHeight: "280px", display: "flex", flexDirection: "column" }}
        onClick={() => setShow(true)}
      >
        <div className="card-body" style={{ flexGrow: 1 }}>
          <h5 className="card-title text-success">{title}</h5>

          {status && (
            <p className="mb-1" style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
              Status: {status}
            </p>
          )}

          <p className="card-text">{shortDesc}</p>

          {/* --- Show 2-3 tech badges on the card --- */}
          {technologies.length > 0 && (
            <div className="mb-2">
              {technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="badge bg-success me-1 mb-1"
                  style={{ fontSize: "0.75rem" }}
                >
                  {tech}
                </span>
              ))} {technologies.length > 3 && (
                  <span>+ {technologies.length - 3} more</span>
                  )}
            </div>
          )}

          <p className="mt-auto text-muted" style={{ fontSize: "0.8rem" }}>
            Click to see details
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered size="lg">
        <Modal.Header closeButton className="bg-dark text-light border-success">
          <Modal.Title className="text-success">{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-dark text-light">
          {technologies.length > 0 && (
            <div className="mb-4">
              <h6 className="text-success mb-2">Key Technologies</h6>
              {technologies.map((tech, index) => (
                <span key={index} className="badge bg-success me-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
          )}
          <p>{longDesc}</p>
        </Modal.Body>

        <Modal.Footer className="bg-dark border-success">
          {githubLink && (
            <Button
              variant="outline-success"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
          )}
          <Button variant="success" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;