import realtimeAzureTranscription from "../assets/realtime-azure-transcription.png";
import chatwootSanitized from "../assets/chatwoot-sanitized.png";
import archiwizCompanySite from "../assets/archiwiz-company-site.png";

export const profile = {
  name: "Waseem Khan",
  initials: "WK",
  role: "Full-Stack Developer",
  headline: "Healthcare, cloud, and product systems developer",
  location: "Pakistan, open to remote and international roles",
  email: "wassiikhan933@gmail.com",
  phone: "+92 336 3701019",
  github: "https://github.com/wassii-khan-git",
  linkedin: "https://www.linkedin.com/in/waseem-khan-5a9393214/",
  intro:
    "I build production React and Next.js applications with a strong track record in healthcare workflows, FHIR and DICOM integrations, Azure deployments, e-commerce, and automation systems.",
  summary:
    "3+ years of hands-on experience turning complex product requirements into reliable full-stack applications, with ownership across frontend architecture, API integration, cloud deployment, staging and production environments, and operational support.",
  availability: "Open to remote and international teams",
  heroTags: ["React", "Next.js", "TypeScript", "Azure", "FHIR", "DICOM"],
  stats: [
    {
      value: "3+",
      label: "Years delivering production software",
    },
    {
      value: "10+",
      label: "Projects across healthcare, commerce, and SaaS workflows",
    },
    {
      value: "Azure",
      label: "App Service, VMs, containers, slots, SSL, and deployments",
    },
  ],
};

export const capabilities = [
  {
    icon: "MedicineBoxOutlined",
    title: "Healthcare Interoperability",
    text: "Built Neuro ICU workflows connected with FHIR and DICOM data flows, including imaging-heavy clinical screens and a custom DICOM viewer.",
    signal: "FHIR, DICOM, clinical workflows",
  },
  {
    icon: "SafetyCertificateOutlined",
    title: "Privacy-Conscious Medical Automation",
    text: "Worked on healthcare automation where patient PHI was not stored unnecessarily, with HIPAA-conscious decisions around data handling and workflow design.",
    signal: "PHI-safe architecture",
  },
  {
    icon: "ThunderboltOutlined",
    title: "Real-Time Azure Transcription",
    text: "Developed real-time transcription workflows on Azure for medical automation use cases, focused on speed, reliability, and controlled data retention.",
    signal: "Realtime systems",
  },
  {
    icon: "CloudServerOutlined",
    title: "Azure Production Delivery",
    text: "Deployed and operated apps on Azure App Service, build services, container-based environments, staging and production slots, and VMs with SSL.",
    signal: "Cloud and DevOps",
  },
  {
    icon: "ShoppingCartOutlined",
    title: "Commerce and Product Builds",
    text: "Delivered e-commerce and business-facing platforms with modern React interfaces, backend integration, admin workflows, and responsive user journeys.",
    signal: "Product engineering",
  },
  {
    icon: "TeamOutlined",
    title: "Workflow and Evaluation Systems",
    text: "Built online teacher evaluation and automation systems that support structured data entry, review processes, reporting, and day-to-day operations.",
    signal: "Internal tools",
  },
];

