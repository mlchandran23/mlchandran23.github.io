import { useEffect, useState } from "react";
import { SITE, CTF_WRITEUPS } from "../theme";
import CTFCard from "../components/CTFCard";
import SectionHeading from "../components/SectionHeading";

// Derive unique categories from the data for filter buttons
const ALL_CATEGORIES = [
  "All",
  ...Array.from(
    new Set(
      CTF_WRITEUPS.flatMap(w => w.categories)
    )
  )
];

function CTFWriteups() {
  useEffect(() => {
    document.title = `CTF Writeups | ${SITE.name}`;
  }, []);

  const [filter, setFilter] = useState("All");

  const visible = CTF_WRITEUPS.filter(w =>
  filter === "All"
    ? true
    : w.categories.includes(filter)
  );

  return (
    <main>
      <div className="page-container">

        <SectionHeading label="CTF" title="CTF Writeups" />

        <p
          className="fade-in"
          style={{
            color: "var(--text-dim)",
            fontSize: "0.95rem",
            maxWidth: 620,
            lineHeight: 1.75,
            marginBottom: "var(--gap-lg)",
          }}
        >
          Documented solutions to Capture-The-Flag challenges across web exploitation, cryptography,
          forensics, and more.
        </p>

        {/* ── Filter ─────────────────────────────── */}
        <div className="projects-filter fade-in fade-in-delay-1">
          {ALL_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              <span style={{ marginLeft: "0.3rem", opacity: 0.6 }}>
                ({cat === "All"
                  ? CTF_WRITEUPS.length
                  : CTF_WRITEUPS.filter(w => w.categories.includes(cat)).length})
              </span>
            </button>
          ))}
        </div>

        {/* ── Grid ───────────────────────────────── */}
        <div className="ctf-grid fade-in fade-in-delay-2">
          {visible.map(writeup => (
            <CTFCard key={writeup.id} {...writeup} />
          ))}
        </div>

        {visible.length === 0 && (
          <div
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              padding: "var(--gap-xl)",
              fontSize: "0.9rem",
            }}
          >
            No writeups in this category yet.
          </div>
        )}

        {/* ── Info strip ─────────────────────────── */}
        <div className="cta-strip fade-in fade-in-delay-3" style={{ marginTop: "var(--gap-xl)" }}>
          <h3>About My CTF Involvement</h3>
          <ul>
            <li>CTF Lead at the OSU Cybersecurity Club — Assist in organizing club competitions</li>
            <li>Competed in BuckeyeCTF 2025 hosted at The Ohio State University</li>
          </ul>
        </div>

      </div>
    </main>
  );
}

export default CTFWriteups;