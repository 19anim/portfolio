import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "motion/react";

const BOOT_LINES = [
  "> initializing portfolio…",
  "> loading modules [ ui · motion · projects ]",
  "> compiling experience…",
  "> ready.",
];

const prefersReducedMotionAtLoad = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const Preloader = () => {
  const prefersReducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(() => !prefersReducedMotionAtLoad());
  const [progress, setProgress] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || !loading) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const total = 1500;
    const start = performance.now();

    let raf = 0;
    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / total) * 100));
      setProgress(pct);
      setLine(Math.min(BOOT_LINES.length - 1, Math.floor((pct / 100) * BOOT_LINES.length)));
      if (elapsed < total) {
        raf = requestAnimationFrame(tick);
      } else {
        setLoading(false);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion, loading]);

  return (
    <AnimatePresence>
      {loading && (
        <Motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="preloader-inner">
            <p className="preloader-brand">
              NGUYEN PHI TUAN AN<span>_</span>
            </p>
            <div className="preloader-console" aria-hidden="true">
              {BOOT_LINES.slice(0, line + 1).map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="preloader-bar">
              <span style={{ width: `${progress}%` }} />
            </div>
            <p className="preloader-count">{String(progress).padStart(3, "0")}%</p>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
