import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Laptop, Wifi, Sparkles, Globe, Orbit } from 'lucide-react';
import BrilliantLogo from './BrilliantLogo';
import TiltCard3D from './TiltCard3D';
import ThreeHoloGlobe from './3d/ThreeHoloGlobe';
import ThreeCrystalStar from './3d/ThreeCrystalStar';
import brilliantSkylineImg from '../assets/images/brilliant_starlight_skyline_1790642805373.jpg';
import cyberGlobe3DImg from '../assets/images/cyber_philippines_3d_sphere_1790626834705.jpg';

export default function Hero() {
  const [viewMode, setViewMode] = useState<'3d' | 'render'>('3d');

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 bg-gradient-to-b from-[#F2F8FD] via-[#EBF4FC] to-[#F4F9FD]">
      {/* Deep Contrast Skyline Background in Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src={brilliantSkylineImg}
          alt="Philippine technological skyline representing Tala Tech software engineering hub in Manila"
          className="w-full h-full object-cover object-top filter saturate-130 brightness-95"
          style={{ opacity: 0.35 }}
          referrerPolicy="no-referrer"
        />
        {/* Contrast Overlay ensuring all text has WCAG AAA level contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F2F8FD]/85 via-[#EBF4FC]/92 to-[#F4F9FD]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content - Deep Contrast Modern Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Remote Team & National Symbol Kicker */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-extrabold text-slate-800 tracking-wider uppercase">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-sky-300 text-sky-950 shadow-sm animate-float-gentle">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
                </span>
                <Wifi className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                <span className="font-black tracking-wide">100% Fully Remote Team</span>
              </span>
              <span aria-hidden="true" className="text-slate-400 font-bold">·</span>
              <span className="text-slate-900 font-black flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Tala (Bright Star)</span>
              </span>
              <span aria-hidden="true" className="text-slate-400 font-bold">·</span>
              <span className="text-slate-900 font-bold">Philippines</span>
            </div>

            {/* Headline with High Contrast Black Text & Vibrant Cyan Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08] font-display" style={{ textWrap: 'balance' }}>
              Expanding Philippine Software Engineering to the{' '}
              <span className="relative inline-block text-sky-600">
                Global Market
                <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-cyan-400/60 rounded-full" />
              </span>
            </h1>

            {/* Subheading with Deep Slate Readability */}
            <p className="text-lg text-slate-800 max-w-2xl leading-relaxed font-medium">
              We are <strong className="text-slate-950 font-bold">Tala Tech</strong>—a high-performing, <strong className="text-slate-950 font-bold">100% remote software development team</strong> based in the Philippines. Operating through asynchronous agility and distributed workstations for over six years, we are now expanding our reach worldwide through our transparent <strong className="text-slate-950 font-bold">Profit Distribution</strong> model.
            </p>

            {/* Trust Highlights Row with Modern Crisp Borders & High Contrast */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-2 border-slate-200 py-4 max-w-xl bg-white rounded-2xl px-5 shadow-sm">
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-slate-950 tabular-nums font-mono flex items-baseline gap-1">
                  <span>6+</span>
                  <span className="text-xs text-sky-600 font-black uppercase">Years</span>
                </div>
                <div className="text-xs text-slate-700 font-bold">Remote Excellence</div>
              </div>
              <div className="space-y-0.5 border-x-2 border-slate-200 px-3">
                <div className="text-2xl sm:text-3xl font-black text-slate-950 tabular-nums font-mono flex items-baseline gap-1">
                  <span>Fixed</span>
                  <span className="text-xs text-sky-600 font-black">%</span>
                </div>
                <div className="text-xs text-slate-700 font-bold">Profit Distribution</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-slate-950 tabular-nums font-mono flex items-baseline gap-1">
                  <span>0</span>
                  <span className="text-xs text-emerald-600 font-black">Code</span>
                </div>
                <div className="text-xs text-slate-700 font-bold">Required by You</div>
              </div>
            </div>

            {/* CTAs with Modern High Contrast Styling */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#profit"
                className="relative group inline-flex items-center gap-2 px-8 py-4 text-sm font-black text-white bg-slate-950 hover:bg-slate-900 rounded-xl shadow-lg shadow-slate-950/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-700 whitespace-nowrap"
              >
                <span>Calculate Profit Share</span>
                <TrendingUp className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#roles"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-black text-slate-900 bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-sky-500 rounded-xl shadow-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-sky-500 whitespace-nowrap"
              >
                <span>View Team Roles</span>
                <ArrowRight className="w-4 h-4 text-sky-600" aria-hidden="true" />
              </motion.a>
            </div>

            {/* Safe Collaboration Commitment Note */}
            <p className="text-xs text-slate-700 flex items-center gap-2 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" aria-hidden="true" />
              <span>Full privacy respect, verified bank documentation, and optional VMware VM sandbox support.</span>
            </p>
          </motion.div>

          {/* Hero Visual Card - 3D Tilt Card with Real Interactive Three.js 3D Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <TiltCard3D intensity={10} glare={true}>
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border-2 border-slate-200 hover:border-sky-400 transition-colors">
                
                {/* Brilliant Logo Spotlight & 3D Crystal Star */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <BrilliantLogo size="lg" showSubtitle={true} />
                  <div className="hidden sm:block shrink-0">
                    <ThreeCrystalStar size={64} className="w-16 h-16" />
                  </div>
                </div>

                {/* 3D Holographic Global Network Canvas Container */}
                <div className="mt-5 relative rounded-2xl overflow-hidden border-2 border-slate-800 bg-slate-950 shadow-inner group">
                  {/* Mode switcher tabs */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 p-1 bg-slate-900/90 rounded-lg border border-slate-700">
                    <button
                      onClick={() => setViewMode('3d')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                        viewMode === '3d' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Real 3D
                    </button>
                    <button
                      onClick={() => setViewMode('render')}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono transition-colors ${
                        viewMode === 'render' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      HD Sphere
                    </button>
                  </div>

                  {viewMode === '3d' ? (
                    <ThreeHoloGlobe className="w-full h-52 sm:h-56" />
                  ) : (
                    <div className="relative w-full h-52 sm:h-56 overflow-hidden">
                      <img
                        src={cyberGlobe3DImg}
                        alt="3D Holographic Globe connecting Philippines to Global Enterprise Markets"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex items-end justify-between p-3.5">
                        <div className="text-xs font-bold text-white">Manila Node ➔ Global Enterprise Pipeline</div>
                      </div>
                    </div>
                  )}

                  {/* Node Status Bar */}
                  <div className="px-3.5 py-2 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold">
                      <Orbit className="w-3.5 h-3.5" />
                      <span>Manila Hub [14.6°N, 121°E]</span>
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Active 24/7
                    </span>
                  </div>
                </div>

                {/* Company Core Proposition with Deep Contrast */}
                <div className="mt-4 space-y-3.5">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-xs font-black text-slate-950">
                      <span className="flex items-center gap-1.5">
                        <Laptop className="w-4 h-4 text-sky-600" />
                        Distributed Infrastructure
                      </span>
                      <span className="text-sky-700 font-black">100% Remote Operation</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">
                      Our all-remote Philippine engineering team operates via agile cloud workstations, delivering high-speed pull requests and client software internationally.
                    </p>
                  </div>

                  {/* Quick Role Division Badge with Solid High Contrast */}
                  <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                    <div className="p-3 rounded-xl bg-sky-50 border-2 border-sky-200">
                      <div className="text-[11px] font-black text-sky-950 uppercase tracking-wide">Tala Tech</div>
                      <div className="text-xs text-sky-900 font-black mt-0.5">100% Technical Work</div>
                      <div className="text-[10px] text-sky-700 font-bold">Full-stack, QA, remote delivery</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 border-2 border-emerald-200">
                      <div className="text-[11px] font-black text-emerald-950 uppercase tracking-wide">Your Role</div>
                      <div className="text-xs text-emerald-900 font-black mt-0.5">Non-Technical</div>
                      <div className="text-[10px] text-emerald-700 font-bold">Account & fund distribution</div>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard3D>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
