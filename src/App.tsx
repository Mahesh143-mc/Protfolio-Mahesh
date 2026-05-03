import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { resumeData } from "./data/resumeData";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />

        {/* About Section */}
        <Section title="About Me" id="about">
          <div className="max-w-3xl">
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {resumeData.objective}
            </motion.p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <Stat label="Experience" value="Fresher" />
              <Stat label="Projects" value="10+" />
              <Stat label="Skills" value="15+" />
              <Stat label="Location" value="India" />
            </div>
          </div>
        </Section>

        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="py-12 border-t border-border text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} {resumeData.name}. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="p-6 glass rounded-2xl">
      <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

export default App;
