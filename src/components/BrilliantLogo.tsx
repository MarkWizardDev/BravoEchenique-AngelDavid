import { motion } from 'motion/react';
import crystalStar3DImg from '../assets/images/crystal_star_3d_render_1790626825044.jpg';

interface BrilliantLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function BrilliantLogo({ size = 'md', showSubtitle = false }: BrilliantLogoProps) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div className="flex items-center gap-3.5 select-none group cursor-pointer">
      {/* 3D Floating Crystal Starlight Emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        {/* Radiant Multi-Chroma Starlight Nebula Aura */}
        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0.95, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className={`absolute rounded-full bg-gradient-to-tr from-cyan-400/60 via-sky-300/80 to-blue-600/50 blur-xl ${
            isSmall ? 'w-12 h-12' : isLarge ? 'w-32 h-32' : 'w-18 h-18'
          }`}
        />

        {/* Outer Starlight Gyro Ring 1 (Clockwise) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className={`absolute rounded-2xl border-2 border-cyan-400/60 shadow-[0_0_14px_rgba(0,229,255,0.7)] ${
            isSmall ? 'w-10 h-10' : isLarge ? 'w-24 h-24' : 'w-15 h-15'
          }`}
        />

        {/* Inner Counter-Rotating Gyro Ring 2 (Counter-Clockwise, tilted 45deg) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className={`absolute rounded-full border border-sky-300/50 border-dashed ${
            isSmall ? 'w-9 h-9' : isLarge ? 'w-22 h-22' : 'w-13 h-13'
          }`}
        />

        {/* 3D Crystal Star Gem Container with Multi-Level Depth */}
        <motion.div
          whileHover={{
            scale: 1.18,
            rotateY: 20,
            rotateX: -12,
            boxShadow: '0 25px 35px -8px rgba(14, 165, 233, 0.6), 0 0 25px rgba(56, 189, 248, 0.9)',
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 14 }}
          style={{ transformStyle: 'preserve-3d' }}
          className={`relative z-10 flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl shadow-sky-950/40 border-2 border-cyan-300 bg-gradient-to-br from-slate-900 via-sky-950 to-blue-950 ${
            isSmall ? 'w-8 h-8' : isLarge ? 'w-18 h-18' : 'w-12 h-12'
          }`}
        >
          <img
            src={crystalStar3DImg}
            alt="Tala Tech 3D Crystal Star"
            className="w-full h-full object-cover filter brightness-120 contrast-125 saturate-110"
            referrerPolicy="no-referrer"
          />
          {/* Glass specular sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
          
          {/* Sweeping crystal light gleam */}
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 animate-sweep-beam pointer-events-none" />
        </motion.div>

        {/* Orbiting Starlight Particle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className={`absolute ${isSmall ? 'w-11 h-11' : isLarge ? 'w-26 h-26' : 'w-16 h-16'} pointer-events-none`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#00e5ff] -top-1 left-1/2 -translate-x-1/2 absolute" />
        </motion.div>
      </div>

      {/* Brilliant 3D-Look Letterforms */}
      <div className="flex flex-col">
        <div className="relative flex items-center overflow-hidden py-0.5">
          <span
            className={`font-display font-black tracking-tight bg-gradient-to-r from-slate-900 via-sky-700 to-cyan-600 bg-clip-text text-transparent group-hover:from-sky-700 group-hover:via-cyan-500 group-hover:to-blue-600 transition-all duration-300 drop-shadow-[0_2px_4px_rgba(2,132,199,0.2)] ${
              isSmall ? 'text-lg' : isLarge ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
            }`}
          >
            TALA<span className="text-cyan-500 font-extrabold ml-1 drop-shadow-[0_0_14px_rgba(6,182,212,0.7)]">TECH</span>
          </span>

          {/* Sweeping metallic starlight glint */}
          <motion.div
            animate={{
              x: ['-100%', '220%'],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 1.2,
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/95 to-transparent skew-x-12 pointer-events-none"
          />

          {/* Sparkle Glint */}
          <motion.span
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.45, 0.5],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
            className="absolute -top-1 -right-3 text-cyan-400 text-xs pointer-events-none drop-shadow-[0_0_12px_rgba(56,189,248,1)]"
            aria-hidden="true"
          >
            ✦
          </motion.span>
        </div>

        {showSubtitle && (
          <span className="text-[11px] font-bold tracking-wider uppercase text-sky-800 flex items-center gap-1 drop-shadow-2xs">
            <span>Star of Engineering</span>
            <span aria-hidden="true" className="text-cyan-400 font-bold">✦</span>
            <span className="text-cyan-700 font-extrabold">100% Remote Philippine Team</span>
          </span>
        )}
      </div>
    </div>
  );
}
