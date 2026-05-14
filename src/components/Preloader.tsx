import { motion } from "framer-motion";

export function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-[#02000d] flex items-center justify-center overflow-hidden"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[180px] rounded-full animate-pulse" />
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -100],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 4, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
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
              opacity: [0, 1, 1, 0], 
              scale: [0.9, 1, 1, 1.05],
              filter: ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]
            }}
            transition={{ 
              duration: 6.8, 
              times: [0, 0.15, 0.85, 1],
              ease: "easeInOut" 
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
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute left-[-10%] right-[-10%] h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10 blur-[1px]"
          />
        </div>
        
        {/* Advanced Loading Indicators */}
        <div className="mt-12 space-y-6 flex flex-col items-center">
          <div className="w-64 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "circInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 6, times: [0, 0.1, 0.9, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center gap-2">
               <span className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.5em] animate-pulse">
                Initializing System
              </span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-purple-400"
              >
                ...
              </motion.span>
            </div>
            <div className="h-4 flex gap-1 items-end">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", "100%", "20%"] }}
                  transition={{ 
                    duration: 0.8 + Math.random(), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.1 
                  }}
                  className="w-[2px] bg-purple-500/40 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
