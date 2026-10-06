export interface Experience {
  project: string;
  title: string;
  period: string;
  description: string[];
}

export interface Project {
  slug: string;
  title: string;
  category?: string;
  role?: string;
  period: string;
  image: string;
  tech: string[];
  description?: string[];
  items?: string[];
  overview?: string;
  highlights?: string[];
  features?: string[];
  architecture?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface StartupData {
  name: string;
  role: string;
  founded: string;
  tagline: string;
  status: string;
  websiteUrl: string;
  email: string;
  phone: string;
  logo: string;
  description: string;
  highlights: string[];
  services: {
    title: string;
    desc: string;
  }[];
}

export interface ResumeData {
  name: string;
  title: string;
  status: string;
  profileImage: string;
  objective: string;
  startup: StartupData;
  contact: {
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    portfolio: string;
    cvUrl: string;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    percentage: string;
  }[];
  skills: {
    programming: string[];
    frontend: string[];
    backend: string[];
    tools: string[];
    softSkills: string[];
  };
  experience: Experience[];
  projects: Project[];
  certificates: {
    name: string;
    url: string;
  }[];
}

export const resumeData: ResumeData = {
  name: "Mahesh K",
  title: "Full-Stack Web Developer",
  status: "Freelance Full-Stack Developer",
  profileImage: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1778266778/Mahesh_nen6ef.png",
  objective: "Freelance Full-Stack Developer with a strong foundation in problem-solving and hands-on experience in building scalable web applications. Committed to delivering high-quality digital solutions and continuously evolving as an IT professional.",
  startup: {
    name: "ChimeraTech",
    role: "Founder & Lead Developer",
    founded: "2025",
    tagline: "Turning Ideas into Powerful Digital Solutions",
    status: "Accepting Projects for 2026",
    websiteUrl: "https://chimeratech.vercel.app/",
    email: "chimeratechweb@gmail.com",
    phone: "+91 9943852902",
    logo: "https://res.cloudinary.com/dnwb5u0xn/image/upload/v1784727869/WhatsApp_Image_2026-07-22_at_7.11.55_PM_ikfzn2.jpg",
    description: "Founded with a vision to combine innovation, creativity, and technology, ChimeraTech is a modern software and web application development startup dedicated to helping businesses build a dominant digital presence. From custom web platforms to scalable POS systems, we engineer software tailored to real-world business needs.",
    highlights: [
      "High-Performance Web & Mobile Apps",
      "Tailored GST & Billing Solutions",
      "E-Commerce & Scalable Cloud Backends",
      "Transparent & Fast Delivery (Starting ₹8,999)"
    ],
    services: [
      {
        title: "Web & Web App Development",
        desc: "Fast, SEO-optimized business websites and dynamic full-stack React & Next.js web applications."
      },
      {
        title: "Billing Software & ERP Portals",
        desc: "Custom GST billing software, inventory tracking, customer ledgers, and barcode billing terminals."
      },
      {
        title: "E-Commerce Platforms",
        desc: "Complete online storefronts with cart management, order tracking, and integrated digital payments."
      },
      {
        title: "Mobile App Development",
        desc: "Cross-platform mobile apps for Android & iOS backed by real-time Firebase cloud synchronization."
      }
    ]
  },
  contact: {
    email: "kmahesh10634@gmail.com",
    phone: "+91 9943852902",
    location: "Sivakasi, Viruthunagar, 626130",
    github: "https://github.com/Mahesh143-mc",
    linkedin: "www.linkedin.com/in/kmahesh1634",
    portfolio: "protfolio-mahesh.vercel.app",
    cvUrl: "https://drive.google.com/file/d/1evgWWZWg2iaqZe0wKt3zdTxxCMu9Gnvh/view?usp=sharing"
  },
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sri Kaliswari College(Autonomous)",
      period: "2023 - 2026 (Completed)",
      location: "Sivakasi, India",
      percentage: "80%"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Meadows Hr Sec School",
      period: "2022 - 2023",
      location: "Kalaiyarkuruchi, Sivakasi",
      percentage: "74%"
    }
  ],
  skills: {
    programming: ["Java", "Python"],
    frontend: ["React.js", "Next.js", "Electron.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
    backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    tools: ["GitHub", "VS Code", "Antigravity", "Google AI Studio"],
    softSkills: ["Team Management", "Adaptability"]
  },
  experience: [],
  projects: [
    {
      slug: "crackers-shop-management",
      title: "Crackers Shop Management System",
      category: "Retail ERP & Inventory",
      role: "Full-Stack Developer",
      period: "May 2025",
      image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/f_auto,q_auto/v1778677660/Screenshot_2026-05-13_183740_linef3.png",
      tech: ["ReactJS", "Firebase", "Tailwind CSS", "Vite"],
      description: [
        "A full-scale retail management system for a fireworks store with real-time stock and billing.",
        "Streamlines customer orders and inventory tracking for seasonal business spikes."
      ],
      overview: "A comprehensive, high-throughput retail management platform engineered specifically for fireworks and seasonal merchandise distributors. Developed to resolve inventory bottlenecks during high-volume festive shopping surges, providing instant barcode & manual checkout, real-time cloud inventory deductions, and automatic order invoice generation.",
      highlights: [
        "Real-Time Stock Depletion & Threshold Alerts",
        "Sub-Second Search & Fast-Paced Checkout Flow",
        "Instant Digital Receipt & Print Invoicing",
        "Cloud-Backed Multi-Device Accessibility"
      ],
      features: [
        "Real-time Inventory Sync: Instant stock level adjustments prevent overselling during peak seasonal demand.",
        "Rapid Billing Terminal: Keyboard-optimized interface designed for high counter traffic with instant cart calculations.",
        "Automated Pricing & Discounts: Tiered discounts and bulk volume rates configured on the fly.",
        "Cloud Data Persistence: Built on Firebase Firestore for resilient zero-downtime offline-capable sync.",
        "Sales Reporting Dashboard: Visual breakdown of daily revenue, top-selling product categories, and margins."
      ],
      architecture: [
        "Frontend: React with Tailwind CSS for fluid, highly responsive cash-counter interactions.",
        "Database & Auth: Firebase Firestore cloud collections with real-time snapshot listeners.",
        "State Management: Reactive local state for immediate shopping cart calculations and zero-lag user input.",
        "Deployment: Continuous deployment with edge CDN caching via Vercel."
      ],
      liveUrl: "https://crackers-shop.vercel.app/",
      githubUrl: "https://github.com/Mahesh143-mc"
    },
    {
      slug: "logesh-vivasayi-pos",
      title: "Logesh Vivasyi - POS & Inventory System",
      category: "Agricultural Enterprise POS",
      role: "Lead Full-Stack Architect",
      period: "February 2025",
      image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/f_auto,q_auto/v1778677473/Screenshot_2026-05-13_183345_potlun.png",
      tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      description: [
        "Advanced POS & Inventory system supporting Tamil/English with real-time stock tracking.",
        "Features AI-powered analytics, dynamic invoice generation, and full business reporting."
      ],
      overview: "An enterprise-grade point-of-sale and supply-chain management application built specifically for agricultural stores, farmers, and wholesale commodity traders. The solution bridges critical accessibility barriers by providing complete Tamil localization alongside English, automated GST invoicing, stock valuation, and predictive inventory reorder warnings.",
      highlights: [
        "Bilingual Localization (Full Tamil & English UI)",
        "Automated GST & Non-GST Invoice Generation",
        "Live Inventory Tracking & Unit Conversions (kg/count)",
        "AI-Driven Agricultural Sales Analytics & Trends"
      ],
      features: [
        "Bilingual Accessibility: Seamless toggling between Tamil and English across all catalog items, bills, and settings.",
        "Commodity Management: Supports flexible agricultural measurement metrics (per unit count, kilogram, bag weights).",
        "Dynamic Invoice Engine: Generates downloadable, print-ready PDF invoices formatted with legal commercial headers.",
        "Customer Ledger & Credit Tracking: Tracks customer balances, payment installments, and purchase histories.",
        "Real-Time Stock Alerts: Notifies operators when critical fertilizer or produce stock drops below safe replenishment limits."
      ],
      architecture: [
        "Frontend: React + TypeScript delivering strict compile-time type safety for all pricing and stock operations.",
        "Backend / Data Layer: Firebase Firestore with granular security rules for multi-tenant data segregation.",
        "Styling: Tailwind CSS crafted with clean agricultural-themed visual motifs and dark-mode compatibility.",
        "Analytics: Client-side aggregations for revenue tracking, profit calculations, and demand velocity."
      ],
      githubUrl: "https://github.com/Mahesh143-mc/Emerald-Green-Customer-Portal",
      liveUrl: "https://logesh-vivasayi.vercel.app/"
    },
    {
      slug: "mini-web-projects",
      title: "Mini Web Projects Showcase",
      category: "Frontend Micro-Applications",
      role: "Frontend Engineer",
      period: "August 2024",
      image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/f_auto,q_auto/v1778677729/mini_projects_lrkwmg.jpg",
      tech: ["HTML5", "CSS3", "JavaScript (ES6+)"],
      items: ["Calculator", "To-Do List", "Notes Update App", "Profile Page", "Shopping Static Page", "Text-to-Voice Converter"],
      description: [
        "A suite of 6 standalone interactive web tools demonstrating core JavaScript DOM manipulation, Web APIs, and UI engineering.",
        "Includes real-time speech synthesis, stateful note taking, task prioritization, and responsive commercial pages."
      ],
      overview: "A rich collection of purposeful frontend utilities built from the ground up to master core JavaScript principles, browser Web APIs (including SpeechSynthesis API), asynchronous state management, and modern CSS layout engines without relying on external frontend frameworks.",
      highlights: [
        "6 Standalone Production-Ready Web Utilities",
        "Native Web Speech API Text-to-Voice Engine",
        "Zero-Dependency Vanilla JS Architecture",
        "Accessible, Cross-Browser Responsive Layouts"
      ],
      features: [
        "Text-to-Voice Converter: Utilizes native browser Web Speech API for real-time speech synthesis and pitch control.",
        "Notes & To-Do Applications: Persistent local storage management for task tracking and markdown notes.",
        "Interactive Calculator: Precision mathematical evaluation with full keyboard and touchscreen event support.",
        "Static Shopping Showcase: Clean product card layout with responsive filter bars and cart animations.",
        "Profile Page: Modern personal landing page template demonstrating clean typography and layout hierarchy."
      ],
      architecture: [
        "Languages: Pure Vanilla JavaScript (ES6+), semantic HTML5, and modular CSS3.",
        "Storage: Browser LocalStorage API for instant client-side data persistence.",
        "APIs: Native Web Speech API (SpeechSynthesis) for text-to-speech audio rendering.",
        "Hosting: GitHub Pages & Vercel repository deployments."
      ],
      githubUrl: "https://github.com/Mahesh143-mc?tab=repositories"
    }
  ],
  certificates: [
    {
      name: "Soft Skill Development - Swayam(NPTEL)",
      url: "https://drive.google.com/file/d/1DpZ9CkvySwWG7Uw1XrPnPH0umhbCnZUN/view?usp=sharing"
    },
    {
      name: "Basics of MongoDB - Learnathon",
      url: "https://drive.google.com/file/d/108BsQea7iN4Yk-okfVMnI8XXoKzMyVyW/view?usp=sharing"
    },
    {
      name: "Python For Data Science",
      url: "https://drive.google.com/file/d/1wvyvpAKljGFiYW9LNzleA1-Q6PyP2nnY/view?usp=sharing"
    }
  ]
};
