import { motion as Motion, useReducedMotion } from "motion/react";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const enterUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const terminalEnter = {
  hidden: { opacity: 0, x: 34, rotate: 0.6 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { duration: 0.72, delay: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
};

const MotionBlock = ({ children, className, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Motion.div className={className} custom={delay} initial="hidden" animate="visible" variants={enterUp}>
      {children}
    </Motion.div>
  );
};

const LandingPage = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="hero-section">
      <div className="hero-grid shell">
        <div className="hero-copy">
          <MotionBlock delay={0.04}>
            <p className="eyebrow">FULL-STACK WEB DEVELOPER</p>
          </MotionBlock>
          <MotionBlock delay={0.12}>
            <h1>
              I build useful
              <br />
              web products<span>.</span>
            </h1>
          </MotionBlock>
          <MotionBlock delay={0.2}>
            <p className="hero-intro">
              I&apos;m Nguyen Phi Tuan An, a software engineer based in Vietnam. I turn ideas into
              reliable, user-friendly web experiences for teams and clients.
            </p>
          </MotionBlock>
          <MotionBlock className="hero-actions" delay={0.28}>
            <button className="btn btn-primary motion-button" onClick={() => scrollTo("projects")}>
              View selected work <span>↗</span>
            </button>
            <button className="btn btn-ghost motion-button" onClick={() => scrollTo("contact")}>
              Let&apos;s talk
            </button>
          </MotionBlock>
          <MotionBlock className="availability" delay={0.36}>
            <span className="status-dot"></span>
            Open to software roles and freelance projects
          </MotionBlock>
        </div>

        <Motion.div
          className="mockup-code terminal-card"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={terminalEnter}
        >
          <pre data-prefix="01">
            <code>const developer = {"{"}</code>
          </pre>
          <pre data-prefix="02">
            <code>&nbsp;name: <em>&quot;Nguyen Phi Tuan An&quot;</em>,</code>
          </pre>
          <pre data-prefix="03">
            <code>&nbsp;experience: <em>&quot;5+ years&quot;</em>,</code>
          </pre>
          <pre data-prefix="04">
            <code>&nbsp;focus: [<em>&quot;web apps&quot;</em>, <em>&quot;UI&quot;</em>, <em>&quot;automation&quot;</em>],</code>
          </pre>
          <pre data-prefix="05">
            <code>&nbsp;availableFor: [<em>&quot;roles&quot;</em>, <em>&quot;freelance&quot;</em>],</code>
          </pre>
          <pre data-prefix="06">
            <code>{"}"};</code>
          </pre>
          <pre data-prefix="07" className="terminal-result">
            <code>developer.build(<em>&quot;your next idea&quot;</em>);<i></i></code>
          </pre>
        </Motion.div>
      </div>
      <Motion.div
        className="hero-footer shell"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>SCROLL TO EXPLORE</p>
        <div></div>
        <p>HO CHI MINH CITY, VN</p>
      </Motion.div>
    </section>
  );
};

export default LandingPage;
