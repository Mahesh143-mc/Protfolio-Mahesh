import { resumeData } from "../data/resumeData";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-white/5 text-center text-muted-foreground bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        <p className="text-muted-foreground/80">
          Crafted with <span className="text-primary font-semibold">React</span>, <span className="text-accent font-semibold">Tailwind CSS</span> & <span className="text-primary font-semibold">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
