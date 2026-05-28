// ============================================================
//  SITE CONFIG — single point of control
//  Edit this file to update colors, fonts, nav, content, etc.
// ============================================================

// --- Identity ---
export const SITE = {
  name: "Matthew Chandran",
  shortName: "Matt Chandran",
  tagline: "CS Student · Cybersecurity · SFS Scholar",
  subtitle: "B.S. Computer & Information Sciences @ The Ohio State University",
  email: "mattchandran23@gmail.com",
  linkedin: "https://www.linkedin.com/in/matthew-chandran-18bb56384/",
  github: "https://github.com/mlchandran23",
  githubUser: "mlchandran23",
  resumePdf: "/matthew_chandran_resume.pdf",
  lastUpdated: "May 2026",
};

// --- Navigation ---
export const NAV_LINKS = [
  { label: "Home",     path: "/"         },
  { label: "About",    path: "/about"    },
  { label: "Projects", path: "/projects" },
  { label: "Resume",   path: "/resume"   },
  { label: "Contact",  path: "/contact"  },
];

// --- Skills (used on Home + About) ---
export const SKILLS = {
  languages: ["Python", "C", "Java", "JavaScript / TypeScript", "Ruby", "Bash"],
  security:  ["Linux Systems", "Network Scanning", "Log Analysis", "Web Security (OWASP Top 10)", "Burp Suite", "Ghidra", "Wireshark"],
  tools:     ["Git / GitHub", "Asyncio", "REST APIs", "React", "Ruby on Rails", "SQLite"],
};

// --- Projects ---
export const PROJECTS = [
  {
    id: 1,
    title: "Custom SIEM Tool",
    shortDesc: "Lightweight SIEM on a Raspberry Pi parsing Linux logs in real time.",
    longDesc:
      "Built a lightweight SIEM tool on a Raspberry Pi to ingest, parse, and analyze Linux system logs in real time. Developed a detection engine with custom rules for SSH brute-force attacks, failed login thresholds, and privilege escalation events. Designed a modular rule-based detection pipeline for scalable threat analysis. Simulated SSH brute-force attacks to validate detection accuracy.",
    githubLink: null,
    technologies: ["Python", "Linux", "Log Analysis", "Security Monitoring", "Raspberry Pi"],
    status: "In Progress",
    featured: true,
  },
  {
    id: 2,
    title: "High-Performance TCP Port Scanner",
    shortDesc: "Async TCP port scanner with banner grabbing built in Python.",
    longDesc:
      "Developed an asynchronous TCP port scanner using Python's asyncio library capable of scanning large IP ranges efficiently. Implemented banner grabbing to identify running services and potential vulnerabilities. Concurrent scanning of multiple targets simulates real-world network reconnaissance scenarios.",
    githubLink: "https://github.com/mlchandran23/port-scanner",
    technologies: ["Python", "Asyncio", "Sockets", "TCP/IP", "JSON"],
    status: "In Progress",
    featured: true,
  },
  {
    id: 3,
    title: "CTF Writeups Repository",
    shortDesc: "Documented solutions to BuckeyeCTF 2025 across web, crypto, and forensics.",
    longDesc:
      "Documented writeups for challenges completed during the 2025 BuckeyeCTF competition at The Ohio State University. Covered web exploitation, cryptography, forensics, and miscellaneous categories. Used Burp Suite, Ghidra, Python, and Bash to identify and exploit vulnerabilities including insecure authentication and cryptographic weaknesses.",
    githubLink: "https://github.com/mlchandran23/BuckeyeCTF-2025",
    technologies: ["Python", "Bash", "WSL", "Burp Suite", "Forensics"],
    status: "Completed",
    featured: true,
  },
  {
    id: 4,
    title: "Buckeye Flow | HackOhio",
    shortDesc: "React app showing real-time library capacity at Ohio State.",
    longDesc:
      "Created a prototype web application at the HackOhio Hackathon that displays capacities at Ohio State University Libraries. Uses React to render a map with color-coded markers based on available spaces, providing quality-of-life improvements for OSU students.",
    githubLink: "https://github.com/mlchandran23/BuckeyeFlow",
    technologies: ["React", "TypeScript", "Vite", "GitHub"],
    status: "Completed",
    featured: false,
  },
  {
    id: 5,
    title: "Canvas GPA Calculator",
    shortDesc: "Ruby tool integrating with the Canvas API for academic data.",
    longDesc:
      "Built a Ruby application that uses the Canvas API to automate academic data retrieval including GPA calculation, grade lookup, course listings, and assignment tracking. Implemented REST API calls, JSON parsing, and token-based authentication. Focused on secure handling of API tokens via environment variables.",
    githubLink: "https://github.com/mlchandran23/Canvas-GPA-Calculator",
    technologies: ["Ruby", "REST API", "JSON", "HTTParty", "ENV"],
    status: "Completed",
    featured: false,
  },
  {
    id: 6,
    title: "Trip Expense Tracker",
    shortDesc: "Full-stack Rails app for splitting trip expenses among friends.",
    longDesc:
      "Created a web application using Ruby on Rails and CRUD APIs to manage trip debts. Users can add trips and expenses, and the app automatically resolves balances among friends. Follows MVC architecture with a SQLite backend.",
    githubLink: "https://github.com/mlchandran23/TripExpenseTracker",
    technologies: ["Ruby", "Rails", "SQLite", "CRUD API", "MVC"],
    status: "Completed",
    featured: false,
  },
];

