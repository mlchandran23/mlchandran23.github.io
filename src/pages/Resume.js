import { useEffect } from "react";

function Resume() {
  useEffect(() => {
    document.title = "Resume | Matt Chandran Portfolio";
  }, []);

  return (
    <div>
      <h1>My Resume</h1>
      <p>Download my resume or view experience here.</p>
    </div>
  );
}

export default Resume;
