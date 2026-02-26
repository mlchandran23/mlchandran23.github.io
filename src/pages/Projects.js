import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Matt Chandran Portfolio";
  }, []);

  const projects = [
    {
      title: "Network Scanner",
      description: "A Python-based network scanner for security auditing and vulnerability detection.",
      link: "https://github.com/mlchandran23/network-scanner"
    },
    {
      title: "Port Scanner",
      description: "Fast port scanning tool built in Python for testing open ports on remote hosts.",
      link: "https://github.com/mlchandran23/port-scanner"
    },
    {
      title: "Threaded File Analyzer",
      description: "A multithreaded file analysis tool for large datasets in C++/Python.",
      link: "https://github.com/mlchandran23/threaded-file-analyzer"
    }
  ];

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center text-light">Projects</h1>
      <p className="lead text-center mb-5 text-secondary">
        A selection of my cybersecurity and programming projects.
      </p>

      <div className="row g-4 justify-content-center">
        {projects.map((proj, idx) => (
          <ProjectCard 
            key={idx}
            title={proj.title} 
            description={proj.description} 
            link={proj.link} 
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;