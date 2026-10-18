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
    description: "A MERN-stack local tradesperson and artisan directory platform that connects customers with verified local tradespeople.",
    problem: "Connecting customers with local tradespeople in a trusted, verifiable way.",
    features: [
      "Customer & tradesperson accounts",
      "Role-based authentication & authorization",
      "Tradesperson profiles & services",
      "Enquiries and reviews system",
      "Verification workflow",
      "Admin dashboard & analytics"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Git/GitHub", "Vercel", "Render"],
    image: "https://via.placeholder.com/800x500/131720/38BDF8?text=TradeLink+Screenshot", // TODO: Update with real image
    liveUrl: "https://tradelink-one.vercel.app",
    githubUrl: "https://github.com/KEmmasha/Tradelink",
    challenges: [
      {
        title: "Frontend/Backend Integration & Authentication",
        description: "Implementing secure JWT-based authentication with role-based access control (RBAC) across the MERN stack. Ensuring seamless integration between the Vercel-hosted frontend and Render-hosted backend while handling CORS and production API errors effectively."
      },
      {
        title: "Data Modeling & Relationships",
        description: "Designing a flexible MongoDB schema to handle complex relationships between users (customers, tradespeople, admins), services, enquiries, and reviews, ensuring performant queries and data integrity."
      }
    ]
  },
  // TODO: Add ARMS and future projects here
];

export const skills = {
  Frontend: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "JWT"],
  Database: ["MongoDB", "MongoDB Atlas"],
  Development: ["Git", "GitHub", "Postman", "Thunder Client"],
  Deployment: ["Vercel", "Render"]
};

export const journey = [
  {
    period: "ONGOING",
    title: "Full-Stack Development",
    description: "Continuously building and shipping real products. Refining architecture, performance, and user experience."
  },
  {
    period: "RECENT",
    title: "TradeLink Deployment",
    description: "Built and deployed a complete MERN marketplace from scratch. Handled everything from database design to production hosting."
  },
  {
    period: "EARLIER",
    title: "Learning the Stack",
    description: "Mastered the fundamentals of JavaScript and React. Moved beyond frontend to understand backend APIs and databases."
  },
  {
    period: "START",
    title: "The Beginning",
    description: "Started the journey into software engineering with a focus on problem-solving and building practical tools."
  }
];
