interface Experience {
  project: string;
  title: string;
  period: string;
  description: string[];
}

interface Project {
  title: string;
  period: string;
  image: string;
  tech: string[];
  description?: string[];
  items?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ResumeData {
  name: string;
  title: string;
  status: string;
  profileImage: string;
  objective: string;
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
      title: "Crackers Shop Management System",
      period: "May 2025",
      image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/f_auto,q_auto/v1778677660/Screenshot_2026-05-13_183740_linef3.png",
      tech: ["ReactJS", "Firebase", "Tailwind CSS"],
      description: [
        "A full-scale retail management system for a fireworks store with real-time stock and billing.",
        "Streamlines customer orders and inventory tracking for seasonal business spikes."
      ],
      liveUrl: "https://crackers-shop.vercel.app/",
      githubUrl: "https://github.com/Mahesh143-mc"
    },
    {
      title: "Logesh Vivasyi - POS & Inventory System",
      period: "February 2025",
      image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/f_auto,q_auto/v1778677473/Screenshot_2026-05-13_183345_potlun.png",
      tech: ["React", "TypeScript", "Firebase"],
      description: [
        "Advanced POS & Inventory system supporting Tamil/English with real-time stock tracking.",
        "Features AI-powered analytics, dynamic invoice generation, and full business reporting."
      ],
      githubUrl: "https://github.com/Mahesh143-mc/Emerald-Green-Customer-Portal",
      liveUrl: "https://logesh-vivasayi.vercel.app/"
    },
    {
      title: "Mini Web Projects",
      period: "August 2024",
      image: "https://res.cloudinary.com/dnwb5u0xn/image/upload/f_auto,q_auto/v1778677729/mini_projects_lrkwmg.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      items: ["Calculator", "To-Do List", "Notes Update App", "Profile Page", "Shopping Static Page", "Text-to-Voice Converter"],
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

