// Maps category string → CSS class suffix for color coding
function getCategoryClass(categories) {
  const map = {
    "Web":       "web",
    "Forensics": "forensics",
    "Cryptography":    "crypto",
    "Pwn":       "pwn",
    "Reverse Engineering":       "rev",
    "Misc":      "misc",
    "OSINT":     "osint",
  };
  return map[categories] || "misc";
}

/**
 * CTFCard
 * Props (from CTF_WRITEUPS array in theme.js):
 *   challengeName — name of the specific challenge
 *   ctfName       — name of the CTF competition
 *   organizer     — who ran it
 *   category      — Web | Forensics | Crypto | Pwn | Rev | Misc | OSINT
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
  categories = [],
  description,
  writeupLink,
  image,
  technologies = [],
  placement,
}) {
  const primaryCategory = categories[0] || "Misc";
  const catClass = getCategoryClass(primaryCategory);

  return (
    <div className="ctf-card fade-in">

      {/* ── Image area ──────────────────────────── */}
      <div className="ctf-img-wrap">
        {image ? (
          <img
            className="ctf-img"
            src={image}
            alt={`${organizer} logo`}
          />
        ) : (
          <div className="ctf-img-placeholder">
            <span className="ctf-img-placeholder-icon">🚩</span>
          </div>
        )}
        {/* Category stripe overlaid at bottom of image */}
        <div className={`ctf-category-stripe cat-${catClass}`} />
      </div>

      {/* ── Body ────────────────────────────────── */}
      <div className="ctf-body">

        {/* Meta: organizer · category badge */}
        <div className="ctf-meta">
          <span className="ctf-organizer">{organizer}</span>
          <span className="ctf-dot" />
          {categories.map(cat => (
            <span
              key={cat}
              className={`cat-badge cat-${getCategoryClass(cat)}`}
            >
              {cat}
            </span>
          ))}
          {placement && <span className="tag tag-success">{placement}</span>}
        </div>

        {/* Challenge name */}
        <div className="ctf-title">{challengeName}</div>

        {/* CTF competition name */}
        <div className="ctf-event">{ctfName}</div>

        {/* Description */}
        <p className="ctf-desc">{description}</p>

        {/* Technology tags */}
        {technologies.length > 0 && (
          <div className="ctf-tags">
            {technologies.map((t, i) => (
              <span key={i} className="tag">{t}</span>
            ))}
          </div>
        )}

        {/* Direct link button — always visible at bottom */}
        {writeupLink ? (
          <a
            className="ctf-link-btn"
            href={writeupLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Writeup ↗
          </a>
        ) : (
          <span className="ctf-link-btn ctf-link-btn--disabled">
            Writeup Coming Soon
          </span>
        )}

      </div>
    </div>
  );
}

export default CTFCard;