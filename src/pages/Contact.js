import { useEffect } from "react";
import { SITE } from "../theme";
import ContactCard from "../components/ContactCard";
import SectionHeading from "../components/SectionHeading";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../components/Icons";

function Contact() {
  useEffect(() => {
    document.title = `Contact | ${SITE.name}`;
  }, []);

  const contacts = [
    {
      label: "Email",
      value: SITE.email,
      icon: <EmailIcon />,
      copy: true,
      hint: "Click to copy",
    },
    {
      label: "LinkedIn",
      value: "Matthew Chandran",
      icon: <LinkedInIcon />,
      link: SITE.linkedin,
      hint: "Open LinkedIn ↗",
    },
    {
      label: "GitHub",
      value: SITE.githubUser,
      icon: <GitHubIcon />,
      link: SITE.github,
      hint: "Open GitHub ↗",
    },
  ];

  return (
    <main>
      <div className="page-container">

        <SectionHeading label="// contact" title="Get In Touch" />

        <p
          className="fade-in"
          style={{
            color: "var(--text-dim)",
            fontSize: "0.9rem",
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: "var(--gap-xl)",
          }}
        >
          I'm actively seeking <strong style={{ color: "var(--accent)" }}>cybersecurity internship opportunities</strong> for Summer 2026 and beyond.
          Feel free to reach out via any of the channels below.
        </p>

        <div className="contact-grid fade-in fade-in-delay-1">
          {contacts.map((c, i) => (
            <ContactCard key={i} {...c} />
          ))}
        </div>

        {/* Availability note */}
        <div
          className="cta-strip fade-in fade-in-delay-2"
          style={{ marginTop: "var(--gap-xl)" }}
        >
          <h3>// availability</h3>
          <ul>
            <li>Open to summer 2026 internships in cybersecurity</li>
            <li>Columbus, OH · willing to relocate or work remotely</li>
          </ul>
        </div>

      </div>
    </main>
  );
}

export default Contact;