// --- Experience (used on About + Resume) ---
export const EXPERIENCE = [
  {
    role: "Program Instructor",
    org: "Tech Corps",
    location: "Columbus, OH",
    dates: "May 2026 – Present",
    bullets: [
      "Taught foundational AI concepts through hands-on instruction and guided problem solving.",
      "Supported high school students, improving accessibility to technical education.",
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    org: "The Ohio State University",
    location: "Columbus, OH",
    dates: "January 2026 – Present",
    bullets: [
      "CSE 2431 (OS): Guided students in memory management, processes, and concurrency; debugged C programs in Linux.",
      "CSE 3901 (Web Apps): Mentored students in full-stack dev, secure coding, and input validation.",
      "Administered GitHub Organization for projects and access control across multiple teams.",
    ],
  },
];

// --- Education ---
export const EDUCATION = [
  {
    degree: "B.S. Computer and Information Sciences",
    school: "The Ohio State University",
    dates: "Aug. 2023 – May 2027 (expected)",
    gpa: "3.78",
    details: [
      "Specialization: Information Computation Assurance (Cybersecurity)",
      "Buckeye CyberCorps SFS Scholarship Recipient",
      "CTF Lead, Cybersecurity Club",
      "Relevant Coursework: Operating Systems, Computer Networking, Web Applications, Low Level Programming",
    ],
  },
  {
    degree: "M.S. Computer Science and Engineering (Combined B.S./M.S.)",
    school: "The Ohio State University",
    dates: "May 2028 (expected)",
    gpa: null,
    details: [],
  },
];

// --- Certifications ---
export const CERTIFICATIONS = [
  { name: "CompTIA Security+", status: "In Progress — Expected 2026" },
];

// --- CSS design tokens (mirrored in App.css via :root) ---
// Kept here for reference; the actual CSS variables live in App.css
export const THEME_REF = {
  colors: {
    bg:         "#0d0d0d",
    bgSurface:  "#141414",
    bgCard:     "#1a1a1a",
    border:     "#1f2f1f",
    accent:     "#39ff14",   // acid green
    accentDim:  "#1a8c00",
    text:       "#d4d4d4",
    textMuted:  "#6b7280",
    textDim:    "#9ca3af",
    danger:     "#ff4444",
  },
};