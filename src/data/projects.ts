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
    id: "foodhub",
    title: "FoodHub",
    type: "Full Stack",
    description: "A comprehensive food ordering ecosystem featuring a Next.js-powered storefront and a robust Node.js/Express server. The platform serves three distinct user roles—Customers, Providers, and Admins.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop",
    technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Shadcn UI", "TanStack Query", "React Context API", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "Zod", "Better Auth"],
    features: ["Three-Way Role Ecosystem", "Smart Cart Logic", "Automated Image Pipeline"],
    moreFeatures: 2,
    badgeColor: "bg-[#00c2ff]",
    liveLink: "https://example.com/foodhub",
    githubLink: "https://github.com/example/foodhub",
    challenges: "Handling real-time synchronization between three distinct user roles (Customer, Provider, Admin) presented a significant challenge. Ensuring that the state remained consistent when an order status updated required a sophisticated WebSocket architecture and robust caching strategy with TanStack Query.",
    futurePlans: "Implement AI-driven personalized food recommendations and integrate a comprehensive delivery tracking map using Google Maps API.",
  },
  {
    id: "startup-base",
    title: "Startup Base",
    type: "Full Stack",
    description: "The first comprehensive digital databank and 'Yellow Pages' for the Bangladesh startup ecosystem. Designed to foster a healthy startup culture, it connects startups with investors, accelerators, and services.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "React Hook Form", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    features: ["Multi-Tiered User Roles", "Business Claim System", "Advanced Filtering & Search"],
    moreFeatures: 2,
    badgeColor: "bg-[#00c2ff]",
    liveLink: "https://example.com/startup-base",
    githubLink: "https://github.com/example/startup-base",
    challenges: "Designing a flexible schema in MongoDB that could accommodate the highly variable data profiles of different startups, investors, and service providers without compromising query performance.",
    futurePlans: "Add a dedicated messaging module for investors to directly contact startup founders, and introduce advanced analytics dashboards for market trends.",
  },
  {
    id: "smart-school-bus",
    title: "Smart School Bus Web App",
    type: "Frontend",
    description: "A comprehensive solution for tracking and managing school bus routes, ensuring student safety, and providing real-time updates to parents and school administrators.",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef1607bf?q=80&w=1371&auto=format&fit=crop",
    technologies: ["React.js", "Tailwind CSS", "Redux", "Google Maps API", "Firebase"],
    features: ["Real-time GPS Tracking", "Parent Notifications", "Route Optimization"],
    moreFeatures: 3,
    badgeColor: "bg-[#a855f7]",
    liveLink: "https://example.com/smart-school-bus",
    githubLink: "https://github.com/example/smart-school-bus",
    challenges: "Integrating the Google Maps API seamlessly with Firebase real-time database updates to ensure smooth, jitter-free movement of the bus markers on the frontend map.",
    futurePlans: "Incorporate predictive AI models to estimate arrival times based on historical traffic data and weather conditions.",
  },
  {
    id: "alumni-connect",
    title: "Alumni Connect",
    type: "Frontend",
    description: "Connect, collaborate, and build a thriving community that fosters lifelong learning and growth. A platform dedicated to bringing alumni together.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    features: ["User Directory", "Event Management", "Mentorship Program"],
    moreFeatures: 1,
    badgeColor: "bg-[#a855f7]",
    liveLink: "https://example.com/alumni-connect",
    githubLink: "https://github.com/example/alumni-connect",
    challenges: "Developing a highly performant and accessible real-time user directory with complex filtering (by graduation year, industry, and skills) while maintaining a high Lighthouse score.",
    futurePlans: "Add a native forum integration for specialized interest groups and implement a built-in virtual event hosting system.",
  }
];
