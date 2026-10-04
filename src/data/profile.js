import archiwizCompanySite from "../assets/archiwiz-company-site.webp";

export const profile = {
  name: "Waseem Khan",
  initials: "WK",
  role: "Full Stack Engineer",
  discipline: "Web · Mobile · Cloud",
  location: "Peshawar, Pakistan — open to remote",
  email: "wassiikhan933@gmail.com",
  phone: "+92 336 3701019",
  github: "https://github.com/wassii-khan-git",
  linkedin: "https://www.linkedin.com/in/waseem-khan-5a9393214/",
  availability: "Open to remote roles",

  // Deliberately domain-neutral. The clinical work is evidence for the claim,
  // not the category — naming one industry up here would narrow him for nothing.
  headline: ["I build software", "that holds up in production."],
  intro:
    "Full Stack Engineer with 4 years shipping production web and mobile software across healthcare, e-commerce and business platforms. Project lead on a HIPAA-compliant clinical platform, and the developer behind several Next.js products.",
  coreStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Azure"],

  stats: [
    { value: "4", label: "Years shipping production software" },
    { value: "Lead", label: "Project lead on a production healthcare platform" },
    { value: "HIPAA", label: "Compliant systems running live" },
    { value: "Azure", label: "App Service, WebJobs, GitLab CI/CD" },
  ],
};

// ---------------------------------------------------------------------------
// The scroll centrepiece. Deliberately generic: these are the layers of a
// typical build that Waseem owns, not the architecture of any client or
// employer system.
// ---------------------------------------------------------------------------
export const buildLayers = {
  eyebrow: "How I build",
  title: "The layers I own",
  subtitle:
    "From the first pixel to the production deploy. Scroll to take a typical build apart.",
  layers: [
    {
      id: "interface",
      index: "01",
      label: "Interface",
      tech: "React · Next.js · React Native · Electron",
      title: "The part people actually touch",
      text: "Responsive interfaces in React and Next.js, the same product on a phone through React Native, and on the desktop through Electron. Tailwind, shadcn/ui or Material UI depending on what the team already runs.",
      metrics: ["Web, mobile, desktop", "Responsive UI"],
    },
    {
      id: "state",
      index: "02",
      label: "State & API",
      tech: "TypeScript · Redux · Zustand · REST",
      title: "Keeping the client honest",
      text: "Typed contracts between frontend and backend, predictable state with Redux or Zustand, and REST integration that fails in ways the interface can actually handle.",
      metrics: ["Typed contracts", "Predictable state"],
    },
    {
      id: "background",
      index: "03",
      label: "Jobs",
      tech: "Node.js · Express · Job queues",
      title: "Work that should never block a user",
      text: "Anything slow goes to a queue and comes back when it is ready. Durable jobs, worker processes, and parallelism when one lane stops being enough.",
      metrics: ["Queued jobs", "Parallel workers"],
    },
    {
      id: "delivery",
      index: "04",
      label: "Delivery",
      tech: "PostgreSQL · Azure · GitLab CI/CD",
      title: "Where it lives and how it ships",
      text: "PostgreSQL behind the API, hosted on Azure App Service, with separate staging and production environments deployed through GitLab CI/CD.",
      metrics: ["Staging + prod", "CI/CD pipeline"],
    },
  ],
};

// ---------------------------------------------------------------------------
// Engineering judgement, described as practice rather than as a blueprint of
// any particular system.
// ---------------------------------------------------------------------------
export const decisions = [
  {
    kicker: "Scaling",
    problem:
      "Background processing that handled one job at a time started falling behind once real users arrived.",
    choice:
      "Moved the queue from sequential to parallel workers, rather than letting people wait in line behind each other.",
    result:
      "Concurrent users served without the interface blocking on long-running work.",
  },
  {
    kicker: "Compliance",
    problem:
      "Regulated software has to be built for its constraints from the start, not audited into shape afterwards.",
    choice:
      "Treated access control, encryption, audit logging and single sign-on as part of the initial architecture rather than a later pass.",
    result: "Systems that met their compliance requirements without a retrofit.",
  },
  {
    kicker: "Delivery",
    problem:
      "Software that people depend on at work cannot be debugged in front of them.",
    choice:
      "Ran separate staging and production environments, with deployment through CI/CD.",
    result: "Changes proven in staging before they reach anyone's working day.",
  },
];

