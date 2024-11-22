import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface VinylRecordProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export function VinylRecord({ isPlaying, togglePlay }: VinylRecordProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glassmorphism flex items-center justify-center overflow-hidden">
        <motion.div 
          className="w-full h-full rounded-full bg-white/10 shadow-lg border border-white/20 backdrop-blur-sm flex items-center justify-center vinyl-grooves"
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-1/3 h-1/3 rounded-full bg-transparent border-2 border-white/20 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full animated-gradient"></div>
          </div>
          <div className="absolute w-full h-full">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="curve"
                fill="transparent"
                d="
                  M 50, 50
                  m -37, 0
                  a 37,37 0 1,1 74,0
                  a 37,37 0 1,1 -74,0"
              />
              <text fontSize="4">
                <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle" className="fill-white/60">
                  @calmsunsets
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-all duration-300 focus:outline-none"
        >
          {isPlaying ? (
            <Pause className="w-16 h-16 text-white/70" />
          ) : (
            <Play className="w-16 h-16 text-white/70" />
          )}
        </button>
      </div>
    </motion.div>
  );
}

