# Premium Tech Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add polished premium-tech animations to the portfolio: cursor spotlight, hero opening sequence, scroll reveals, 3D project-card hover, and restrained button/badge micro-interactions.

**Architecture:** Keep animation behavior in focused components under `src/components/motion/` and keep existing page components responsible for content/layout. Use the already-installed `motion` package for scroll/entrance animation and React pointer events/CSS variables for cursor-following effects. CSS owns visual polish, responsive rules, and reduced-motion fallbacks.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, DaisyUI 5, `motion` 12, CSS custom properties, Git Bash with `rtk`-prefixed commands.

## Global Constraints

- Animation direction is **Premium tech**: subtle, precise motion on top of the existing dark developer-interface identity.
- Preserve dark canvas `#101010`, soft panels `#161616` and `#1a1a1a`, signature green `#00d992`, sharp zero-radius cards, mono labels, grid hero, and terminal card.
- Use the existing `motion` package already present in `package.json`.
- Do not add GSAP or another animation library unless implementation proves the current package cannot handle the desired effect cleanly.
- Reduced-motion users should receive static or near-static states.
- Disable cursor tracking effects on coarse pointer/touch devices.
- Use `transform` and `opacity` for entrance animations.
- Avoid expensive layout-changing animations.
- Keep keyboard focus visible.
- Decorative animated layers must use `pointer-events: none`.
- Avoid constant looping effects except the existing terminal cursor blink.
- Use `rtk` before every shell command, including chained commands.

---

## File Structure

Create:

- `src/components/motion/reveal.component.jsx` — reusable scroll reveal components and shared motion variants.
- `src/components/motion/spotlight.component.jsx` — global desktop cursor spotlight behind page content.
- `src/components/motion/tiltCard.component.jsx` — pointer-driven 3D tilt wrapper for project cards.

Modify:

- `src/App.jsx` — render the global `Spotlight` behind the main content.
- `src/components/landing.component.jsx` — apply the hero opening sequence with `motion` components.
- `src/components/sectionHeading.component.jsx` — wrap section headings in a reusable reveal.
- `src/components/aboutMe.component.jsx` — reveal about copy, skills, and portrait.
- `src/components/experience.component.jsx` — reveal/stagger experience rows.
- `src/components/projects.component.jsx` — use `TiltCard` for featured projects and reveal project grids.
- `src/components/contact.component.jsx` — reveal contact content and form.
- `src/App.css` — add spotlight, tilt-card, reveal support styles, micro-interactions, reduced-motion CSS, and responsive safeguards.
- `src/index.css` — add base page layering if needed.

Do not modify:

- `src/components/portfolio.data.js` — content does not change.
- `package.json` — no new dependency is expected.

---

### Task 1: Add Global Spotlight Layer

**Files:**
- Create: `src/components/motion/spotlight.component.jsx`
- Modify: `src/App.jsx`
- Modify: `src/App.css`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: no app-specific props.
- Produces: `Spotlight(): JSX.Element`, imported by `src/App.jsx`.

- [ ] **Step 1: Create the spotlight component**

Create `src/components/motion/spotlight.component.jsx` with this exact content:

```jsx
import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

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
    <motion.div
      aria-hidden="true"
      className={`site-spotlight ${enabled ? "is-active" : ""}`}
      style={enabled ? { background } : undefined}
    />
  );
};

export default Spotlight;
```

- [ ] **Step 2: Wire the spotlight into the app**

Replace `src/App.jsx` with this exact content:

```jsx
import "./App.css";
import Navbar from "./components/navbar.component";
import LandingPage from "./components/landing.component";
import AboutMe from "./components/aboutMe.component";
import Experience from "./components/experience.component";
import Projects from "./components/projects.component";
import Contact from "./components/contact.component";
import Spotlight from "./components/motion/spotlight.component";

function App() {
  return (
    <>
      <Spotlight />
      <Navbar />
      <main className="site-main">
        <LandingPage />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
```

- [ ] **Step 3: Add base layering styles**

In `src/index.css`, replace the `body` block with this exact block:

```css
body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  overflow-x: hidden;
  background: #101010;
}
```

In `src/App.css`, insert this block after the `:root` block:

```css
.site-spotlight {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 220ms ease;
}

.site-spotlight.is-active {
  opacity: 1;
}

.site-main {
  position: relative;
  z-index: 1;
}

.site-header {
  z-index: 50;
}
```

