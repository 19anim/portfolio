import { useEffect, useState } from "react";
import { motion as Motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

const canUsePointerSpotlight = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
};

const Spotlight = () => {
  const prefersReducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 24, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 24, mass: 0.4 });
  const background = useMotionTemplate`radial-gradient(520px circle at ${smoothX}% ${smoothY}%, rgba(0, 217, 146, 0.13), rgba(0, 217, 146, 0.045) 34%, transparent 68%)`;

  useEffect(() => {
    if (prefersReducedMotion || !canUsePointerSpotlight()) {
      setEnabled(false);
      return undefined;
    }

    setEnabled(true);

    const handlePointerMove = (event) => {
      pointerX.set((event.clientX / window.innerWidth) * 100);
      pointerY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, prefersReducedMotion]);

  return (
    <Motion.div
      aria-hidden="true"
      className={`site-spotlight ${enabled ? "is-active" : ""}`}
      style={enabled ? { background } : undefined}
    />
  );
};

export default Spotlight;
