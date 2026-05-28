import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SITE, SKILLS, PROJECTS } from "../theme";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

function Home() {
  useEffect(() => {
    document.title = `${SITE.name} · Portfolio`;
  }, []);

  const completedProjects = PROJECTS.filter(p => p.status === "Completed").length;
  const totalProjects = PROJECTS.length;

  return (
    <main>
      <div className="page-container">

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="hero fade-in">

          <div className="hero-kicker">
            Open to Internships · Summer 2026
          </div>

          <h1>
            Hi, I'm <span className="name-highlight">{SITE.name}</span>
          </h1>

          <p className="hero-sub">
            Computer and Information Science student at <strong>The Ohio State University</strong> specializing
            in cybersecurity. Buckeye CyberCorps SFS Scholarship recipient and CTF Lead at the
            OSU Cybersecurity Club.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View Projects</Link>
            <Link to="/resume"   className="btn-ghost">View Resume</Link>
            <div className="hero-divider" />
            <div className="hero-social">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon"
                title="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

        </section>

        {/* ── Stats ───────────────────────────────────── */}
        <div className="stat-row fade-in fade-in-delay-1">
          <div className="stat-item">
            <span className="stat-value">3.78</span>
            <span className="stat-label">GPA</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{totalProjects}</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">Sec+</span>
            <span className="stat-label">In Progress</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">SFS</span>
            <span className="stat-label">Scholar</span>
          </div>
        </div>

        {/* ── Technical Skills ────────────────────────── */}
        <section className="fade-in fade-in-delay-2" style={{ marginBottom: "var(--gap-xl)" }}>
          <div className="section-heading">
            <div className="sh-label">Skills</div>
            <h2>Technical Highlights</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--gap-md)" }}>
            <div>
              <div className="skill-group-label">Languages</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {SKILLS.languages.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-group-label">Security &amp; Systems</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {SKILLS.security.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="skill-group-label">Tools &amp; Frameworks</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {SKILLS.tools.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Currently Working On ────────────────────── */}
        <div className="cta-strip fade-in fade-in-delay-3">
          <h3>Currently Working On</h3>
          <ul>
            <li>Studying for CompTIA Security+ (expected 2026)</li>
            <li>Custom SIEM Tool on Raspberry Pi</li>
            <li>High-Performance TCP Port Scanner in Python</li>
          </ul>
        </div>

      </div>
    </main>
  );
}

export default Home;