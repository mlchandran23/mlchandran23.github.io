// ============================================================
//  SITE CONFIG — single point of control
// ============================================================

// --- Identity ---
export const SITE = {
  name: "Matthew Chandran",
  shortName: "Matt Chandran",
  tagline: "CS Student · Cybersecurity",
  subtitle: "B.S. Computer & Information Sciences @ The Ohio State University",
  email: "mattchandran23@gmail.com",
  linkedin: "https://www.linkedin.com/in/matthew-chandran",
  github: "https://github.com/mlchandran23",
  githubUser: "mlchandran23",
  photo: "/images/Portrait_placeholder.png",
  resumePdf: "/documents/matthew_chandran_resume.pdf",
  lastUpdated: "May 2026",
};

// --- Navigation ---
export const NAV_LINKS = [
  { label: "Home",        path: "/"         },
  { label: "About",       path: "/about"    },
  { label: "Projects",    path: "/projects" },
  { label: "CTF",         path: "/ctf"      },
  { label: "Resume",      path: "/resume"   },
  { label: "Contact",     path: "/contact"  },
];

// --- Skills (used on Home + About) ---
export const SKILLS = {
  languages: ["Python", "C", "Java", "JavaScript / TypeScript", "Ruby", "Bash"],
  security:  ["Linux Systems", "Network Scanning", "Log Analysis", "Web Security (OWASP Top 10)"],
  tools:     ["Git", "Burp Suite", "Ghidra", "Wireshark", "Nmap", "Kali Linux"],
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
    id: 4,
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
    id: 5,
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

// --- CTF Writeups ---
// image: path relative to /public, e.g. "/ctf/buckeye2025.png" — or null for placeholder
export const CTF_WRITEUPS = [
  {
    id: 1,
    challengeName: "Buckeye CTF 2025",
    ctfName: "BuckeyeCTF 2025",
    organizer: "The Ohio State University",
    category: "Web",
    description:
      "Identified and exploited an insecure authentication mechanism in a web application challenge. Analyzed HTTP requests with Burp Suite to discover a JWT signature bypass, then crafted a forged token to gain admin access.",
    writeupLink: "https://github.com/mlchandran23/BuckeyeCTF-2025",
    image: "/images/osu-cyber.png",
    technologies: ["Burp Suite", "JWT", "Python", "HTTP"],
    placement: null,
  },
  {
    id: 2,
    challengeName: "Bootcamp CTF",
    ctfName: "Bootcamp CTF",
    organizer: "The Ohio State University",
    category: "Forensics",
    description:
      "Inspected file metadata and used Linux command-line tools to extract hidden information embedded in an image file. Applied steganography techniques and hex analysis to recover the flag.",
    writeupLink: "https://github.com/mlchandran23/BootcampCTF",
    image: "/images/osu-cyber.png",
    technologies: ["Linux", "Bash", "Steganography", "Hex Analysis"],
    placement: null,
  },
];

// --- Experience ---
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
    location: "Columbus, OH",
    dates: "Aug. 2023 – May 2027 (expected)",
    gpa: "3.78",
    details: [
      "Specialization: Information Computation Assurance (Cybersecurity)",
      "CTF Lead, Cybersecurity Club",
      "Relevant Coursework: Operating Systems, Computer Networking, Web Applications, Low Level Programming",
    ],
  },
  // {
  //   degree: "M.S. Computer Science and Engineering (Combined B.S./M.S.)",
  //   school: "The Ohio State University",
  //   location: "Columbus, OH",
  //   dates: "May 2028 (expected)",
  //   gpa: null,
  //   details: [],
  // },
];

// --- Awards & Honors ---
export const AWARDS = [
  {
    name: "Buckeye CyberCorps SFS Scholarship",
    issuer: "U.S. National Science Foundation / The Ohio State University",
    date: "2024",
    description:
      "Highly competitive U.S. government scholarship for students pursuing cybersecurity careers in federal service.",
  },
  {
    name: "Dean's List",
    issuer: "The Ohio State University",
    date: "2023 – Present",
    description: "Awarded for achieving semester GPA of 3.5 or above.",
  },
];

// --- Certifications ---
export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    status: "In Progress",
    expected: "2026",
    description: "Industry-standard certification covering network security, threats, cryptography, and risk management.",
  },
];