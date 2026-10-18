import tradelinkImg from "../assets/tradelink.png";

export const personalInfo = {
  name: "Emmasha",
  fullName: "Ketuanze Emmasha Nembuanyi",
  role: "Software Engineer",
  shortBio: "I build software that actually ships.",
  longBio: "Software engineer building practical web applications from interface to backend, database, authentication, and deployment.",
  approach: [
    "Build real applications instead of only tutorials",
    "Understand the problem before writing code",
    "Debug the root cause, not just the visible error",
    "Learn the backend instead of treating it as a black box",
    "Build, test, deploy, break, fix, improve"
  ],
  contact: {
    email: "ketuanzee@gmail.com",
    github: "https://github.com/KEmmasha",
    linkedin: "https://www.linkedin.com/in/ketuanze-emmasha-ab8658300",
    whatsapp: "https://wa.me/237673698317"
  }
};

export const projects = [
  {
    title: "TradeLink",
    category: "Full-Stack Marketplace",
    description: "A marketplace that connects customers with local tradespeople and artisans. Customers search for verified professionals and send enquiries; tradespeople manage their profile, services and quotes.",
    problem: "Connecting customers with local tradespeople in a trusted, verifiable way.",
    features: [
      "Customer, tradesperson and admin accounts with JWT login",
      "Tradesperson profiles, services and portfolio uploads",
      "Search for tradespeople",
      "Enquiries with quotes: send, accept, decline, complete",
      "Customer reviews",
      "Document verification for tradespeople",
      "Admin dashboard"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Cloudinary", "Vercel", "Render"],
    image: tradelinkImg,
    liveUrl: "https://tradelink-one.vercel.app",
    githubUrl: "https://github.com/KEmmasha/Tradelink",
    challenges: [
      {
        title: "Deploying a split frontend and backend",
        description: "Hardcoded localhost URLs had to become environment variables, the backend's CORS list had to allow the Vercel domain, and a filename-casing mismatch only broke the build on Vercel's Linux servers, not on my Windows machine."
      },
      {
        title: "Moving from local MongoDB to Atlas",
        description: "My local data did not carry over, so accounts and roles had to be recreated on the live database, and the connection string and environment variables had to be set separately on Render."
      }
    ]
  }
];

export const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "Python", "REST APIs", "JWT"],
  Database: ["MongoDB", "MongoDB Atlas"],
  Development: ["Git", "GitHub", "Postman", "VS Code", "WordPress"],
  Deployment: ["Vercel", "Render"]
};

export const journey = [
  {
    period: "ONGOING",
    title: "HND Software Engineering",
    description: "Studying software engineering at the University of Buea, College of Technology, while building projects on the side."
  },
  {
    period: "RECENT",
    title: "TradeLink, built and deployed",
    description: "Built a full MERN-stack marketplace and deployed it on Vercel, Render and MongoDB Atlas."
  },
  {
    period: "EARLIER",
    title: "Internship at Wandaprep, Buea",
    description: "A 2-month internship that strengthened my React, HTML/CSS, Tailwind, Node.js and Express skills."
  }
];

export const terminalLines = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "emmasha, software engineer in Buea, Cameroon" },
  { type: "cmd", text: "cat stack.txt" },
  { type: "out", text: "React · Node.js · Express · MongoDB · Python · WordPress" },
  { type: "cmd", text: "cat now.txt" },
  { type: "out", text: "HND Software Engineering student, building and deploying projects" },
  { type: "cmd", text: "ls projects/" },
  { type: "out", text: "tradelink/" }
];
