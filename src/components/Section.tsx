import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
}

export function Section({ children, id, className, title }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 max-w-7xl mx-auto", className)}>
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          {title}
        </motion.h2>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
