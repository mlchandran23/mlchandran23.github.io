import { useEffect } from "react";
import { SITE, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS, AWARDS } from "../theme";
import SectionHeading from "../components/SectionHeading";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import CertificationCard from "../components/CertificationCard";
import AwardCard from "../components/AwardCard";

function About() {
  useEffect(() => {
    document.title = `About | ${SITE.name}`;
  }, []);

  return (
    <main>
      <div className="page-container">

        <SectionHeading label="About" title="About Me" />

        <div className="about-grid">

          {/* ── Left column ──────────────────────── */}
          <div>

            {/* Bio */}
            <div className="card-base fade-in" style={{ marginBottom: "var(--gap-xl)" }}>
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "1rem" }}>
                I'm an undergraduate student at <strong style={{ color: "var(--text-heading)" }}>The Ohio State University</strong> majoring
                in Computer and Information Sciences with a specialization in{" "}
                <strong style={{ color: "var(--accent)" }}>Information Computation Assurance</strong><br></br> (Cyber Security).
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.8, marginBottom: "1rem" }}>
                I'm a recipient of the <strong style={{ color: "var(--text-heading)" }}>Buckeye CyberCorps SFS Scholarship</strong>, a
                U.S. government cybersecurity scholarship with a post-graduation service commitment. I serve as{" "}
                <strong style={{ color: "var(--text-heading)" }}>CTF Lead</strong> for the OSU Cybersecurity Club,
                organizing and leading competitions including web exploitation, cryptography, and reverse engineering.
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-dim)", lineHeight: 1.8 }}>
                I'm seeking <strong style={{ color: "var(--accent)" }}>cybersecurity internships</strong> where
                I can apply skills developed through coursework, personal projects, and hands-on CTF competition.
              </p>
            </div>

            {/* ── Education ──────────────────────── */}
            <section style={{ marginBottom: "var(--gap-xl)" }}>
              <SectionHeading label="02" title="Education" />
              <div className="card-stack fade-in fade-in-delay-1">
                {EDUCATION.map((edu, i) => (
                  <EducationCard key={i} {...edu} />
                ))}
              </div>
            </section>

            {/* ── Awards & Honors ────────────────── */}
            <section style={{ marginBottom: "var(--gap-xl)" }}>
              <SectionHeading label="03" title="Awards & Honors" />
              <div className="card-stack fade-in fade-in-delay-2">
                {AWARDS.map((award, i) => (
                  <AwardCard key={i} {...award} />
                ))}
              </div>
            </section>

            {/* ── Experience ─────────────────────── */}
            <section style={{ marginBottom: "var(--gap-xl)" }}>
              <SectionHeading label="04" title="Experience" />
              <div className="card-stack fade-in fade-in-delay-2">
                {EXPERIENCE.map((exp, i) => (
                  <ExperienceCard key={i} {...exp} />
                ))}
              </div>
            </section>

            {/* ── Certifications ─────────────────── */}
            <section>
              <SectionHeading label="05" title="Certifications" />
              <div className="card-stack fade-in fade-in-delay-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <CertificationCard key={i} {...cert} />
                ))}
              </div>
            </section>

          </div>

          {/* ── Right column: Skills Panel ───────── */}
          <aside>
            <div className="skills-panel fade-in fade-in-delay-1">
              <h3>Skills</h3>

              <div className="skill-group">
                <div className="skill-group-label">Languages</div>
                <div className="tags">
                  {SKILLS.languages.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <div className="skill-group-label">Security &amp; Systems</div>
                <div className="tags">
                  {SKILLS.security.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <div className="skill-group-label">Tools &amp; Frameworks</div>
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