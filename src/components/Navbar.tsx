import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { resumeData } from "../data/resumeData";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold gradient-text"
        >
          {resumeData.name}
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href={resumeData.contact.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Github size={20} />
          </a>
          <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-6 mt-4 pt-4 border-t border-border">
            <a href={resumeData.contact.github} className="text-muted-foreground"><Github /></a>
            <a href={`https://${resumeData.contact.linkedin}`} className="text-muted-foreground"><Linkedin /></a>
            <a href={`mailto:${resumeData.contact.email}`} className="text-muted-foreground"><Mail /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
