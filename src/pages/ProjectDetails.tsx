import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { resumeData } from "../data/resumeData";
import { Footer } from "../components/Footer";
import { BackgroundEffects } from "../components/BackgroundEffects";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top upon landing on project page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const projectIndex = resumeData.projects.findIndex((p) => p.slug === slug);
  const project = resumeData.projects[projectIndex];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] text-foreground flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you are looking for does not exist or has moved.</p>
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    );
  }

  // Next and Previous projects for fluid navigation
  const prevProject = resumeData.projects[(projectIndex - 1 + resumeData.projects.length) % resumeData.projects.length];
  const nextProject = resumeData.projects[(projectIndex + 1) % resumeData.projects.length];

  return (
    <div className="min-h-screen bg-[#030014] text-foreground selection:bg-primary/30 selection:text-primary relative overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <BackgroundEffects />
      </div>

      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 px-4 md:px-8 py-4 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/#projects")}
            className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/5"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </button>

          <Link to="/" className="text-lg font-bold gradient-text hidden sm:inline-block">
            {resumeData.name}
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 glass rounded-xl text-muted-foreground hover:text-white hover:border-primary/50 transition-all flex items-center gap-2 text-xs md:text-sm font-semibold"
                aria-label="View Source on GitHub"
              >
                <Github size={16} />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 text-xs md:text-sm"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 space-y-16">
        
        {/* Project Title Hero */}
        <section className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            {project.category && (
              <span className="px-3.5 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={12} /> {project.category}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 glass rounded-full">
              <Calendar size={13} className="text-primary" /> {project.period}
            </span>
            {project.role && (
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground px-3 py-1.5 glass rounded-full">
                <UserCheck size={13} className="text-accent" /> {project.role}
              </span>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-4xl leading-relaxed"
          >
            {project.description?.[0] || project.overview}
          </motion.p>

          {/* Quick Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-bold rounded-2xl shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2 text-sm md:text-base group"
              >
                <span>Launch Live Application</span>
                <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 glass hover:bg-white/10 border border-white/10 text-white font-bold rounded-2xl transition-all flex items-center gap-2 text-sm md:text-base"
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>
            )}
          </motion.div>
        </section>

        {/* Featured Big Showcase Image */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden glass p-3 md:p-4 border border-white/15 shadow-2xl group"
        >
          {/* Subtle Ambient Radial Glow Behind Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/15 opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative rounded-2xl overflow-hidden bg-[#0c0b1e] aspect-video w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>
        </motion.section>

        {/* Highlights Strip */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 glass rounded-2xl border border-white/10 flex items-start gap-4 group hover:border-primary/40 transition-colors"
              >
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">{highlight}</h4>
                </div>
              </motion.div>
            ))}
          </section>
        )}

        {/* Detailed Breakdown: Overview, Features & Architecture */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Story & Features */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Project Overview */}
            {project.overview && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-primary rounded-full" /> Project Overview
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {project.overview}
                </p>
                {project.description && project.description.length > 1 && (
                  <div className="space-y-3 pt-2">
                    {project.description.slice(1).map((desc, i) => (
                      <p key={i} className="text-muted-foreground text-base leading-relaxed">
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-6 bg-accent rounded-full" /> Key Capabilities & Features
                </h3>
                <div className="space-y-3">
                  {project.features.map((feat, i) => {
                    const [heading, ...rest] = feat.split(":");
                    return (
                      <div
                        key={i}
                        className="p-5 glass rounded-2xl border border-white/10 flex items-start gap-4 hover:border-white/20 transition-colors"
                      >
                        <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
                        <div className="space-y-1">
                          {rest.length > 0 ? (
                            <>
                              <span className="font-bold text-white">{heading}:</span>
                              <span className="text-muted-foreground ml-1.5">{rest.join(":")}</span>
                            </>
                          ) : (
                            <span className="text-muted-foreground">{feat}</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Micro Tools Items if mini-projects */}
            {project.items && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Layers size={18} className="text-primary" /> Included Sub-Applications
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.items.map((item) => (
                    <div
                      key={item}
                      className="p-3.5 glass rounded-xl border border-white/10 text-center text-sm font-semibold text-white/90 hover:border-primary/50 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Tech Stack & System Architecture */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Tech Stack Card */}
            <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Cpu size={20} className="text-primary" /> Technologies Used
              </h3>
              
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-bold text-white">{t}</span>
                  </div>
                ))}
              </div>

              {/* Developer Metadata */}
              <div className="pt-6 border-t border-white/10 space-y-4 text-sm">
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Author:</span>
                  <span className="font-bold text-white">{resumeData.name}</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Role:</span>
                  <span className="font-bold text-white">{project.role || "Full-Stack Developer"}</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Completed:</span>
                  <span className="font-bold text-white">{project.period}</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Status:</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Production Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Layers size={20} className="text-accent" /> System Architecture
                </h3>
                <div className="space-y-4 text-sm">
                  {project.architecture.map((arch, i) => {
                    const [title, ...content] = arch.split(":");
                    return (
                      <div key={i} className="space-y-1">
                        <p className="font-bold text-white">{title}:</p>
                        <p className="text-muted-foreground text-xs leading-relaxed">{content.join(":")}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Project Switcher: Next & Previous Project Navigation */}
        <section className="pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Explore More Work</p>
            <h3 className="text-2xl md:text-3xl font-black text-white">Other Featured Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to={`/project/${prevProject.slug}`}
              className="p-6 glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all flex items-center justify-between group"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Previous Project</p>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {prevProject.title}
                </h4>
              </div>
              <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
            </Link>

            <Link
              to={`/project/${nextProject.slug}`}
              className="p-6 glass rounded-2xl border border-white/10 hover:border-primary/50 transition-all flex items-center justify-between group"
            >
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Next Project</p>
                <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {nextProject.title}
                </h4>
              </div>
              <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
