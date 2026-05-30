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
          Feel free to reach out via any of the channels below.
        </p>

        <div className="contact-grid fade-in fade-in-delay-1">
          {contacts.map((c, i) => (
            <ContactCard key={i} {...c} />
          ))}
        </div>

      </div>
    </main>
  );
}

export default Contact;