Then remove the existing `z-index: 50;` line from the older `.site-header` block if it is duplicated. The final `.site-header` should still have `z-index: 50` exactly once.

- [ ] **Step 4: Run lint/build verification**

Run:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run lint && rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build
```

Expected:

- ESLint exits successfully.
- Vite build exits successfully.
- DaisyUI may print the existing `Unknown at rule: @property` warning; that warning is acceptable if the build succeeds.

- [ ] **Step 5: Commit Task 1**

Run:

```bash
rtk git add src/App.jsx src/App.css src/index.css src/components/motion/spotlight.component.jsx && rtk git commit -m "Add portfolio cursor spotlight"
```

---

### Task 2: Add Reusable Scroll Reveal Components

**Files:**
- Create: `src/components/motion/reveal.component.jsx`
- Modify: `src/components/sectionHeading.component.jsx`
- Modify: `src/components/aboutMe.component.jsx`
- Modify: `src/components/experience.component.jsx`
- Modify: `src/components/contact.component.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: React children, optional `className`, optional `delay`, optional `as`, optional `stagger`, optional `viewport`.
- Produces:
  - `Reveal({ children, className, delay, as, viewport }): JSX.Element`
  - `RevealGroup({ children, className, as, stagger, viewport }): JSX.Element`
  - `revealItemVariants: object` for child stagger variants.

- [ ] **Step 1: Create reveal utilities**

Create `src/components/motion/reveal.component.jsx` with this exact content:

```jsx
import { motion, useReducedMotion } from "motion/react";

export const revealItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const getMotionComponent = (as) => motion[as] || motion.div;

export const Reveal = ({ as = "div", children, className = "", delay = 0, viewport = { once: true, amount: 0.24 } }) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = getMotionComponent(as);

  if (prefersReducedMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
};

export const RevealGroup = ({
  as = "div",
  children,
  className = "",
  stagger = 0.08,
  viewport = { once: true, amount: 0.18 },
}) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = getMotionComponent(as);

  if (prefersReducedMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  );
};
```

- [ ] **Step 2: Reveal section headings**

Replace `src/components/sectionHeading.component.jsx` with this exact content:

```jsx
import { Reveal } from "./motion/reveal.component";

const SectionHeading = ({ number, eyebrow, title, copy }) => (
  <Reveal className="section-heading">
    <p className="eyebrow">
      <span>{number}.</span> {eyebrow}
    </p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </Reveal>
);

export default SectionHeading;
```

- [ ] **Step 3: Add reveals to About section**

Replace `src/components/aboutMe.component.jsx` with this exact content:

```jsx
import MySelf from "../assets/Myself.JPG";
import SectionHeading from "./sectionHeading.component";
import { skills } from "./portfolio.data";
import { Reveal, RevealGroup, revealItemVariants } from "./motion/reveal.component";
import { motion } from "motion/react";

const AboutMe = () => (
  <section id="about" className="section section-soft">
    <div className="shell about-grid">
      <div>
        <SectionHeading number="01" eyebrow="ABOUT" title="An engineer who ships." />
        <Reveal className="about-copy" delay={0.08}>
          <p>
            I started in software quality, moved into frontend development, and now work as a
            software engineer. That path taught me to care equally about how a product feels and
            how reliably it works.
          </p>
          <p>
            I enjoy building polished interfaces, practical internal tools, and full-stack
            products that solve clear problems. For freelance work, I can take an idea from a
            first conversation to a deployed website.
          </p>
        </Reveal>
        <RevealGroup className="skills-list" stagger={0.035}>
          {skills.map((skill) => (
            <motion.span className="badge badge-outline badge-primary" variants={revealItemVariants} key={skill}>
              {skill}
            </motion.span>
          ))}
        </RevealGroup>
      </div>
      <Reveal className="portrait-frame" delay={0.12}>
        <div className="portrait-label">PROFILE_001</div>
        <img src={MySelf} alt="Nguyen Phi Tuan An" />
        <div className="portrait-meta">
          <span>SOFTWARE ENGINEER</span>
          <span>AVAILABLE</span>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutMe;
```

- [ ] **Step 4: Add reveals to Experience rows**

Replace `src/components/experience.component.jsx` with this exact content:

