import { motion } from "framer-motion";
import { 
  Sparkles, 
  Rocket, 
  Receipt, 
  ShoppingBag, 
  Smartphone, 
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Terminal,
  Zap,
  ArrowRight
} from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

export function Startup() {
  const startup = resumeData.startup;

  if (!startup) return null;

  return (
    <Section title="Startup & Venture" id="startup" className="relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="space-y-8">
        
        {/* Top Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 -mt-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
            <Rocket size={14} className="text-primary animate-pulse" /> Digital Agency & Software House
          </motion.div>
          
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-extrabold text-white tracking-tight"
          >
            Engineering Scalable Software for Modern Businesses
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base leading-relaxed"
          >
            Founded and led by <span className="text-white font-semibold">{resumeData.name}</span>, ChimeraTech delivers tailored digital solutions—from enterprise billing systems to high-performance web applications.
          </motion.p>
        </div>

        {/* Bento Grid Row 1: Main Spotlight + Interactive Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Spotlight Card (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl glass p-8 md:p-10 border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between relative overflow-hidden group shadow-2xl"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 blur-[100px] rounded-full pointer-events-none -z-10 group-hover:bg-primary/25 transition-all duration-700" />
            
            <div className="space-y-6">
              {/* Header with Logo & Status */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white p-2 flex items-center justify-center shadow-xl ring-2 ring-primary/30 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <img 
                      src={startup.logo} 
                      alt={startup.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                      <span className="gradient-text">{startup.name}</span>
                    </h4>
                    <p className="text-xs text-primary font-bold tracking-wider uppercase">
                      Founded by Mahesh K • 2025
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{startup.status}</span>
                </div>
              </div>

              {/* Tagline & Mission */}
              <div className="space-y-3 pt-2">
                <p className="text-lg md:text-xl font-bold text-white leading-snug">
                  "{startup.tagline}"
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {startup.description}
                </p>
              </div>

              {/* Key Highlights Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {startup.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-white/90 p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                    <span className="font-medium truncate">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-8 mt-4 border-t border-white/10">
              <a
                href={startup.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center gap-2 text-sm group/btn"
              >
                <span>Visit ChimeraTech Website</span>
                <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/919943852902?text=${encodeURIComponent("Hello Mahesh, I saw ChimeraTech on your portfolio and would like to inquire about your software development services.")}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 glass hover:bg-white/10 border border-white/15 text-white font-bold rounded-xl transition-all flex items-center gap-2 text-sm"
              >
                <MessageSquare size={16} className="text-emerald-400" />
                <span>Discuss a Project</span>
              </a>
            </div>
          </motion.div>

          {/* Interactive Live Platform Preview Card (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 rounded-3xl glass p-6 md:p-8 border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between relative overflow-hidden bg-[#0c0b22]/70 shadow-2xl"
          >
            {/* Terminal / Browser Window Mockup Header */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-muted-foreground font-mono flex items-center gap-1.5">
                  <Terminal size={12} className="text-primary" />
                  chimeratech.vercel.app
                </div>
              </div>

              {/* Founder Statement Card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/40">
                    <img 
                      src={resumeData.profileImage} 
                      alt={resumeData.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{resumeData.name}</p>
                    <p className="text-xs text-primary font-medium">Founder & Digital Architect</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-slate-300 italic leading-relaxed">
                  "At ChimeraTech, our vision is to combine modern design with industrial reliability. We build software that simplifies operations, tracks revenue, and helps our clients thrive in the digital economy."
                </p>
              </div>

              {/* Core Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                  <p className="text-2xl font-black text-primary">₹8,999</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Starting Price</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                  <p className="text-2xl font-black text-accent">100%</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">Client Focus</p>
                </div>
              </div>

              {/* Technologies Deployed */}
              <div className="space-y-2 pt-1">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Zap size={14} className="text-amber-400" /> Technology Foundation
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "Next.js", "TypeScript", "Firebase", "Node.js", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom URL Footer */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" /> Verified Agency
              </span>
              <a 
                href={startup.websiteUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-primary hover:underline font-bold flex items-center gap-1"
              >
                Launch Portal <ArrowRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid Row 2: 4 Service Capabilities */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h4 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
              <Sparkles size={18} className="text-accent" /> What ChimeraTech Delivers
            </h4>
            <span className="text-xs text-muted-foreground hidden sm:inline">Comprehensive Technology Solutions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES_CONFIG.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass border border-white/10 hover:border-primary/50 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg} text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon size={22} className={service.iconColor} />
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-base font-bold text-white group-hover:text-primary transition-colors leading-snug">
                        {service.title}
                      </h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/5">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-medium text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Collaboration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary/15 via-[#0c0b22] to-accent/15 border border-primary/25 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1 text-center md:text-left">
            <h5 className="text-lg md:text-xl font-bold text-white">
              Have an idea for a business, website, or custom software?
            </h5>
            <p className="text-xs md:text-sm text-muted-foreground">
              Partner with ChimeraTech to build an enterprise-ready solution from scratch.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={startup.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs md:text-sm rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore ChimeraTech</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}

const SERVICES_CONFIG = [
  {
    title: "Web & Web App Development",
    description: "High-speed business websites, responsive portals, and full-stack React & Next.js web applications tailored for conversions.",
    icon: Code2,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    tags: ["React", "Next.js", "SEO", "Responsive"]
  },
  {
    title: "Billing & POS Systems",
    description: "Industrial GST billing software, inventory tracking, thermal printing, and dual Tamil/English language accessibility.",
    icon: Receipt,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    tags: ["GST Billing", "Barcode", "Tamil/English", "POS"]
  },
  {
    title: "E-Commerce Platforms",
    description: "Complete online storefronts with cart management, dynamic product catalogs, payment gateways, and automated receipts.",
    icon: ShoppingBag,
    iconBg: "bg-fuchsia-500/10",
    iconColor: "text-fuchsia-400",
    tags: ["Online Store", "Payments", "Orders", "Admin"]
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for Android & iOS backed by real-time Firebase Firestore cloud persistence.",
    icon: Smartphone,
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    tags: ["Android", "iOS", "Firebase", "Cross-Platform"]
  }
];
