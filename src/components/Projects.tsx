import { motion } from "framer-motion";
import { ExternalLink, Github, Code } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

export function Projects() {
  return (
    <Section title="Featured Projects" id="projects" className="relative overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Projects */}
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative overflow-hidden glass rounded-3xl p-8"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Code size={24} />
              </div>
              {project.period && (
                <span className="text-sm text-muted-foreground">{project.period}</span>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-xs text-muted-foreground uppercase tracking-wider">
                  {t}
                </span>
              ))}
            </div>

            {project.description && (
              <ul className="space-y-3 mb-8">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary">•</span> {desc}
                  </li>
                ))}
              </ul>
            )}

            {project.items && (
              <div className="grid grid-cols-2 gap-3 mb-8">
                {project.items.map((item) => (
                  <div key={item} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-xs text-muted-foreground text-center">
                    {item}
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <Github size={18} /> Source Code
              </button>
              <button className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                <ExternalLink size={18} /> Live Demo
              </button>
            </div>
          </motion.div>
        ))}

        {/* Experience Section as a Project Card */}
        {resumeData.experience.map((exp) => (
          <motion.div
            key={exp.project}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 group relative overflow-hidden glass rounded-3xl p-8 border-primary/20"
          >
             <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold mb-1 block">
                  {exp.title}
                </span>
                <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                  {exp.project}
                </h3>
              </div>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>

            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {exp.description.map((desc, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-3 p-4 bg-white/5 rounded-2xl">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
