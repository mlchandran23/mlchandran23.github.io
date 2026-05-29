/**
 * ExperienceCard
 * Props (from EXPERIENCE array in theme.js):
 *   role     — job title
 *   org      — organization name
 *   location — city/state
 *   dates    — date range string
 *   bullets  — string[] of accomplishments
 */
function ExperienceCard({ role, org, location, dates, bullets = [] }) {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <div>
          <div className="info-card-org">{org}{location ? ` · ${location}` : ""}</div>
        </div>
        <span className="info-card-date">{dates}</span>
      </div>

      <div className="info-card-title">{role}</div>

      {bullets.length > 0 && (
        <ul className="info-card-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExperienceCard;