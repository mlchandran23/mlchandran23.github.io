import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../theme";
import { GitHubIcon, LinkedInIcon } from "../components/Icons";

function Home() {
  useEffect(() => {
    document.title = `${SITE.name} · Portfolio`;
  }, []);

  return (
    <main>
      <div className="page-container">

        {/* ── Hero ─────────────────────────────────────── */}
        <section className="hero fade-in">
          <div className="hero-layout">

            {/* Left: text content */}
            <div className="hero-content">
              <h1>
                <span className="name-highlight">{SITE.name}</span>
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
            </div>

            {/* Right: headshot */}
            {SITE.photo && (
              <div className="hero-photo-wrap">
                <div className="hero-photo-ring">
                  <img
                    src={SITE.photo}
                    alt={`${SITE.name} headshot`}
                    className="hero-photo"
                  />
                </div>
              </div>
            )}

          </div>
        </section>

      </div>
    </main>
  );
}

export default Home;