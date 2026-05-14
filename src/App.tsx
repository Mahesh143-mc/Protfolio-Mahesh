import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { resumeData } from "./data/resumeData";
import { Preloader } from "./components/Preloader";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
// import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      resumeData.profileImage,
      ...resumeData.projects.map(p => p.image)
    ];

    const preloadImages = async () => {
      const promises = criticalImages.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue anyway
        });
      });

      // Show splash for at least 7 seconds, but wait for images if needed
      await Promise.all([
        ...promises,
        new Promise(resolve => setTimeout(resolve, 7000))
      ]);
      
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      {/* <SpeedInsights /> */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>
      <div className="fixed inset-0 bg-[#030014] -z-20" />


      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        {/* Fixed Hero stays in background */}
        <div className="fixed inset-0 h-screen z-0">
          <Hero />
        </div>

        {/* Content wrapper that scrolls over the Hero */}
        <div className="content-wrapper relative z-10 mt-[100vh] bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.5)] min-h-screen">
          {/* Section-specific Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Glowing Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-accent/20 opacity-70" />
            
            <StarField />
            
            <div className="light-leak-blue opacity-40" />
            <div className="light-leak-purple opacity-40" />
            <div className="flowing-orb opacity-60" />
          </div>

          <div className="pt-20">
            {/* About Section */}
          <Section title="About Me" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded-full" /> My Vision
                </h4>
                <p className="text-muted-foreground relative z-10">
                  To bridge the gap between complex backend logic and beautiful, intuitive frontend experiences. I believe in writing clean, maintainable code that solves real-world problems.
                </p>
              </motion.div>
            </div>
          </Section>

          <Skills />
          <Projects />
          <Education />
          <Contact />
          
          <footer className="py-12 border-t border-white/5 text-center text-muted-foreground bg-background/80 backdrop-blur-md">
            <p>© {new Date().getFullYear()} {resumeData.name}. Built with React & Framer Motion.</p>
          </footer>
          </div>
        </div>
      </main>
    </div>

  );
}

function Stat({ label, value, delay = 0 }: { label: string, value: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, delay }}
      className="p-6 glass rounded-2xl group hover:border-primary/50 transition-colors"
    >
      <p className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform origin-left">{value}</p>
      <p className="text-xs uppercase tracking-widest font-medium text-muted-foreground">{label}</p>
    </motion.div>
  );
}


const GENERATED_STARS = [...Array(120)].map((_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4}px`,
  duration: `${1.5 + Math.random() * 3.5}s`,
}));

function StarField() {
  return (
    <div className="stars-container">
      {GENERATED_STARS.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

export default App;
