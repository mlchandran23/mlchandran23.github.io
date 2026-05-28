import { useEffect, useState } from "react";
import { SITE, PROJECTS } from "../theme";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";

const FILTERS = ["All", "In Progress", "Completed"];

function Projects() {
  useEffect(() => {
    document.title = `Projects | ${SITE.name}`;
  }, []);

  const [filter, setFilter] = useState("All");

  const visible = PROJECTS.filter(p =>
    filter === "All" ? true : p.status === filter
  );

  return (
    <main>
      <div className="page-container">

        <SectionHeading label="// projects" title="My Projects" />

        <p style={{ color: "var(--text-dim)", marginBottom: "var(--gap-lg)", fontSize: "0.9rem" }}>
          A mix of cybersecurity tooling, full-stack applications, and CTF research.
          Click any card for details.
        </p>

        {/* Filter */}
        <div className="projects-filter">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span style={{ marginLeft: "0.35rem", opacity: 0.6 }}>
                ({f === "All" ? PROJECTS.length : PROJECTS.filter(p => p.status === f).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {visible.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              shortDesc={project.shortDesc}
              longDesc={project.longDesc}
              githubLink={project.githubLink}
              technologies={project.technologies}
              status={project.status}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <div style={{ textAlign: "center", color: "var(--text-muted)", fontFamily: "var(--font-mono)", padding: "var(--gap-xl)" }}>
            no projects match that filter.
          </div>
        )}

      </div>
    </main>
  );
}

export default Projects;