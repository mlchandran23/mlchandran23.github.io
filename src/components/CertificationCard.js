/**
 * CertificationCard
 * Props (from CERTIFICATIONS array in theme.js):
 *   name        — certification name
 *   issuer      — issuing body
 *   status      — "In Progress" | "Earned"
 *   expected    — optional expected date string
 *   description — optional description text
 */
function CertificationCard({ name, issuer, status, expected, description }) {
  const isEarned = status === "Earned";
  const chipClass = isEarned ? "cert-status-chip status-earned" : "cert-status-chip status-inprogress";
  const chipLabel = isEarned ? "✓ Earned" : `In Progress${expected ? ` — Expected ${expected}` : ""}`;

  return (
    <div className="info-card cert-card">
      <div className="info-card-header">
        <div className="info-card-org">{issuer}</div>
        <span className={chipClass}>{chipLabel}</span>
      </div>

      <div className="info-card-title">{name}</div>

      {description && (
        <p className="info-card-desc">{description}</p>
      )}
    </div>
  );
}

export default CertificationCard;