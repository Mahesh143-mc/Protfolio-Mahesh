import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Startup } from "./components/Startup";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { Preloader } from "./components/Preloader";
import { SmoothScroll } from "./components/SmoothScroll";
import { ProjectDetails } from "./pages/ProjectDetails";
import { resumeData } from "./data/resumeData";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { scrollTo } from "./lib/scroll";

function HomePage() {
  const { scrollYProgress } = useScroll();
  const location = useLocation();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle hash scrolling when coming back from a project page (e.g. /#projects)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          scrollTo(element as HTMLElement, { offset: -80, duration: 1.2 });
        }, 150);
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-background text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      {/* Butter-smooth momentum inertia scrolling */}
      <SmoothScroll />

      <div className="fixed inset-0 bg-[#030014] -z-20" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-[60] origin-left will-change-transform"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        {/* Fixed Hero stays in background */}
        <div className="fixed inset-0 h-screen z-0">
          <Hero />
        </div>

        {/* Content wrapper that smoothly scrolls over the Hero */}
        <div className="content-wrapper relative z-10 mt-[100vh] bg-background border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.6)] min-h-screen">
          {/* Section-specific Background Effects */}
          <BackgroundEffects />

          <div className="pt-20">
            <About />
            <Skills />
            <Projects />
            <Startup />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only preload critical assets on initial page visit
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
          img.onerror = resolve;
        });
      });

      await Promise.all([
        ...promises,
        new Promise(resolve => setTimeout(resolve, 1800))
      ]);
      
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
