export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  moreFeatures: number;
  badgeColor: string;
  liveLink: string;
  githubLink: string;
  challenges: string;
  futurePlans: string;
}

export const projects: Project[] = [
  {
    id: "cinetube",
    title: "CineTube",
    type: "Frontend / Social",
    description: "A modern client-side movie and series platform that lets users explore titles, view details, and stream content seamlessly. Features robust social interaction with a 1–5 rating system, user reviews, and comments/likes to build community engagement.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "REST APIs"],
    features: ["Movie & Series Exploration", "Interactive Rating System", "Social Comments & Likes"],
    moreFeatures: 2,
    badgeColor: "bg-[#ff014f]",
    liveLink: "https://cinetube-phi.vercel.app",
    githubLink: "https://github.com/mashayeakh/CineTube-Client",
    challenges: "Building a performant social rating system strictly on the client side required optimal state management and caching. Handling deep-nested comments alongside dynamic streaming data while maintaining a smooth and intuitive UI was a major focus.",
    futurePlans: "Introduce an AI-based recommendation engine for personalized movie suggestions and implement live watch-parties.",
  },
  {
    id: "skillbridge",
    title: "SkillBridge",
    type: "Web Application",
    description: "A client-side web application connecting learners with tutors efficiently. Users can browse tutors, view profiles, and book sessions. It features complete booking workflows, profile management, and a robust admin oversight dashboard.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Context API", "React Router"],
    features: ["Tutor Browsing & Booking", "Session Management", "Admin Oversight Dashboard"],
    moreFeatures: 3,
    badgeColor: "bg-[#00c2ff]",
    liveLink: "https://skillbridgefrontend-delta.vercel.app",
    githubLink: "https://github.com/mashayeakh/skillbridge-frontend",
    challenges: "Developing a seamless booking workflow that accurately handled tutor availability and timezones strictly from the frontend architecture. Ensuring the admin oversight dashboard remained secure and performed well with complex user data.",
    futurePlans: "Integrate native video calling capabilities for remote sessions directly within the browser.",
  },
  {
    id: "tech-hunt",
    title: "Tech Hunt",
    type: "Interactive Web App",
    description: "An interactive application that showcases advanced technologies and modern web functionalities. It focuses on combining extreme performance, clean UI, and deep interactivity to present tech concepts in an engaging, visual way.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React.js", "Modern CSS/Animations", "Framer Motion", "Tailwind CSS"],
    features: ["Interactive Tech Demos", "Seamless Responsiveness", "Advanced Animations"],
    moreFeatures: 2,
    badgeColor: "bg-[#08fdd8]",
    liveLink: "https://tech-hunt-39126.web.app/",
    githubLink: "https://github.com/mashayeakh/Tech-Hunt",
    challenges: "Balancing high-end visual fidelity and complex client-side interactions without compromising performance or responsiveness across mobile devices.",
    futurePlans: "Add 3D model integrations and WebGL experiments to push the boundaries of browser rendering further.",
  },
  {
    id: "gadget-heaven",
    title: "Gadget Heaven",
    type: "E-Commerce",
    description: "A modern e-commerce platform where users can explore, manage, and purchase the latest gadgets. Built with a focus on efficient data handling, persistent user state, and dynamic UI interactions for a highly engaging shopping experience.",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Local Storage API", "React Router"],
    features: ["Dynamic Shopping Cart", "Persistent User State", "Intuitive Product Filtering"],
    moreFeatures: 2,
    badgeColor: "bg-[#a855f7]",
    liveLink: "https://gadget-heaven-kappa.vercel.app",
    githubLink: "https://github.com/mashayeakh/Gadget-Heaven",
    challenges: "Ensuring persistent and reliable state management across multiple routes without a backend, meaning the shopping cart and user preferences had to be efficiently synchronized with local browser storage.",
    futurePlans: "Incorporate a mock payment gateway integration and a dedicated backend for robust inventory management.",
  }
];
