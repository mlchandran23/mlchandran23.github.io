/**
 * SectionHeading
 * Props:
 *   label   — small uppercase label above (e.g. "// 01")
 *   title   — main h2 text
 *   className — optional extra classes
 */
function SectionHeading({ label, title, className = "" }) {
  return (
    <div className={`section-heading ${className}`}>
      {label && <div className="sh-label">{label}</div>}
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;