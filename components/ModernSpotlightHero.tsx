"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function ModernSpotlightHero() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;

      spotlightRef.current.style.setProperty('--mouse-x', `${x}%`);
      spotlightRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dramatic Dark Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss-950 via-moss-900 to-moss-950" />

      {/* Perspective Grid */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(106, 138, 108, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(106, 138, 108, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'perspective(1000px) rotateX(60deg) scale(2)',
          transformOrigin: 'center top',
          opacity: 0.3,
        }}
      />

      {/* Central Spotlight Beam */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full"
        style={{
          background: `
            conic-gradient(
              from 180deg at 50% 0%,
              transparent 0deg,
              rgba(106, 138, 108, 0.15) 45deg,
              rgba(106, 138, 108, 0.3) 50deg,
              rgba(106, 138, 108, 0.15) 55deg,
              transparent 100deg
            )
          `,
          filter: 'blur(40px)',
        }}
      />

      {/* Multiple Spotlight Beams */}
      {[
        { rotation: -15, color: 'rgba(106, 138, 108, 0.12)', delay: 0 },
        { rotation: 15, color: 'rgba(125, 142, 128, 0.10)', delay: 0.3 },
        { rotation: 0, color: 'rgba(138, 165, 140, 0.15)', delay: 0.6 }
      ].map((beam, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, rotate: beam.rotation }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            rotate: [beam.rotation, beam.rotation + 5, beam.rotation]
          }}
          transition={{
            duration: 15,
            delay: beam.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full"
          style={{
            background: `
              conic-gradient(
                from 180deg at 50% 0%,
                transparent 0deg,
                ${beam.color} 48deg,
                ${beam.color.replace('0.', '0.2')} 50deg,
                ${beam.color} 52deg,
                transparent 100deg
              )
            `,
            filter: 'blur(60px)',
          }}
        />
      ))}

      {/* Interactive Glow following mouse */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(106, 138, 108, 0.15),
              transparent 40%
            )
          `,
        }}
      />

      {/* Floating Orbs with Glassmorphism */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] left-[15%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(106, 138, 108, 0.4) 0%, rgba(106, 138, 108, 0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[15%] right-[20%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(125, 142, 128, 0.3) 0%, rgba(125, 142, 128, 0.1) 50%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Dramatic Bottom Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px]"
        style={{
          background: `
            radial-gradient(
              ellipse 100% 100% at 50% 100%,
              rgba(106, 138, 108, 0.3) 0%,
              rgba(106, 138, 108, 0.15) 30%,
              transparent 70%
            )
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Accent Lines with Glow */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="absolute top-[30%] left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(106, 138, 108, 0.5) 20%, rgba(138, 165, 140, 0.6) 50%, rgba(106, 138, 108, 0.5) 80%, transparent)',
          boxShadow: '0 0 20px rgba(106, 138, 108, 0.5)',
        }}
      />

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-[30%] left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(125, 142, 128, 0.4) 30%, rgba(106, 138, 108, 0.5) 50%, rgba(125, 142, 128, 0.4) 70%, transparent)',
          boxShadow: '0 0 15px rgba(125, 142, 128, 0.4)',
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
