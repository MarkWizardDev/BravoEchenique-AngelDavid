import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import brilliantSkylineImg from '../assets/images/brilliant_starlight_skyline_1790642805373.jpg';

export default function BrilliantBackground() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.3 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Scroll parallax for upper hero region
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityFade = useTransform(scrollY, [0, 600, 1200], [0.65, 0.25, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 inset-x-0 h-[1000px] pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 1: High-Contrast Skyline Panorama only in upper hero region */}
      <motion.div
        style={{ y: backgroundY, opacity: opacityFade }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={brilliantSkylineImg}
          alt=""
          className="w-full h-full object-cover object-top filter saturate-130 brightness-95"
        />
        {/* Deep Contrast Vignette so text above is 100% sharp and readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FD]/70 via-[#EBF4FC]/85 to-[#F4F9FD]" />
      </motion.div>

      {/* Layer 2: Subtle Ambient Cursor Starlight Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-400/15 via-sky-400/10 to-transparent blur-[90px] transition-all duration-700 ease-out"
        style={{
          left: `calc(${mousePos.x * 100}% - 250px)`,
          top: `calc(${mousePos.y * 100}% - 250px)`,
        }}
      />
    </div>
  );
}
