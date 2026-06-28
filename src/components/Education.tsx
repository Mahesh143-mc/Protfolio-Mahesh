import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Section } from "./Section";
import { resumeData } from "../data/resumeData";

export function Education() {
  return (
    <Section title="Education & Certifications" id="education" className="relative overflow-hidden">
      {/* Background Lighting Effect */}
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" /> Academic Path
          </h3>
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-border pb-8 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
              <h4 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h4>
              <p className="text-primary font-medium mb-3">{edu.institution}</p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {edu.period}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {edu.location}</span>
                <span className="flex items-center gap-1.5 font-bold text-foreground bg-primary/10 px-2 py-0.5 rounded">
                   {edu.percentage}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <Award className="text-primary" /> Certifications
          </h3>
          <div className="space-y-4">
            {resumeData.certificates.map((cert, index) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 glass rounded-2xl flex items-center gap-4 group hover:border-primary/50 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Award size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors">{cert.name}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1 group-hover:text-primary/70">
                    Click to view <Award size={10} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
