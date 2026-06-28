import { motion } from "framer-motion";
import { Code2, Layout, Database, Wrench, Users } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

const iconMap: Record<string, React.ElementType> = {
  programming: Code2,
  frontend: Layout,
  backend: Database,
  tools: Wrench,
  softSkills: Users,
};

const labelMap: Record<string, string> = {
  programming: "Programming Languages",
  frontend: "Frontend Development",
  backend: "Backend Development",
  tools: "Development Tools",
  softSkills: "Soft Skills",
};

export function Skills() {
  return (
    <Section title="Skills & Expertise" id="skills" className="relative overflow-hidden">
      {/* Background Lighting Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(resumeData.skills).map(([key, items], index) => {
          const Icon = iconMap[key];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-6 glass rounded-2xl group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{labelMap[key]}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
