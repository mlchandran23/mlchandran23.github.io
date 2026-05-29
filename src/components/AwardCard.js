/**
 * AwardCard
 * Props (from AWARDS array in theme.js):
 *   name        — award / honor name
 *   issuer      — organization that granted it
 *   date        — year or date string
 *   description — optional short description
 */
function AwardCard({ name, issuer, date, description }) {
  return (
    <div className="info-card award-card">
      <div className="info-card-header">
        <div className="info-card-org">{issuer}</div>
        <span className="info-card-date">{date}</span>
      </div>

      <div className="info-card-title">{name}</div>

      {description && (
        <p className="info-card-desc">{description}</p>
      )}
    </div>
  );
}

export default AwardCard;