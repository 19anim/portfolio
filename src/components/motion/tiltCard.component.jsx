import { useEffect, useState } from "react";
import { motion as Motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

const canUseTilt = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

const TiltCard = ({ children, className = "" }) => {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const smoothRotateX = useSpring(rotateX, { stiffness: 180, damping: 22 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 180, damping: 22 });
  const glow = useMotionTemplate`radial-gradient(280px circle at ${glowX}% ${glowY}%, rgba(0, 217, 146, 0.18), transparent 62%)`;

  useEffect(() => {
    setEnabled(!prefersReducedMotion && canUseTilt());
  }, [prefersReducedMotion]);

  const handlePointerMove = (event) => {
    if (!enabled) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const percentX = x / rect.width;
    const percentY = y / rect.height;

    rotateX.set((0.5 - percentY) * 12);
    rotateY.set((percentX - 0.5) * 14);
    glowX.set(percentX * 100);
    glowY.set(percentY * 100);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <Motion.article
      className={`card project-card tilt-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={enabled ? { rotateX: smoothRotateX, rotateY: smoothRotateY } : undefined}
    >
      <Motion.span aria-hidden="true" className="tilt-card-glow" style={enabled ? { background: glow } : undefined} />
      {children}
    </Motion.article>
  );
};

export default TiltCard;