```jsx
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading.component";
import { experience } from "./portfolio.data";
import { RevealGroup, revealItemVariants } from "./motion/reveal.component";

const Experience = () => (
  <section id="experience" className="section">
    <div className="shell">
      <SectionHeading
        number="02"
        eyebrow="EXPERIENCE"
        title="Built through real product work."
        copy="A background spanning software quality, frontend development, and product-focused engineering."
      />
      <RevealGroup className="experience-list" stagger={0.07}>
        {experience.map((item) => (
          <motion.article className="experience-row" variants={revealItemVariants} key={item.company}>
            <p className="experience-period">{item.period}</p>
            <div>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
            </div>
            <div>
              <p className="experience-description">{item.description}</p>
              <div className="tag-list">
                {item.tools.map((tool) => (
                  <span className="badge badge-outline" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default Experience;
```

- [ ] **Step 5: Add reveals to Contact content**

Replace `src/components/contact.component.jsx` with this exact content:

```jsx
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./sectionHeading.component";
import { Reveal } from "./motion/reveal.component";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState("sending");
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: "nptatdt@gmail.com",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-grid">
        <div>
          <SectionHeading number="04" eyebrow="CONTACT" title="Let's build something useful." />
          <Reveal as="p" className="section-copy" delay={0.08}>
            I&apos;m open to software engineering roles and freelance web projects. Tell me what
            you&apos;re working on, and I&apos;ll reply within 24-48 hours.
          </Reveal>
          <Reveal className="contact-links" delay={0.14}>
            <a href="mailto:nptatdt@gmail.com"><span>EMAIL</span>nptatdt@gmail.com</a>
            <a href="https://www.linkedin.com/in/19anim/" target="_blank" rel="noreferrer">
              <span>LINKEDIN</span>linkedin.com/in/19anim ↗
            </a>
            <a href="https://github.com/19anim" target="_blank" rel="noreferrer">
              <span>GITHUB</span>github.com/19anim ↗
            </a>
          </Reveal>
        </div>

        <Reveal as="form" className="card contact-form" delay={0.1}>
          <div className="form-row">
            <label>NAME<input className="input" name="name" value={form.name} onChange={updateForm} required placeholder="Your name" /></label>
            <label>EMAIL<input className="input" name="email" type="email" value={form.email} onChange={updateForm} required placeholder="you@company.com" /></label>
          </div>
          <label>SUBJECT<input className="input" name="subject" value={form.subject} onChange={updateForm} required placeholder="Role, project, or idea" /></label>
          <label>MESSAGE<textarea className="textarea" name="message" value={form.message} onChange={updateForm} required rows="5" placeholder="A few details about what you need..." /></label>
          <button className="btn btn-success submit-button" disabled={state === "sending"} onClick={handleSubmit}>
            {state === "sending" ? "Sending..." : "Send message"}
          </button>
          {state === "sent" && <p className="form-status success">Message sent. I&apos;ll be in touch soon.</p>}
          {state === "error" && <p className="form-status error">Message failed to send. Please email me directly.</p>}
        </Reveal>
      </div>
      <Reveal as="footer" className="shell footer">
        <span>© 2026 Nguyen Phi Tuan An</span>
        <span>BUILT WITH REACT // DESIGNED TO SHIP</span>
      </Reveal>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 6: Restore form submit semantics**

In `src/components/contact.component.jsx`, change the opening form reveal from:

```jsx
<Reveal as="form" className="card contact-form" delay={0.1}>
```

to:

```jsx
<Reveal as="form" className="card contact-form" delay={0.1} onSubmit={handleSubmit}>
```

Then update `Reveal` in `src/components/motion/reveal.component.jsx` to accept and forward extra props. Replace the `Reveal` function signature and both returned `MotionTag` usages with this exact version:

```jsx
export const Reveal = ({
  as = "div",
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.24 },
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = getMotionComponent(as);

  if (prefersReducedMotion) {
    return <MotionTag className={className} {...props}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};
```

Remove `onClick={handleSubmit}` from the submit button so the button returns to normal submit behavior:

```jsx
<button className="btn btn-success submit-button" disabled={state === "sending"}>
  {state === "sending" ? "Sending..." : "Send message"}
</button>
```

- [ ] **Step 7: Run lint/build verification**

Run:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run lint && rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build
```

Expected:

- ESLint exits successfully.
- Vite build exits successfully.

- [ ] **Step 8: Commit Task 2**

Run:

```bash
rtk git add src/App.css src/components/motion/reveal.component.jsx src/components/sectionHeading.component.jsx src/components/aboutMe.component.jsx src/components/experience.component.jsx src/components/contact.component.jsx && rtk git commit -m "Add scroll reveal motion"
```

---

### Task 3: Animate Hero Opening Sequence

**Files:**
- Modify: `src/components/landing.component.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: `motion` and existing `scrollTo` behavior.
- Produces: staged hero animation with existing DOM semantics and classes.

- [ ] **Step 1: Replace landing component with staged motion**

Replace `src/components/landing.component.jsx` with this exact content:

```jsx
import { motion, useReducedMotion } from "motion/react";

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
    <motion.div className={className} custom={delay} initial="hidden" animate="visible" variants={enterUp}>
      {children}
    </motion.div>
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

        <motion.div
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
        </motion.div>
      </div>
      <motion.div
        className="hero-footer shell"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.54, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>SCROLL TO EXPLORE</p>
        <div></div>
        <p>HO CHI MINH CITY, VN</p>
      </motion.div>
    </section>
  );
};

