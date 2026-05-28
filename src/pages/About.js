import { useEffect } from "react";
import { SITE, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from "../theme";
import SectionHeading from "../components/SectionHeading";

function About() {
  useEffect(() => {
    document.title = `About | ${SITE.name}`;
  }, []);

  return (
    <main>
      <div className="page-container">

        {/* ── Page Header ──────────────────────────── */}
        <SectionHeading label="// 01" title="About Me" />

        <div className="about-grid">

          {/* ── Left column: Bio + Timeline ────────── */}
          <div>

            {/* Bio */}
            <div className="card-base fade-in" style={{ marginBottom: "var(--gap-xl)" }}>
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "1rem" }}>
                I'm an undergraduate student at <strong style={{ color: "var(--text-heading)" }}>The Ohio State University</strong> majoring
                in Computer and Information Sciences with a specialization in <strong style={{ color: "var(--accent)" }}>Information Computation Assurance</strong> — 
                essentially cybersecurity.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "1rem" }}>
                I'm a recipient of the <strong style={{ color: "var(--text-heading)" }}>Buckeye CyberCorps SFS Scholarship</strong>, a 
                U.S. government cybersecurity scholarship that includes a service commitment. I serve as 
                <strong style={{ color: "var(--text-heading)" }}> CTF Lead</strong> for the OSU Cybersecurity Club, 
                where I organize and run Capture-The-Flag competitions across web exploitation, cryptography, and reverse engineering.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.8 }}>
                I'm currently seeking <strong style={{ color: "var(--accent)" }}>cybersecurity or technology internships</strong> where 
                I can apply skills developed through coursework, personal projects, and hands-on CTF competition.
              </p>
            </div>

            {/* Education */}
            <section style={{ marginBottom: "var(--gap-xl)" }}>
              <SectionHeading label="// 02" title="Education" />

              <div className="timeline fade-in fade-in-delay-1">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-dates">{edu.dates.replace(" – ", "\n–\n")}</div>
                    <div className="timeline-content">
                      <div className="tl-org">{edu.school}</div>
                      <div className="tl-role">{edu.degree}</div>
                      {edu.gpa && (
                        <div style={{ marginBottom: "0.5rem" }}>
                          <span className="tag">GPA: {edu.gpa}</span>
                        </div>
                      )}
                      {edu.details.length > 0 && (
                        <ul>
                          {edu.details.map((d, j) => (
                            <li key={j}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section style={{ marginBottom: "var(--gap-xl)" }}>
              <SectionHeading label="// 03" title="Experience" />

              <div className="timeline fade-in fade-in-delay-2">
                {EXPERIENCE.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <div className="timeline-dates">
                      {exp.dates.replace(" – ", "\n–\n")}
                    </div>
                    <div className="timeline-content">
                      <div className="tl-org">{exp.org} · {exp.location}</div>
                      <div className="tl-role">{exp.role}</div>
                      <ul>
                        {exp.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <SectionHeading label="// 04" title="Certifications" />
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} className="fade-in fade-in-delay-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="card-base" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--gap-md) var(--gap-lg)" }}>
                    <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-heading)", fontSize: "0.9rem" }}>
                      {cert.name}
                    </span>
                    <span className="tag tag-warn">{cert.status}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Right column: Skills Panel ─────────── */}
          <aside>
            <div className="skills-panel fade-in fade-in-delay-1">
              <h3>// skills</h3>

              <div className="skill-group">
                <div className="skill-group-label">Languages</div>
                <div className="tags">
                  {SKILLS.languages.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <div className="skill-group-label">Security & Systems</div>
                <div className="tags">
                  {SKILLS.security.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <div className="skill-group-label">Tools & Frameworks</div>
                <div className="tags">
                  {SKILLS.tools.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}

export default About;