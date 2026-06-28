import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

export function Contact() {
  return (
    <Section title="Get In Touch" id="contact" className="mb-20 relative overflow-hidden">
      {/* Background Lighting Effect */}
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-fuchsia-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

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
            <SocialLink href={resumeData.contact.github} icon={<Github />} label="GitHub Profile" />
            <SocialLink href={`https://${resumeData.contact.linkedin}`} icon={<Linkedin />} label="LinkedIn Profile" />
            <SocialLink href={`https://${resumeData.contact.portfolio}`} icon={<Globe />} label="Portfolio Website" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="glass rounded-3xl p-8"
        >
          <form 
            className="space-y-6" 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const message = formData.get('message');
              const subject = formData.get('subject');
              
              const whatsappUrl = `https://wa.me/919943852902?text=${encodeURIComponent(
                `Hello Mahesh, I am ${name}.\nSubject: ${subject}\n\n${message}`
              )}`;
              
              window.open(whatsappUrl, '_blank');
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <input name="name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Subject</label>
              <input name="subject" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Message</label>
              <textarea name="message" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?" />
            </div>
            <button type="submit" className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
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

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={label}
      className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all"
    >
      {icon}
    </a>
  );
}
