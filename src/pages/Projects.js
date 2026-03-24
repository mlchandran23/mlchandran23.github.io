import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Matt Chandran Portfolio";
  }, []);

  const projects = [
    {
      id: 1,
      title: "Port Scanner",
      shortDesc: "High-performance TCP port scanner built in Python.",
      longDesc:
        "Developed an asynchronous TCP port scanner using Python's asyncio library. Implemented banner grabbing, timeout handling, and open port detection. Designed for cybersecurity testing.",
      githubLink: "https://github.com/mlchandran23/port-scanner",
      technologies: ["Python", "Asyncio", "Sockets", "TCP/IP", "JSON"],
      status: "In Progress",
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
      title: "Buckeye Flow | Hack Ohio",
      shortDesc: "Web Application to see Library Capacities at the Ohio State University.",
      longDesc:
        "Created a Prototype Web Application at the Hack Ohio Hackathon that displays capacitites at Ohio State University Libraries. Uses React to display a map with color coded markers depending on open spaces, along with capacity data.",
      githubLink: "https://github.com/mlchandran23/BuckeyeFlow",
      technologies: ["React", "TypeScript", "Vite", "GitHub"],
      status: "Completed",
    },
    {
      id: 4,
      title: "Buckeye CTF Write-Up",
      shortDesc: "Writeups for the 2025 BuckeyeCTF competition at the Ohio State University",
      longDesc: "",
      githubLink: "https://github.com/mlchandran23/BuckeyeCTF-2025",
      technologies: ["Python", "Bash", "WSL", "DOS", "Forensics"],
      status: "Completed",
    },
    {
      id: 5,
      title: "Canvas GPA Calculator",
      shortDesc: "Ruby tool that integrates with the Canvas API to retrieve grades, courses, and assignment data.",
      longDesc: "",
      githubLink: "https://github.com/mlchandran23/Canvas-GPA-Calculator",
      technologies: ["Ruby", "API", "ENV", "JSON", "HTTParty"],
      status: "Completed",
    }
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