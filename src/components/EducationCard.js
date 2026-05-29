/**
 * EducationCard
 * Props (from EDUCATION array in theme.js):
 *   degree   — degree name
 *   school   — institution name
 *   location — city/state
 *   dates    — date range string
 *   gpa      — optional GPA string
 *   details  — string[] of bullet points
 */
function EducationCard({ degree, school, location, dates, gpa, details = [] }) {
  return (
    <div className="info-card">
      <div className="info-card-header">
        <div>
          <div className="info-card-org">{school}{location ? ` · ${location}` : ""}</div>
        </div>
        <span className="info-card-date">{dates}</span>
      </div>

      <div className="info-card-title">{degree}</div>

      {gpa && (
        <div className="info-card-chips">
          <span className="tag">GPA: {gpa}</span>
        </div>
      )}

      {details.length > 0 && (
        <ul className="info-card-details">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EducationCard;