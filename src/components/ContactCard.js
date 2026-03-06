import { useState } from "react";

function ContactCard({ label, value, link, copy }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (copy) {
      navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    }
  };

  return (
    <div className="col-md-6 col-lg-4">
      {copy ? (
        <div
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          className="text-decoration-none"
        >
          <div className="card bg-dark text-light border-success shadow-sm h-100 hover-glow">
            <div className="card-body d-flex flex-column justify-content-center align-items-center text-center">
              <h5 className="card-title text-success">{label}</h5>
              <p style={{ fontFamily: "monospace", color: "#00ff7f" }}>
                {copied ? "Copied!" : value}
              </p>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default ContactCard;