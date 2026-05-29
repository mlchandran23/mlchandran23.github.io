import { Link } from "react-router-dom";
import { SITE, NAV_LINKS } from "../theme";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";


function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-name">{SITE.name}</div>
      <div className="footer-sub">{SITE.tagline}</div>

      <div className="footer-social">
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" title="GitHub">
          <GitHubIcon />
        </a>
        <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedInIcon />
        </a>
        <a href={`mailto:${SITE.email}`} title="Email">
          <EmailIcon />
        </a>
      </div>

      <div className="footer-copy">
        © {new Date().getFullYear()} {SITE.name} · Built with React · Last Updated: {SITE.lastUpdated}
        <br></br><small style={{ opacity: 0.7, fontSize: "0.8rem" }}>
          Hosted on GitHub Pages. No tracking cookies or personal data collected. View{" "}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            GitHub Privacy
          </a>.
        </small>
      </div>
    </footer>
  );
}

export default Footer;