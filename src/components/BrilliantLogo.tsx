import { motion } from 'motion/react';
import crystalStar3DImg from '../assets/images/crystal_star_3d_render_1790626825044.jpg';

interface BrilliantLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  theme?: 'light' | 'dark' | 'auto';
}

export default function BrilliantLogo({
  size = 'md',
  showSubtitle = false,
  theme = 'light',
}: BrilliantLogoProps) {
  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  return (
    <div className="flex items-center gap-3.5 select-none group cursor-pointer">
      {/* The Beloved 3D Floating Crystal Starlight Cube Emblem */}
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

        {/* Inner Counter-Rotating Gyro Ring 2 (Counter-Clockwise) */}
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
            alt="NexaTech 3D Crystal Star Cube"
            className="w-full h-full object-cover filter brightness-120 contrast-125 saturate-110"
            referrerPolicy="no-referrer"
          />
          {/* Glass specular sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
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

      {/* Pure, Brilliant Typography - Razor-Sharp, No Rectangular Overlay Glitch */}
      <div className="flex flex-col">
        <div className="relative flex items-center leading-none">
          <div
            className={`font-display font-black tracking-tight flex items-baseline transition-transform duration-200 group-hover:scale-[1.01] ${
              isSmall ? 'text-lg' : isLarge ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'
            }`}
          >
            {/* NEXA */}
            <span
              className={`bg-clip-text text-transparent font-black tracking-tight ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-white via-slate-100 to-slate-200 drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]'
                  : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 drop-shadow-xs'
              }`}
            >
              NEXA
            </span>

            {/* TECH - Luminous Electric Cyan Accent */}
            <span className="ml-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent font-black drop-shadow-[0_0_14px_rgba(6,182,212,0.45)]">
              TECH
            </span>

            {/* Clean Micro Starlight Sparkle */}
            <span className="text-[10px] text-cyan-400 font-bold ml-1 self-start transform -translate-y-0.5 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all">
              ✦
            </span>
          </div>
        </div>

        {/* Subtitle if enabled */}
        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] font-black tracking-widest uppercase text-sky-700">
              Star of Engineering
            </span>
            <span className="text-[9px] text-cyan-500" aria-hidden="true">
              ·
            </span>
            <span className="text-[10px] font-bold text-slate-600">
              Philippines
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
