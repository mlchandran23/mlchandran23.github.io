function ContactCard({ label, value, link }) {
  return (
    <div className="col-md-6 col-lg-4">
      <a 
        href={link || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-decoration-none"
      >
        <div className="card bg-dark text-light border-success shadow-sm h-100 hover-glow">
          <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
            <h5 className="card-title text-success">{label}</h5>
            <p style={{ fontFamily: "monospace", color: "#00ff7f" }}>{value}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ContactCard;