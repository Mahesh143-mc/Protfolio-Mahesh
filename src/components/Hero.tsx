import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { resumeData } from "../data/resumeData";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-sm font-medium text-primary"
        >
          {resumeData.status}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          I'm <span className="gradient-text">{resumeData.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
        >
          {resumeData.title} specializing in building modern, scalable, and user-centric web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
