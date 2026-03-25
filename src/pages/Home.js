import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  useEffect(() => {
    document.title = "Matthew Chandran Portfolio";
  }, []);

  return (
    <div className="container py-5">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="text-success">Matthew Chandran</h1>
        <p className="lead text-light">
          Computer Science Student | Aspiring Cybersecurity Engineer
        </p>
      </div>

      {/* About */}
      <div className="mb-5">
        <h3 className="text-success mb-3">About Me</h3>
        <p>
          I am an undergraduate student at the Ohio State University majoring in Computer and Information Sciences,
          with a specialization in Information Computation Assurance (ICA). Along with my academics, I am involved with the Cyber Security club in which I am the CTF Lead (see more under "Resume" tab). I am interested in cybersecurity, network
          analysis, and systems programming.
        </p>

        <p>
          Currently seeking cybersecurity or technology internships
          where I can apply my knowledge gained through projects and courses.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <h3 className="text-success mb-3">Technical Highlights</h3>

        <div>
          <span className="badge bg-success me-2 mb-2">Python</span>
          <span className="badge bg-success me-2 mb-2">C</span>
          <span className="badge bg-success me-2 mb-2">JavaScript</span>
          <span className="badge bg-success me-2 mb-2">Linux</span>
          <span className="badge bg-success me-2 mb-2">Git</span>
        </div>
      </div>

      {/* Working On*/}
      <div className="mb-5">
        <h3 className="text-success mb-3">What I'm Working On</h3>

        <ul>
          <li>Port Scanner Project</li>
          <li>Utilizing Virtual Machines</li>
          <li>Learning tools such as Burpsuite</li>
        </ul>
      </div>

      <div className="text-center mt-5">
        <p>
          Interested in my work? Take a look at my projects or get in touch.
        </p>

        <Link to="/projects" className="btn btn-outline-success me-2">
          View Projects
        </Link>
        <Link to="/contact" className="btn btn-success">
          Contact Me
        </Link>
      </div>

    </div>
  );
}

export default Home;