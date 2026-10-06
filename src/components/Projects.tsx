import { motion } from "framer-motion";
import { Github, Code, Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = resumeData.projects;
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else setVisibleCards(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - visibleCards);

  const nextProject = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevProject = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <Section title="Featured Projects" id="projects" className="relative overflow-hidden">
      {/* Background Lighting Effects - GPU Accelerated */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/10 blur-[80px] rounded-full pointer-events-none -z-10 transform translate-z-0" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-accent/5 blur-[80px] rounded-full pointer-events-none -z-10 transform translate-z-0" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <Code size={16} /> Featured Work
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            Explore my latest work showcasing modern web development and creative solutions.
          </motion.p>
        </div>

        {/* Carousel Viewport */}
        <div className="relative overflow-hidden px-2 md:px-4 pb-24">
          <motion.div 
            className="flex -mx-2 md:-mx-4 touch-pan-y"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) nextProject();
              else if (info.offset.x > 50) prevProject();
            }}
            animate={{ 
              x: `-${currentIndex * (100 / visibleCards)}%` 
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.slug || project.title + index}
                className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 flex-shrink-0"
              >
                <div className="group h-full bg-[#111827]/50 border border-white/5 rounded-3xl overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-300">
                  {/* Project Image with Tag */}
                  <Link to={`/project/${project.slug}`} className="relative aspect-video overflow-hidden block">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-lg shadow-lg uppercase tracking-wider">
                        {project.category || "Web App"}
                      </span>
                    </div>
                  </Link>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    {project.period && (
                      <div className="flex items-center gap-2 text-primary/80 text-[10px] font-bold uppercase tracking-widest mb-3">
                        <Calendar size={12} /> {project.period}
                      </div>
                    )}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight group-hover:text-primary transition-colors">
                      <Link to={`/project/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    
                    <div className="space-y-4 mb-6 md:mb-8 flex-grow">
                      {project.description ? (
                        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                          {project.description[0]}
                        </p>
                      ) : project.items ? (
                        <div className="flex flex-wrap gap-2">
                          {project.items.slice(0, 4).map(item => (
                            <span key={item} className="px-2 py-1 bg-white/5 rounded text-[10px] text-muted-foreground">
                              {item}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                      {project.tech.map((t) => (
                        <div key={t} className="flex items-center gap-1.5 px-2.5 py-1 bg-white/5 border border-white/10 rounded-full">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                          <span className="text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{t}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link 
                        to={`/project/${project.slug}`}
                        className="flex-1 bg-primary/10 hover:bg-primary border border-primary/20 text-primary hover:text-primary-foreground py-3 rounded-xl font-bold text-xs md:text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-muted-foreground hover:text-white transition-all"
                          aria-label={`View ${project.title} source on GitHub`}
                        >
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Bar at Bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6">
            <button 
              onClick={prevProject}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all active:scale-90"
              aria-label="Previous Project"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === currentIndex 
                      ? "w-8 h-2 bg-primary" 
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextProject}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all active:scale-90"
              aria-label="Next Project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Experience Section */}
        {resumeData.experience.length > 0 && (
          <div className="mt-20">
            {resumeData.experience.map((exp) => (
              <motion.div
                key={exp.project}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111827]/30 border border-white/5 rounded-[40px] p-8 md:p-12 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10 rounded-full" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                  <div>
                    <span className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                      {exp.title}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {exp.project}
                    </h3>
                  </div>
                  <div className="px-6 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-bold text-sm">
                    {exp.period}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {exp.description.map((desc: string, i: number) => (
                    <div key={i} className="flex gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:bg-white/10 transition-colors">
                      <div className="mt-1.5 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