export default LandingPage;
```

- [ ] **Step 2: Add hero polish CSS**

In `src/App.css`, add this block after `.hero-actions`:

```css
.motion-button span,
.text-link span {
  display: inline-block;
  transition: transform 180ms ease;
}

.motion-button:hover span,
.text-link:hover span {
  transform: translate(3px, -3px);
}

.btn-primary.motion-button {
  box-shadow: 0 0 0 rgba(0, 217, 146, 0);
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

.btn-primary.motion-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(0, 217, 146, 0.16);
}

.btn-ghost.motion-button {
  transition: transform 180ms ease, color 180ms ease, background-color 180ms ease;
}

.btn-ghost.motion-button:hover {
  transform: translateY(-2px);
}
```

- [ ] **Step 3: Run lint/build verification**

Run:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run lint && rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build
```

Expected:

- ESLint exits successfully.
- Vite build exits successfully.

- [ ] **Step 4: Commit Task 3**

Run:

```bash
rtk git add src/components/landing.component.jsx src/App.css && rtk git commit -m "Animate portfolio hero opening"
```

---

### Task 4: Add Project Card 3D Tilt

**Files:**
- Create: `src/components/motion/tiltCard.component.jsx`
- Modify: `src/components/projects.component.jsx`
- Modify: `src/App.css`

**Interfaces:**
- Consumes: `children`, optional `className`.
- Produces: `TiltCard({ children, className }): JSX.Element` wrapping a semantic `motion.article`.

- [ ] **Step 1: Create tilt card component**

Create `src/components/motion/tiltCard.component.jsx` with this exact content:

```jsx
import { useEffect, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

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
    <motion.article
      className={`card project-card tilt-card ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={enabled ? { rotateX: smoothRotateX, rotateY: smoothRotateY } : undefined}
    >
      <motion.span aria-hidden="true" className="tilt-card-glow" style={enabled ? { background: glow } : undefined} />
      {children}
    </motion.article>
  );
};

export default TiltCard;
```

- [ ] **Step 2: Use TiltCard for featured project cards and reveal grids**

Replace `src/components/projects.component.jsx` with this exact content:

```jsx
import { motion } from "motion/react";
import SectionHeading from "./sectionHeading.component";
import { otherProjects, projects } from "./portfolio.data";
import { Reveal, RevealGroup, revealItemVariants } from "./motion/reveal.component";
import TiltCard from "./motion/tiltCard.component";

const ProjectImage = ({ project }) => (
  <a href={project.href} target="_blank" rel="noreferrer" className="project-image">
    {project.image ? (
      <img src={project.image} alt={`${project.title} preview`} />
    ) : (
      <div className="project-image-fallback" aria-hidden="true">
        <span>{project.title}</span>
      </div>
    )}
    <span>OPEN LIVE SITE ↗</span>
  </a>
);

const ProjectDetails = ({ project, linkLabel = "View live project" }) => (
  <div className="card-body project-content">
    <p className="project-type">
      <span>{project.number}.</span> {project.type}
    </p>
    <h3 className="card-title">{project.title}</h3>
    <p>{project.description}</p>
    <div className="tag-list">
      {project.tools.map((tool) => (
        <span className="badge badge-outline" key={tool}>{tool}</span>
      ))}
    </div>
    <div className="card-actions">
      <a className="btn btn-link text-link" href={project.href} target="_blank" rel="noreferrer">
        {linkLabel} <span>↗</span>
      </a>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="section section-soft">
    <div className="shell">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Products, not just pages."
        copy="A few projects that show how I approach full-stack delivery, user experience, and practical problem solving."
      />

      <RevealGroup className="projects-grid" stagger={0.08}>
        {projects.map((project) => (
          <motion.div className="project-card-shell" variants={revealItemVariants} key={project.number}>
            <TiltCard>
              <ProjectImage project={project} />
              <ProjectDetails project={project} />
            </TiltCard>
          </motion.div>
        ))}
      </RevealGroup>

      {otherProjects.length > 0 && (
        <Reveal className="other-projects">
          <div className="other-projects-heading">
            <p>MORE WORK</p>
            <h3>Other Projects</h3>
          </div>
          <RevealGroup className="other-projects-grid" stagger={0.06}>
            {otherProjects.map((project) => (
              <motion.article className="card project-card other-project-card" variants={revealItemVariants} key={project.number}>
                <ProjectDetails project={project} linkLabel="Open project" />
              </motion.article>
            ))}
          </RevealGroup>
        </Reveal>
      )}
    </div>
  </section>
);

