import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SITE } from "../theme";
import { GitHubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";


function AppNavbar() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
  setTheme(t => (t === "light" ? "dark" : "light"));
  };

  return (
    <nav className="site-navbar">
      <div className="navbar-inner">

        {/* Brand */}
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          {SITE.name}
        </Link>

        {/* Mobile toggle */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Links */}
        <ul className={`nav-links${open ? " open" : ""}`}>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) => isActive ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social icons — desktop only */}
        <div className="nav-social">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <GitHubIcon />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <LinkedInIcon />
          </a>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default AppNavbar;