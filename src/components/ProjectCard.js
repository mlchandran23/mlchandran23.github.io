import { useState, useEffect } from "react";

function ProjectCard({ title, shortDesc, longDesc, githubLink, technologies = [], status }) {
  const [open, setOpen] = useState(false);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const statusClass = status === "Completed" ? "status-done" : "status-progress";

  return (
    <>
      {/* ── Card ─────────────────────────────────── */}
      <div
        className="project-card fade-in"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`Open details for ${title}`}
      >
        <div className="pc-title">
          <span>{title}</span>
          {status && <span className={`pc-status ${statusClass}`}>{status}</span>}
        </div>

        <p className="pc-desc">{shortDesc}</p>

        {technologies.length > 0 && (
          <div className="pc-tags">
            {technologies.slice(0, 4).map((tech, i) => (
              <span key={i} className="tag">{tech}</span>
            ))}
            {technologies.length > 4 && (
              <span className="tag tag-muted">+{technologies.length - 4}</span>
            )}
          </div>
        )}

        <div className="pc-hint">↗ click to expand</div>
      </div>

      {/* ── Modal ────────────────────────────────── */}
      {open && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="modal-box" role="dialog" aria-modal="true" aria-label={title}>

            {/* Header */}
            <div className="modal-header">
              <h3>{title}</h3>
              <button
                className="modal-close"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Body — scrolls independently */}
            <div className="modal-body">

              {/* Status badge */}
              {status && (
                <div>
                  <span className={`pc-status ${statusClass}`}>{status}</span>
                </div>
              )}

              {/* Key Technologies */}
              {technologies.length > 0 && (
                <div className="modal-tech-block">
                  <div className="modal-tech-label">Key Technologies</div>
                  <div className="modal-tech-tags">
                    {technologies.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-divider" />

              {/* Description */}
              <p className="modal-desc">{longDesc}</p>

            </div>

            {/* Footer */}
            <div className="modal-footer">
              {githubLink && (
                <a
                  className="btn-ghost"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ GitHub
                </a>
              )}
              <button className="btn-primary" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;