export default Projects;
```

- [ ] **Step 3: Add tilt card CSS**

In `src/App.css`, replace the existing `.project-card` and `.project-card:hover` blocks with this exact content:

```css
.project-card-shell {
  perspective: 1100px;
}

.project-card {
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0;
  border: 1px solid var(--line);
  background: var(--canvas);
  transform-style: preserve-3d;
  transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
}

.project-card:hover {
  border-color: rgba(0, 217, 146, 0.7);
  transform: translateY(-5px);
  box-shadow: 0 22px 48px rgba(0, 0, 0, 0.26);
}

.tilt-card {
  will-change: transform;
}

.tilt-card-glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 180ms ease;
}

.tilt-card:hover .tilt-card-glow {
  opacity: 1;
}

.tilt-card > :not(.tilt-card-glow) {
  position: relative;
  z-index: 1;
}
```

- [ ] **Step 4: Preserve tablet layout after wrapper addition**

In the `@media (max-width: 920px)` block in `src/App.css`, replace:

```css
.project-card {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) 1.1fr;
}
```

with:

```css
.project-card {
  display: grid;
  grid-template-columns: minmax(260px, 0.9fr) 1.1fr;
}

.project-card-shell .project-card {
  min-height: 100%;
}
```

The added block ensures the new wrapper does not shrink featured cards.

- [ ] **Step 5: Run lint/build verification**

Run:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run lint && rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build
```

Expected:

- ESLint exits successfully.
- Vite build exits successfully.

- [ ] **Step 6: Commit Task 4**

Run:

```bash
rtk git add src/App.css src/components/projects.component.jsx src/components/motion/tiltCard.component.jsx && rtk git commit -m "Add 3D hover project cards"
```

---

### Task 5: Add Final Micro-Interactions and Reduced-Motion CSS

**Files:**
- Modify: `src/App.css`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: class names already present across components.
- Produces: CSS-only hover/focus/reduced-motion behavior.

- [ ] **Step 1: Add badge, link, and focus micro-interactions**

In `src/App.css`, add this block after the `.skills-list .badge, .tag-list .badge` block:

```css
.skills-list .badge,
.tag-list .badge {
  transition: border-color 180ms ease, color 180ms ease, background-color 180ms ease, transform 180ms ease;
}

.skills-list .badge:hover,
.tag-list .badge:hover {
  border-color: rgba(0, 217, 146, 0.82);
  color: var(--green);
  background: rgba(0, 217, 146, 0.06);
  transform: translateY(-2px);
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid rgba(0, 217, 146, 0.86);
  outline-offset: 3px;
}
```

- [ ] **Step 2: Add contact/form hover polish**

In `src/App.css`, replace the existing `.contact-links a` and `.contact-links a:hover` blocks with this exact content:

```css
.contact-links a {
  display: grid;
  gap: 4px;
  color: var(--ink);
  text-decoration: none;
  transition: color 180ms ease, transform 180ms ease;
}

.contact-links a:hover {
  color: var(--green);
  transform: translateX(4px);
}
```

Replace the existing `.contact-form input, .contact-form textarea` transition line:

```css
transition: border-color 180ms ease;
```

with:

```css
transition: border-color 180ms ease, box-shadow 180ms ease;
```

Replace the existing `.contact-form input:focus, .contact-form textarea:focus` block with:

```css
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(0, 217, 146, 0.08);
}
```

- [ ] **Step 3: Add reduced-motion CSS fallback**

At the end of `src/App.css`, add this block:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }

  .site-spotlight,
  .tilt-card-glow {
    display: none;
  }

  .project-card,
  .btn-primary.motion-button,
  .btn-ghost.motion-button,
  .skills-list .badge,
  .tag-list .badge,
  .contact-links a {
    transform: none !important;
  }
}

