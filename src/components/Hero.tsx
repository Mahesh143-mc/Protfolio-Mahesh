import { motion } from "framer-motion";
import { Download, MessageSquare, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "../data/resumeData";
import { useState, useEffect } from "react";

const WORDS = ["MAHESH", "DEVELOPER", "DESIGNER", "PROBLEM SOLVER"];

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, typedText.length + 1));
        if (typedText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section id="home" className="h-full w-full flex items-center justify-center px-6 overflow-hidden z-0 bg-[#030014]">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Spotlight / Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50 pointer-events-none" />
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1px] h-[500px] bg-gradient-to-b from-primary/50 to-transparent blur-sm opacity-30 z-0" />
      
      {/* Ambient Blobs */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/10 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-accent/10 blur-[120px] rounded-full animate-pulse animation-delay-2000" />
      
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[400px_1fr_400px] gap-8 items-center relative z-10 h-full">
        
        {/* Left Column: Text & Primary Action */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6 lg:space-y-8 order-1 lg:order-1 px-6 lg:px-8 pt-10 lg:pt-0"
        >
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight flex flex-col md:flex-row items-center lg:items-baseline justify-center lg:justify-start gap-2 lg:gap-4">
              <span className="text-white">I'm</span>
              <span className="gradient-text uppercase">
                {typedText}
                <span className="inline-block w-1 h-8 md:h-12 bg-primary ml-2 animate-pulse align-middle" />
              </span>
            </h1>
            
            <p className="text-muted-foreground text-sm md:text-xl font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
              Specializing in building modern, scalable, and user-centric web applications.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center lg:justify-start"
          >
            <a
              href="#"
              className="group px-8 py-3 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white rounded-full font-bold flex items-center gap-3 shadow-xl hover:shadow-[#0072ff]/50 transition-all text-sm md:text-base"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Center Column: Massive Profile Image & Enhanced BG Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex items-end justify-center order-3 lg:order-2 h-full"
        >
          {/* Multi-layered Glows */}
          <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[900px] md:h-[900px] bg-primary/40 rounded-full blur-[80px] md:blur-[140px] -z-10 animate-pulse" />
          
          <div className="relative w-full h-[50vh] md:h-[85vh] group flex items-end justify-center max-w-[1000px]">
             {/* Multiple Animated Nested Rings */}
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-[5%] border border-primary/5 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
            
            {/* Circular Glass Background Shape */}
            <div className="absolute inset-[10%] lg:inset-[10%] glass rounded-full border border-white/10 shadow-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            
            {/* Image container - massive bottom aligned */}
            <div className="relative w-full h-full flex items-end justify-center overflow-visible">
              <motion.img
                src={resumeData.profileImage}
                alt={resumeData.name}
                className="w-auto h-full max-w-none object-contain relative z-10 transition-all duration-1000 group-hover:scale-[1.02] pointer-events-none drop-shadow-[0_0_30px_rgba(139,92,246,0.3)] md:drop-shadow-[0_0_60px_rgba(139,92,246,0.5)]"
                style={{ 
                  filter: "brightness(1.1) contrast(1.05)"
                }}
              />
              
              {/* Floating Social Icons for Mobile */}
              <div className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <SocialLink 
                  href={resumeData.contact.github} 
                  icon={<Github size={20} />} 
                  label="GitHub" 
                  isFloating 
                />
                <SocialLink 
                  href={`https://${resumeData.contact.linkedin}`} 
                  icon={<Linkedin size={20} />} 
                  label="LinkedIn" 
                  isFloating 
                />
                <SocialLink 
                  href={`mailto:${resumeData.contact.email}`} 
                  icon={<Mail size={20} />} 
                  label="Email" 
                  isFloating 
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Other Profiles & Contact (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block text-right space-y-8 order-3 px-8"
        >
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground/50">Other Profiles</h3>
            
            <div className="flex flex-col gap-4 items-end">
              <SocialLink 
                href={resumeData.contact.github} 
                icon={<Github size={20} />} 
                label="GitHub" 
              />
              <SocialLink 
                href={`https://${resumeData.contact.linkedin}`} 
                icon={<Linkedin size={20} />} 
                label="LinkedIn" 
              />
              <SocialLink 
                href={`mailto:${resumeData.contact.email}`} 
                icon={<Mail size={20} />} 
                label="Email" 
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-end"
          >
            <a
              href="#contact"
              className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center gap-2"
            >
              Get In Touch
              <MessageSquare size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label, isFloating }: { href: string, icon: React.ReactNode, label: string, isFloating?: boolean }) {
  if (isFloating) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-3 glass rounded-full bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md"
      >
        {icon}
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ x: -10 }}
      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
    >
      <span className="text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
        {label}
      </span>
      <div className="p-3 glass rounded-full group-hover:bg-primary/20 group-hover:border-primary transition-all">
        {icon}
      </div>
    </motion.a>
  );
}