import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

export function Contact() {
  return (
    <Section title="Get In Touch" id="contact" className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="grid gap-6">
            <ContactInfo 
              icon={<Mail />} 
              label="Email" 
              value={resumeData.contact.email} 
              href={`mailto:${resumeData.contact.email}`} 
            />
            <ContactInfo 
              icon={<Phone />} 
              label="Phone" 
              value={resumeData.contact.phone} 
              href={`tel:${resumeData.contact.phone}`} 
            />
            <ContactInfo 
              icon={<MapPin />} 
              label="Location" 
              value={resumeData.contact.location} 
            />
          </div>

          <div className="flex gap-4 pt-4">
            <SocialLink href={resumeData.contact.github} icon={<Github />} />
            <SocialLink href={`https://${resumeData.contact.linkedin}`} icon={<Linkedin />} />
            <SocialLink href={`https://${resumeData.contact.portfolio}`} icon={<Globe />} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?" />
            </div>
            <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{label}</p>
        <p className="font-medium group-hover:text-primary transition-colors">{value}</p>
      </div>
    </div>
  );

  return href ? <a href={href} className="block">{content}</a> : <div>{content}</div>;
}

function SocialLink({ href, icon }: { href: string, icon: any }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all"
    >
      {icon}
    </a>
  );
}
