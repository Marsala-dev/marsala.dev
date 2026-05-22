"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  size: number;
  color: string;
}

export function DynamicHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight, 800);
    };
    setCanvasSize();

    // Particle colors - moss and sage palette
    const colors = [
      "rgba(106, 138, 108, 0.6)", // moss-500
      "rgba(138, 165, 140, 0.5)", // moss-400
      "rgba(125, 142, 128, 0.4)", // sage-400
      "rgba(176, 195, 165, 0.3)", // moss-300
    ];

    // Create particles
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.5 + 0.3,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    // Initialize particles
    const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    let animationId: number;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.y -= particle.speed;
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }

        // Gentle horizontal drift
        particle.x += Math.sin(particle.y * 0.01) * 0.3;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      particlesRef.current = Array.from({ length: particleCount }, createParticle);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Enhanced Grid Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(106, 138, 108, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(106, 138, 108, 0.08) 1px, transparent 1px),
            radial-gradient(circle at 50% 20%, rgba(106, 138, 108, 0.15) 0%, rgba(138, 165, 140, 0.05) 40%, transparent 70%)
          `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />

      {/* Animated Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ mixBlendMode: "normal" }}
      />

      {/* Animated Accent Lines */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {/* Horizontal lines */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-moss-400/30 to-transparent"
          style={{ top: "25%" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage-400/25 to-transparent"
          style={{ top: "60%" }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Vertical lines */}
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-moss-300/20 to-transparent"
          style={{ left: "30%" }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage-300/15 to-transparent"
          style={{ right: "30%" }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(106, 138, 108, 0.4) 0%, transparent 70%)",
          top: "15%",
          left: "10%",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(125, 142, 128, 0.3) 0%, transparent 70%)",
          top: "40%",
          right: "15%",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );
}
