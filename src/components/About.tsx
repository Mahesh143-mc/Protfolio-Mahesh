import { motion } from "framer-motion";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

export function About() {
  return (
    <Section title="About Me" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {resumeData.objective}
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <Stat label="Experience" value="Freelance" delay={0.1} />
            <Stat label="Projects" value="10+" delay={0.2} />
            <Stat label="Skills" value="15+" delay={0.3} />
            <Stat label="Location" value="India" delay={0.4} />
          </div>
        </div>
        
        {/* Decorative Card for About */}
        <motion.div 
          className="lg:col-span-2 glass p-8 rounded-3xl relative group overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full" /> My Vision
          </h4>
          <p className="text-muted-foreground relative z-10 leading-relaxed">
            To bridge the gap between complex backend logic and beautiful, intuitive frontend experiences. I believe in writing clean, maintainable code that solves real-world problems.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

interface StatProps {
  label: string;
  value: string;
  delay?: number;
}

function Stat({ label, value, delay = 0 }: StatProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay }}
      className="p-6 glass rounded-2xl group hover:border-primary/50 transition-colors will-change-transform"
    >
      <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform origin-left">
        {value}
      </p>
      <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
}
