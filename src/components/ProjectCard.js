function ProjectCard({ title, description, link }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card bg-dark text-light border-success shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-success">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-3 text-decoration-none text-success fw-bold"
            style={{ fontFamily: "monospace" }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;