// ---------------------------------------------------------------------------
export const projects = [
  {
    id: "clinical-docs",
    title: "Clinical Documentation Platform",
    role: "Project Lead",
    year: "2026",
    org: "Safe Solutions Consultant",
    category: "Healthcare AI",
    summary:
      "An AI-assisted clinical documentation product for doctors, delivered on web and mobile and running in production under HIPAA. I led the project end to end.",
    highlights: [
      "Led delivery end to end, across the web platform and a React Native (Expo) mobile app",
      "Built on React, Node.js, PostgreSQL and Azure, with LLM integration through Azure AI Foundry",
      "Shipped under HIPAA requirements, on separate staging and production environments",
    ],
    tech: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Azure AI Foundry",
      "GitLab CI/CD",
    ],
    confidential: true,
  },
  {
    id: "neuroicu",
    title: "NeuroICU Patient Management System",
    role: "Full Stack Developer",
    year: "2024 — 2025",
    org: "Safe Solutions Consultant",
    category: "Clinical Records",
    summary:
      "A clinical records system for neuro-ICU teams covering patient demographics, labs, vitals, medications and CT/MRI imaging, with HL7 FHIR and DICOM integration for standardized data exchange.",
    highlights: [
      "Demographics, labs, vitals and medications in one clinical view",
      "CT/MRI imaging handled through DICOM",
      "HL7 FHIR integration for standardized exchange between systems",
    ],
    tech: ["React", "Material UI", "Express.js", "PostgreSQL", "HL7 FHIR", "DICOM"],
    confidential: true,
  },
  {
    id: "corporate",
    title: "Corporate Web Platforms",
    role: "Full Stack Developer",
    year: "2024 — 2025",
    org: "Safe Solutions Consultant",
    category: "Next.js Platforms",
    image: archiwizCompanySite,
    imageAlt: "Archiwiz BIM and architectural visualization website",
    summary:
      "Next.js platforms for the group's US and Pakistan-based businesses, with service catalogs, project showcases, and quote and lead-capture workflows.",
    highlights: [
      "archiwiz.com — BIM and architectural visualization",
      "archiwizbuild.com — construction and remodeling",
      "safesolutionsconsultants.com — group company site",
      "Service catalogs, project showcases, quote and lead-capture flows",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    links: [
      { label: "archiwiz.com", href: "https://archiwiz.com" },
      { label: "archiwizbuild.com", href: "https://archiwizbuild.com" },
      {
        label: "safesolutionsconsultants.com",
        href: "https://safesolutionsconsultants.com",
      },
    ],
  },
  {
    id: "books-system",
    title: "Bookstore Management System",
    role: "Full Stack Developer",
    year: "2026",
    org: "Independent",
    category: "Desktop App",
    summary:
      "A desktop application for running a bookstore: catalogue and inventory management, point of sale, and printable invoices. Built with Electron and React, backed by PostgreSQL through Prisma.",
    highlights: [
      "Electron desktop app built with electron-vite and packaged for Windows, macOS and Linux",
      "Relational catalogue of categories, publishers and titles, managed through Prisma migrations on PostgreSQL",
      "Admin dashboard with sorting, filtering and pagination across products, categories and companies",
      "Point-of-sale flow with a cart and printable invoices",
      "Authenticated sessions with hashed credentials, handled in the Electron main process over IPC",
    ],
    tech: [
      "Electron",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "shadcn/ui",
      "Tailwind CSS",
    ],
  },
  {
    id: "chatwoot",
    title: "Self-Hosted Chatwoot on Azure",
    role: "Full Stack Developer",
    year: "Project",
    org: "Independent",
    category: "DevOps & Hosting",
    summary:
      "Took the open-source Chatwoot customer support platform, deployed it on an Azure virtual machine, secured it with SSL and prepared it for live use.",
    highlights: [
      "Provisioned and configured an Azure VM to run the platform",
      "Issued and installed SSL certificates for secure access",
      "Owned the deployment end to end and readied the instance for use",
    ],
    tech: ["Azure VM", "Linux", "Self-hosting", "SSL/TLS", "Chatwoot"],
  },
  {
    id: "maktaba",
    title: "Maktaba-e-Ilmiya",
    role: "Full Stack Developer",
    year: "Project",
    org: "Independent",
    category: "E-commerce",
    summary:
      "An online bookstore built with Next.js, covering a product catalog, shopping cart and customer accounts.",
    highlights: [
      "Product catalog with browsing and search",
      "Shopping cart and checkout flow",
      "Customer accounts and order history",
    ],
    tech: ["Next.js", "React", "Node.js"],
    links: [{ label: "maktaba-e-ilmiya.com", href: "https://maktaba-e-ilmiya.com" }],
  },
];

// Kept to a single line rather than full cards: these predate the production
// work above and should not compete with it for attention.
export const earlierWork = {
  label: "Earlier work",
  items: [
    "College management system",
    "Restaurant reservation platform",
    "Multi-role services directory",
  ],
  context: "Built in PHP around university, before the production work above.",
};

// ---------------------------------------------------------------------------
export const stack = [
  {
    title: "Programming",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "PHP", "Java"],
  },
  {
    title: "Frontend, Mobile & Desktop",
    items: [
      "React.js",
      "Next.js",
      "React Native (Expo)",
      "Electron.js",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "Material UI",
    ],
  },
  {
    title: "Backend & Data",
    items: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Background job queues",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Jest",
    ],
  },
  {
    title: "AI & Cloud",
    items: [
      "Azure AI Foundry (GPT)",
      "LLM integration",
      "Prompt engineering",
      "Azure App Service",
      "Azure WebJobs",
      "GitLab CI/CD",
      "Git",
    ],
  },
  {
    title: "Healthcare & Security",
    items: [
      "HIPAA",
      "HL7 FHIR",
      "DICOM",
      "RBAC",
      "Audit logging",
      "JWT",
      "Microsoft SSO",
      "Data encryption",
    ],
  },
];

export const experience = [
  {
    company: "Safe Solutions Consultant",
    title: "Full Stack Developer",
    place: "Hayatabad, Peshawar",
    period: "June 2024 — Present",
    current: true,
    points: [
      "Project lead for a HIPAA-compliant clinical documentation platform across web and React Native mobile, running in production on Azure.",
      "Built the NeuroICU patient management system with HL7 FHIR and DICOM integration.",
      "Launched Next.js platforms for the group's US and Pakistan-based businesses.",
    ],
  },
  {
    company: "Freelance",
    title: "Full Stack Developer",
    place: "Remote",
    period: "January 2023 — June 2024",
    points: [
      "Delivered end-to-end web applications for multiple clients, owning requirements, system architecture and deployment.",
      "Worked on a React.js, Express.js and MongoDB stack.",
    ],
  },
];

export const education = {
  degree: "BSc Computer Science",
  school: "Abdul Wali Khan University",
  place: "Mardan, Pakistan",
  period: "2019 — 2023",
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Fluent" },
  { name: "Pashto", level: "Native" },
];