export const projects = [
  {
    title: "Neuro ICU Clinical Workflow System",
    category: "Healthcare Interoperability",
    description:
      "Medical workflow platform for Neuro ICU teams with FHIR and DICOM integration.",
    details:
      "Worked on a healthcare system for Neuro ICU workflows, integrating medical data and imaging flows through FHIR and DICOM. The work included clinical screens, automation paths, and a custom DICOM viewer experience for reviewing imaging data inside the application.",
    impact: [
      "Integrated FHIR and DICOM workflows into a React application",
      "Built custom imaging viewer behavior for DICOM-based review",
      "Supported healthcare workflow automation with privacy-aware handling",
    ],
    tech: ["React", "TypeScript", "FHIR", "DICOM", "Azure", "REST APIs"],
    tone: "healthcare",
  },
  {
    title: "Medical Automation and Azure Transcription",
    category: "Healthcare Automation",
    image: realtimeAzureTranscription,
    imageAlt: "Realtime Azure transcription workspace for medical automation",
    description:
      "Real-time transcription and workflow automation designed to avoid persistent PHI storage.",
    details:
      "Developed Azure-powered transcription and automation workflows for medical use cases. The system was designed around controlled handling of patient information, with no unnecessary PHI persistence and HIPAA-conscious implementation choices.",
    impact: [
      "Built real-time transcription workflow behavior",
      "Designed around minimal patient data retention",
      "Connected Azure services with application-level automation",
    ],
    tech: ["Azure", "React", "Node.js", "Realtime APIs", "App Service"],
    tone: "azure",
  },
  {
    title: "E-Commerce Platform",
    category: "Full-Stack Product",
    description:
      "Customer-facing commerce experience with admin workflows and scalable frontend architecture.",
    details:
      "Developed e-commerce experiences covering product browsing, customer flows, admin-facing management, and API-backed application logic. The focus was on reliable delivery, clean UI behavior, and maintainable React/Next.js implementation.",
    impact: [
      "Built responsive customer and admin-facing interfaces",
      "Integrated backend APIs for product and order workflows",
      "Improved product flow clarity across desktop and mobile",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "APIs"],
    tone: "commerce",
  },
  {
    title: "Chatwoot on Azure VM",
    category: "Open Source Operations",
    image: chatwootSanitized,
    imageAlt: "Sanitized Chatwoot support inbox hosted on Azure VM",
    description:
      "Self-hosted Chatwoot deployment on Azure VM with SSL and production usage.",
    details:
      "Cloned, configured, hosted, and supported an open-source Chatwoot system on an Azure VM. The work included server setup, SSL issuance, deployment configuration, and getting the system stable enough for active use.",
    impact: [
      "Set up production VM hosting for an open-source support tool",
      "Issued and configured SSL for secure access",
      "Handled operational setup beyond frontend code",
    ],
    tech: ["Azure VM", "Linux", "SSL", "Chatwoot", "Docker", "Nginx"],
    tone: "ops",
  },
  {
    title: "Online Teacher Evaluation System",
    category: "Workflow System",
    description:
      "Structured evaluation platform for teachers, reviewers, and reporting workflows.",
    details:
      "Built an online teacher evaluation system for structured review workflows. The system supported form-driven data collection, evaluation flows, and organized reporting for education operations.",
    impact: [
      "Designed repeatable evaluation workflows",
      "Built form-driven data collection and review screens",
      "Improved operational visibility through structured records",
    ],
    tech: ["React", "Forms", "API Integration", "Dashboards", "Reporting"],
    tone: "workflow",
  },
  {
    title: "Archiwiz BIM and Visualization Website",
    category: "Company Website",
    image: archiwizCompanySite,
    imageAlt: "Archiwiz company website hero page",
    description:
      "Company website for a BIM and architectural visualization studio with a polished service-led landing experience.",
    details:
      "Developed a professional company website experience for Archiwiz, focused on presenting BIM modeling, architectural visualization, and laser or drone scanning services with a strong visual first impression and clear navigation.",
    impact: [
      "Built a premium responsive landing experience for a real company",
      "Presented services, project navigation, and quote entry points clearly",
      "Handled visual polish, layout, and deployment-ready frontend delivery",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Responsive UI", "Deployment"],
    tone: "frontend",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Healthcare",
    items: ["FHIR", "DICOM", "Custom DICOM viewer", "Medical automation", "PHI-aware workflows"],
  },
  {
    title: "Cloud and DevOps",
    items: ["Azure App Service", "Azure VMs", "Container apps", "Staging and prod slots", "SSL setup"],
  },
  {
    title: "Backend and Integration",
    items: ["REST APIs", "Node.js", "Express.js", "Realtime workflows", "Third-party services"],
  },
  {
    title: "Product Domains",
    items: ["E-commerce", "Teacher evaluations", "Clinical workflows", "Support systems", "Portfolio sites"],
  },
  {
    title: "Delivery Habits",
    items: ["Production support", "Clear communication", "Deployment ownership", "Privacy judgment", "Fast iteration"],
  },
];

export const timeline = [
  {
    period: "Current focus",
    title: "Healthcare and Azure product engineering",
    text: "Building stronger specialization around clinical workflow systems, medical automation, FHIR/DICOM integrations, and Azure production delivery.",
  },
  {
    period: "3+ years",
    title: "Full-stack delivery across real projects",
    text: "Worked across e-commerce, education, portfolio websites, open-source hosting, and internal workflow applications.",
  },
  {
    period: "Next role",
    title: "International full-stack developer role",
    text: "Looking for teams that need a practical developer who can own React/Next.js features, integrate APIs, and support cloud-hosted production systems.",
  },
];
