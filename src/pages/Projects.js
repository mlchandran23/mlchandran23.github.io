import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Projects | Matt Chandran Portfolio";
  }, []);
  
  return (
    <div>
      <h1>My Projects</h1>
      <p>Here are some of the projects I’ve worked on.</p>
    </div>
  );
}

export default Projects;
