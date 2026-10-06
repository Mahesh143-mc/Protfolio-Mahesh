import { motion } from "framer-motion";
import { useMemo } from "react";

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  deltaY: number;
  duration: number;
  delay: number;
}

const AUDIO_BARS = [
  { id: 0, duration: 1.1, delay: 0 },
  { id: 1, duration: 0.9, delay: 0.1 },
  { id: 2, duration: 1.3, delay: 0.2 },
  { id: 3, duration: 1.0, delay: 0.3 },
  { id: 4, duration: 1.2, delay: 0.4 },
];

export function Preloader() {
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      initialX: (i * 5.1 + 10) % 95,
      initialY: (i * 7.3 + 15) % 95,
      deltaY: -30 - (i % 5) * 15,
      duration: 3 + (i % 4) * 0.8,
      delay: (i % 6) * 0.3,
    }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#02000d] flex items-center justify-center overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[120px] rounded-full animate-pulse" />
        
        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              left: `${p.initialX}%`, 
              top: `${p.initialY}%`,
              opacity: 0 
            }}
            animate={{ 
              y: [0, p.deltaY],
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: p.duration, 
              repeat: Infinity, 
              ease: "linear",
              delay: p.delay
            }}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
          />
        ))}
      </div>
      
      {/* Advanced Orbital System */}
      <div className="absolute flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute w-[500px] h-[500px] border border-purple-500/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-[450px] h-[450px] border border-blue-500/5 rounded-full border-dashed"
        />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Main Text with Scanning Effect */}
        <div className="relative group">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: [0, 1, 1], 
              scale: [0.92, 1, 1],
              filter: ["blur(12px)", "blur(0px)", "blur(0px)"]
            }}
            transition={{ 
              duration: 1.5, 
              times: [0, 0.4, 1],
              ease: "easeOut" 
            }}
            className="text-6xl md:text-8xl font-black tracking-[0.4em] select-none bg-gradient-to-br from-white via-purple-500 to-purple-900 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]"
          >
            MAHI
          </motion.h1>
          
          {/* Scanning Line Effect */}
          <motion.div
            animate={{ 
              top: ["-10%", "110%"],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-[-10%] right-[-10%] h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10 blur-[1px]"
          />
        </div>
        
        {/* Advanced Loading Indicators */}
        <div className="mt-12 space-y-6 flex flex-col items-center">
          <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
               <span className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.5em] animate-pulse">
                Initializing System
              </span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-purple-400"
              >
                ...
              </motion.span>
            </div>
            <div className="h-4 flex gap-1 items-end">
              {AUDIO_BARS.map((bar) => (
                <motion.div
                  key={bar.id}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{ 
                    duration: bar.duration, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: bar.delay 
                  }}
                  className="w-[2px] bg-purple-500/40 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
