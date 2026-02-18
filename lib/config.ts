const config = {
  // Personal Info
  name: {
    first: "John Andrei",
    last: "Tacujan",
    full: "John Andrei Tacujan",
  },
  available: true,
  role: "Software Developer",
  location: "Tarlac, PH",
  focus: "Web & Mobile",
  email: "hello@johntacujan.dev",
  github: "https://github.com/dreidev04",
  tagline: "Building polished digital experiences with precision and care",
  intro:
    "A developer who crafts digital experiences with meticulous attention to detail and clean architecture.",
  bio: "Turning ideas into functional, elegant code since 2021",

  // Tech Stack
  techStack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
  ],

  // Stats
  stats: [
    { number: "03+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "∞", label: "Cups of Coffee" },
  ],

  // Services
  services: [
    "Web Development",
    "UI/UX Design",
    "Mobile Apps",
    "Backend Systems",
  ],

  // Social Links
  socials: [
    { name: "GitHub", href: "https://github.com/dreidev04" },
    { name: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", href: "https://twitter.com/yourusername" },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "ChainAid",
      category: "Blockchain / Web3",
      description:
        "A transparent donation platform built on the Base network for NGOs.",
      image: "/projects/chainaid.jpg",
      link: "#",
      year: "2024",
    },
    {
      id: 2,
      title: "SignSpeak AI",
      category: "Machine Learning",
      description:
        "Real-time sign language recognition using computer vision and deep learning.",
      image: "/projects/signspeak.jpg",
      link: "#",
      year: "2024",
    },
    {
      id: 3,
      title: "LegalBERT Thesis",
      category: "NLP / Research",
      description:
        "Automated legal document classification system using Transformer models.",
      image: "/projects/thesis.jpg",
      link: "#",
      year: "2023",
    },
    {
      id: 4,
      title: "ModBot v3",
      category: "Automation",
      description:
        "Discord bot managing 100k+ users with auto-moderation and raffles.",
      image: "/projects/bot.jpg",
      link: "#",
      year: "2023",
    },
  ],
};

export default config;
