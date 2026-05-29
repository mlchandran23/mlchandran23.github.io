import { useState, useEffect } from "react";

// Maps category string → CSS class suffix for color coding
function getCategoryClass(category) {
  const map = {
    "Web":       "web",
    "Forensics": "forensics",
    "Crypto":    "crypto",
    "Pwn":       "pwn",
    "Rev":       "rev",
    "Misc":      "misc",
    "OSINT":     "osint",
  };
  return map[category] || "misc";
}

function getDifficultyClass(difficulty) {
  const map = {
    "Easy":   "easy",
    "Medium": "medium",
    "Hard":   "hard",
  };
  return map[difficulty] || "medium";
}

/**
 * CTFCard
 * Props (from CTF_WRITEUPS array in theme.js):
 *   challengeName — name of the specific challenge
 *   ctfName       — name of the CTF competition
 *   organizer     — who ran it
 *   category      — Web | Forensics | Crypto | Pwn | Rev | Misc | OSINT
 *   difficulty    — Easy | Medium | Hard
 *   description   — writeup summary
 *   writeupLink   — URL to full writeup (GitHub, blog, etc.)
 *   image         — /public path to image, or null
 *   technologies  — string[]
 *   placement     — optional placement string, e.g. "Top 10%"
 */
function CTFCard({
  challengeName,
  ctfName,
  organizer,
  category,
  difficulty,
  description,
  writeupLink,
  image,
  technologies = [],
  placement,
}) {
  const [open, setOpen] = useState(false);
  const catClass = getCategoryClass(category);
  const diffClass = getDifficultyClass(difficulty);

  // Lock scroll + Escape key
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* ── Card ─────────────────────────────────── */}
      <div
        className="ctf-card fade-in"
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`Open writeup for ${challengeName}`}
      >
        {/* Category color stripe at top */}
        <div className={`ctf-category-stripe cat-${catClass}`} />

        {/* Image or placeholder */}
        {image ? (
          <img className="ctf-img" src={image} alt={`${challengeName} screenshot`} />
        ) : (
          <div className="ctf-img-placeholder">
            <span className="ctf-img-placeholder-icon">🚩</span>
          </div>
        )}

        {/* Body */}
        <div className="ctf-body">
          <div className="ctf-meta">
            <span className="ctf-organizer">{organizer}</span>
            <span className="ctf-dot" />
            <span className={`cat-badge cat-${catClass}`}>{category}</span>
            <span className={`diff-badge diff-${diffClass}`}>{difficulty}</span>
            {placement && <span className="tag tag-success">{placement}</span>}
          </div>

          <div className="ctf-title">{challengeName}</div>
          <p className="ctf-desc">{description}</p>

          {technologies.length > 0 && (
            <div className="ctf-tags">
              {technologies.slice(0, 4).map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
              {technologies.length > 4 && (
                <span className="tag tag-muted">+{technologies.length - 4}</span>
              )}
            </div>
          )}

          <div className="ctf-hint">↗ click for full writeup</div>
        </div>
      </div>

      {/* ── Modal ────────────────────────────────── */}
      {open && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="modal-box">
            <div className="modal-header">
              <h3>{challengeName}</h3>
              <button className="modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            </div>

            <div className="modal-body">
              {/* Meta row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "var(--gap-md)" }}>
                <span className={`cat-badge cat-${catClass}`}>{category}</span>
                <span className={`diff-badge diff-${diffClass}`}>{difficulty}</span>
                {placement && <span className="tag tag-success">{placement}</span>}
                <span className="tag tag-muted">{ctfName}</span>
              </div>

              {/* Image */}
              {image && (
                <img
                  src={image}
                  alt={`${challengeName} screenshot`}
                  style={{ width: "100%", borderRadius: "var(--radius-sm)", marginBottom: "var(--gap-md)", border: "1px solid var(--border)" }}
                />
              )}

              {/* Description */}
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.75, marginBottom: "var(--gap-md)" }}>
                {description}
              </p>

              {/* Technologies */}
              {technologies.length > 0 && (
                <div>
                  <div className="skill-group-label" style={{ marginBottom: "0.4rem" }}>Tools & Technologies</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {technologies.map((t, i) => (
                      <span key={i} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              {writeupLink && (
                <a
                  className="btn-ghost"
                  href={writeupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ View Writeup
                </a>
              )}
              <button className="btn-primary" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CTFCard;