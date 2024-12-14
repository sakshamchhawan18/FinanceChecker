import React, { useState, useEffect, useCallback } from 'react'; // Removed useRef if not needed
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
}

export const SparklesCore = ({
  background = "transparent",
  particleColor = "#FFFFFF",
  className,
}: SparkleProps) => {
  const [particles, setParticles] = useState<Particle[]>([]); // Replace 'any' with a more specific type

  const createParticles = useCallback(() => {
    // Logic to create particles
    setParticles([{ id: 1, size: 10 }, { id: 2, size: 20 }]); // Example
  }, []);

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