@media (hover: none), (pointer: coarse) {
  .site-spotlight,
  .tilt-card-glow {
    display: none;
  }

  .tilt-card {
    transform: none !important;
  }
}
```

- [ ] **Step 4: Run lint/build verification**

Run:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run lint && rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build
```

Expected:

- ESLint exits successfully.
- Vite build exits successfully.

- [ ] **Step 5: Commit Task 5**

Run:

```bash
rtk git add src/App.css src/index.css && rtk git commit -m "Polish portfolio motion interactions"
```

---

### Task 6: Browser Verification and Final Cleanup

**Files:**
- Modify only if verification finds a concrete issue in files changed by Tasks 1-5.

**Interfaces:**
- Consumes: completed animation implementation.
- Produces: verified portfolio animation behavior and final clean git state.

- [ ] **Step 1: Start the dev server**

Run the Vite dev server in the background:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run dev -- --host 127.0.0.1
```

Expected:

- Vite prints a local URL, usually `http://127.0.0.1:5173/`.
- If port `5173` is busy, use the URL printed by Vite.

- [ ] **Step 2: Open desktop viewport and inspect hero**

Use Playwright or a browser at the Vite URL.

Check:

- Hero content appears immediately and finishes its opening motion in about one second.
- Terminal card enters after the headline/copy.
- No blocking loader appears.
- Header remains fixed above content.
- Cursor spotlight follows mouse on desktop and stays behind content.

- [ ] **Step 3: Inspect project card hover**

On desktop, move the cursor across each featured project card.

Check:

- Card tilts subtly; it does not rotate more than roughly 6-8 degrees visually.
- Card border brightens green.
- Screenshot becomes less grayscale and scales slightly.
- Local green glow follows cursor inside the card.
- No card causes surrounding layout shift.

- [ ] **Step 4: Inspect scroll reveals**

Scroll from hero to contact.

Check:

- About, Experience, Projects, Other Projects, and Contact content reveal once.
- Reveals use short vertical movement only.
- Paragraphs do not animate one line at a time.

- [ ] **Step 5: Inspect mobile layout**

Resize viewport to `390x844`.

Check:

- No horizontal overflow.
- Project cards stack correctly.
- Cursor spotlight and tilt glow are not visible on touch/coarse-pointer styling.
- Buttons and links remain easy to tap.

- [ ] **Step 6: Inspect reduced-motion fallback**

In browser dev tools, emulate `prefers-reduced-motion: reduce`.

Check:

- Cursor spotlight is hidden.
- Tilt glow is hidden.
- Entrance animations are removed or heavily reduced.
- Content remains visible.

- [ ] **Step 7: Run final lint/build**

Run:

```bash
rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run lint && rtk node "/c/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build
```

Expected:

- ESLint exits successfully.
- Vite build exits successfully.

- [ ] **Step 8: Commit verification fixes if any were needed**

If Step 2-7 required code changes, commit them:

```bash
rtk git add src/App.css src/index.css src/App.jsx src/components && rtk git commit -m "Fix portfolio motion verification issues"
```

If no code changes were needed, do not create an empty commit.

- [ ] **Step 9: Report final state**

Run:

```bash
rtk git status --short --branch
```

Expected:

- Working tree is clean.
- Branch is ahead of `origin/main` by the spec commit plus animation implementation commits until the user asks to push.

---

## Self-Review Notes

Spec coverage:

- Global cursor spotlight: Task 1.
- Hero page opening: Task 3.
- Scroll reveals for About, Experience, Projects, Other Projects, Contact: Tasks 2 and 4.
- Project card 3D hover: Task 4.
- Buttons and badge micro-interactions: Tasks 3 and 5.
- Accessibility/performance/reduced-motion/coarse pointer: Tasks 1, 2, 4, 5, and 6.
- Responsive/mobile verification: Task 6.
- No new animation library unless required: file structure and Global Constraints keep `package.json` unchanged.

Placeholder scan:

- No `TBD`, `TODO`, `FIXME`, or unspecified implementation steps are intentionally present.

Type/interface consistency:

- `Spotlight` is a default export and imported as `Spotlight` in `App.jsx`.
- `Reveal`, `RevealGroup`, and `revealItemVariants` are named exports from `reveal.component.jsx`.
- `TiltCard` is a default export and imported as `TiltCard` in `projects.component.jsx`.
