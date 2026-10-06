import { StarField } from "./StarField";

export function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 contain-paint" aria-hidden="true">
      {/* Subtle Glowing Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Vertical Ambient Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-accent/15 opacity-70" />
      
      {/* Optimized Starfield */}
      <StarField />
      
      {/* GPU Accelerated Ambient Light Leaks */}
      <div className="light-leak-blue opacity-35" />
      <div className="light-leak-purple opacity-35" />
      <div className="flowing-orb opacity-50" />
    </div>
  );
}
