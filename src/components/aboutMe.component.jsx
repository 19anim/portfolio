import { motion as Motion } from "motion/react";
import MySelf from "../assets/Myself.JPG";
import SectionHeading from "./sectionHeading.component";
import { skills } from "./portfolio.data";
import { Reveal, RevealGroup } from "./motion/reveal.component";
import { revealItemVariants } from "./motion/reveal.variants";

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
            <Motion.span className="badge badge-outline badge-primary" variants={revealItemVariants} key={skill}>
              {skill}
            </Motion.span>
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
