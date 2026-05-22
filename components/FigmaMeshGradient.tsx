"use client";

import { motion } from "framer-motion";

export function FigmaMeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white via-cream-50 to-moss-50">
      {/* Main Mesh Gradient Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(106, 138, 108, 0.4) 0%, rgba(176, 195, 165, 0.2) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(125, 142, 128, 0.5) 0%, rgba(163, 177, 165, 0.3) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(138, 165, 140, 0.6) 0%, rgba(106, 138, 108, 0.3) 40%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(125, 142, 128, 0.5) 0%, rgba(98, 116, 101, 0.3) 40%, transparent 70%)",
          filter: "blur(110px)",
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Accent Blobs - Smaller, more vibrant */}
      <motion.div
        className="absolute top-[20%] left-[60%] w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(176, 195, 165, 0.7) 0%, rgba(138, 165, 140, 0.4) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[30%] right-[15%] w-[350px] h-[350px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(163, 177, 165, 0.6) 0%, rgba(125, 142, 128, 0.3) 50%, transparent 70%)",
          filter: "blur(75px)",
        }}
        animate={{
          x: [0, -35, 0],
          y: [0, 45, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Subtle Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(244,246,244,0.6) 50%, rgba(232,237,232,0.4) 100%)",
        }}
      />

      {/* Noise Texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
