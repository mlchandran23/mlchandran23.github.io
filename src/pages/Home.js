import { useEffect } from "react";

function Home() {

  useEffect(() => {
    document.title = "Matt Chandran Portfolio";
  }, []);

  return (
    <div className="container py-5">

      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="text-success">Matt Chandran</h1>
        <p className="lead text-light">
          Computer Science Student | Aspiring Cybersecurity Engineer
        </p>
        <p className="text-muted">
          Focused on network security, systems programming, and defensive security tools.
        </p>
      </div>

      {/* About */}
      <div className="mb-5">
        <h3 className="text-success mb-3">About Me</h3>
        <p>
          I am a Computer Science student interested in cybersecurity, network
          analysis, and systems programming. I enjoy building tools that help
          analyze networks, identify vulnerabilities, and understand how
          systems behave under attack.
        </p>

        <p>
          Currently seeking cybersecurity or software engineering internships
          where I can apply my knowledge of networking, security principles,
          and software development.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-5">
        <h3 className="text-success mb-3">Technical Focus</h3>

        <div>
          <span className="badge bg-success me-2 mb-2">Python</span>
          <span className="badge bg-success me-2 mb-2">Networking</span>
          <span className="badge bg-success me-2 mb-2">TCP/IP</span>
          <span className="badge bg-success me-2 mb-2">Security Tools</span>
          <span className="badge bg-success me-2 mb-2">Multithreading</span>
          <span className="badge bg-success me-2 mb-2">Linux</span>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="mb-5">
        <h3 className="text-success mb-3">Featured Work</h3>

        <ul>
          <li>Multithreaded TCP Port Scanner</li>
          <li>Custom Network Traffic Analyzer</li>
          <li>Trip Expense Tracker (Web Application)</li>
        </ul>

        <p>
          See the <a href="/projects" className="text-success">Projects page</a> for details.
        </p>
      </div>

    </div>
  );
}

export default Home;