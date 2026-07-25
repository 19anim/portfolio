import fcoHub from "../assets/fcohub.png";
import playAndShare from "../assets/playandshare.png";
import jagerShop from "../assets/jagerthejagershop.png";

export const navItems = [
  ["01", "about", "About"],
  ["02", "experience", "Experience"],
  ["03", "projects", "Projects"],
  ["04", "contact", "Contact"],
];

export const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
  "Jasmine",
  "Git",
  "Linux",
];

export const experience = [
  {
    period: "Jul 2025 - Present",
    company: "Fujifilm Business Innovation Vietnam",
    role: "Senior Software Engineer",
    description:
      "Developing Panel UI features for multifunction printers with cross-functional teams. I also build internal tools, including automated reports and browser extensions, to make recurring work faster and more consistent.",
    tools: ["JavaScript", "Jasmine", "HTML & CSS", "Node.js", "Linux", "PlantUML"],
  },
  {
    period: "Apr 2022 - Jul 2025",
    company: "Bosch Global Software Technologies",
    role: "Frontend Developer",
    description:
      'Built and maintained an internal e-form platform, translating customer requirements into practical features. Recognized as "Associate of the Month" in October 2024.',
    tools: ["JavaScript", "HTML & CSS", "Customer collaboration"],
  },
  {
    period: "Jan 2021 - Mar 2022",
    company: "Netcompany",
    role: "QA/QC Engineer",
    description:
      "Tested Sedex, a global responsible-sourcing platform. Reported defects, verified product quality, and built the testing foundation that still shapes how I develop software today.",
    tools: ["Manual testing", "Postman", "Neo4j"],
  },
];

export const projects = [
  {
    number: "01",
    title: "FCO Hub",
    type: "Full-stack FC Online companion platform",
    image: fcoHub,
    description:
      "A full-stack FC Online companion platform with advanced player search, squad building, upgrade simulation, live team-color evaluation, automated data pipelines, and admin monetization tools.",
    tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Playwright", "Cheerio", "Vitest"],
    href: "https://fcodaphim.netlify.app/",
  },
  {
    number: "02",
    title: "Play And Share",
    type: "Full-stack travel platform",
    image: playAndShare,
    description:
      "A social travel app for sharing destinations, creating trip timelines, collaborative trip planning, and splitting expenses with friends.",
    tools: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Cloudinary"],
    href: "https://playandshare.netlify.app/",
  },
  {
    number: "03",
    title: "JAGERTHEJAGER Shop",
    type: "Full-stack e-commerce",
    image: jagerShop,
    description:
      "An online store with product browsing, accounts, cart and checkout flows, shipping estimates, plus an admin dashboard for products and orders.",
    tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    href: "https://jagerthejagershop.netlify.app/",
  },
];

export const otherProjects = [
  {
    number: "01",
    title: "TAMT Wedding",
    type: "Online wedding invitation",
    description:
      "A responsive wedding invitation with event details, schedules, location information, mobile-optimized animations, and RSVP management for guests.",
    tools: ["React", "Tailwind CSS", "Motion", "DaisyUI", "SheetDB"],
    href: "https://tamtwedding.netlify.app/",
  },
];
