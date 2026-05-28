import { useState } from "react";

/**
 * ContactCard
 * Props:
 *   label   — display label (e.g. "Email")
 *   value   — display text
 *   icon    — emoji or character icon
 *   link    — URL to open (if not copy)
 *   copy    — boolean: copy value to clipboard on click
 *   hint    — small hint text below value
 */
function ContactCard({ label, value, icon, link, copy, hint }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    if (!copy) return;
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const inner = (
    <div className={`contact-card${copied ? " copy-feedback" : ""}`} onClick={copy ? handleClick : undefined}>
      <div className="cc-icon">{icon}</div>
      <div className="cc-label">{label}</div>
      <div className="cc-value">{copied ? "✓ Copied!" : value}</div>
      {hint && <div className="cc-hint">{hint}</div>}
    </div>
  );

  if (copy) return inner;

  return (
    <a href={link || "#"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      {inner}
    </a>
  );
}

export default ContactCard;