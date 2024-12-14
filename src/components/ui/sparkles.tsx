import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

// Define the type for the particle
interface Particle {
  id: number;
  size: number;
}

interface SparkleProps {
  background?: string;
  particleColor?: string;
  className?: string;
  minSize?: number;        // Minimum size of the particles
  maxSize?: number;        // Maximum size of the particles
  particleDensity?: number; // Number of particles (density)
}

export const SparklesCore = ({
  background = "transparent",
  particleColor = "#FFFFFF",
  className,
  minSize = 0.5,
  maxSize = 1,
  particleDensity = 100, // Default number of particles
}: SparkleProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const createParticles = useCallback(() => {
    // Create an array of particles based on the density
    const newParticles = [];
    for (let i = 0; i < particleDensity; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize; // Random size between minSize and maxSize
      newParticles.push({ id: i, size });
    }
    setParticles(newParticles);
  }, [minSize, maxSize, particleDensity]);

  useEffect(() => {
    createParticles();
    return () => {
      // Clean up particles if necessary
    };
  }, [createParticles]);

  return (
    <div className={className} style={{ background }}>
      {/* Render particles here */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particleColor,
            borderRadius: "50%",
          }}
          className="particle"
        />
      ))}
    </div>
  );
};
