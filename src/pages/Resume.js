import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "Resume | Matt Chandran Portfolio";
  }, []);

  return (
    <div className="container py-5 text-light">

      <h1 className="text-center text-success mb-4">
        Resume
      </h1>

      <p className="text-center mb-4">
        Download or preview my resume below.
      </p>

      {/* Download Button */}
      <div className="text-center mb-4">
        <a
          href="/matthew_chandran_resume.pdf"
          className="btn btn-success"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>

      {/* Embedded Resume Preview */}
      <div className="ratio ratio-16x9 border border-success">
        <iframe
          src="/matthew_chandran_resume.pdf"
          title="Resume"
          className="bg-light"
        />
      </div>

    </div>
  );
}

export default Resume;