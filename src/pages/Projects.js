import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Matt Chandran Portfolio";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Multithreaded Port Scanner",
      shortDesc: "High-performance TCP port scanner built in Python.",
      longDesc:
        "Developed a multithreaded TCP port scanner using Python's ThreadPoolExecutor. Implemented banner grabbing, timeout handling, and open port detection. Designed for efficient network reconnaissance and cybersecurity testing.",
      githubLink: "https://github.com/mlchandran23/",
      technologies: ["Python", "ThreadPoolExecutor", "Sockets", "TCP/IP"],
      status: "Completed",
    },
    {
      id: 2,
      title: "Trip Expense Tracker",
      shortDesc: "Web Application for handling trip debts among friends.",
      longDesc:
        "Created a Web Application using Ruby on Rails, and CRUD APIs. Add trips and expenses to resolve debts for your friends.",
      githubLink: "https://github.com/mlchandran23/TripExpenseTracker",
      technologies: ["Ruby", "Rails", "SQLite", "CRUD API"],
      status: "Completed",
    },
    {
      id: 3,
      title: "Custom Network Traffic Analyzer",
      shortDesc: "Packet inspection and analysis tool.",
      longDesc:
        "Created a lightweight network traffic analyzer capable of capturing and analyzing packet data. Focused on identifying suspicious traffic patterns and understanding TCP/IP protocol behavior for defensive security analysis.",
      githubLink: "https://github.com/mlchandran23/",
      technologies: ["Python", "ThreadPoolExecutor", "Sockets", "TCP/IP"],
      status: "Completed",
    },
    {
      id: 4,
      title: "Buckeye Flow",
      shortDesc: "Web Application to see Library Capacities at the Ohio State University.",
      longDesc:
        "Created a Prototype Web Application at the Hack Ohio Hackathon that displays capacitites at Ohio State University Libraries. Uses React to display a map with color coded markers depending on open spaces, along with capacity data.",
      githubLink: "https://github.com/mlchandran23/BuckeyeFlow",
      technologies: ["React", "TypeScript", "Vite", "GitHub"],
      status: "Completed",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center text-success mb-5">My Projects</h1>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6">
            <ProjectCard
              title={project.title}
              shortDesc={project.shortDesc}
              longDesc={project.longDesc}
              githubLink={project.githubLink}
              technologies={project.technologies}
              status={project.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;