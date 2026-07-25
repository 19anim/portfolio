import { motion as Motion } from "motion/react";
import SectionHeading from "./sectionHeading.component";
import { experience } from "./portfolio.data";
import { RevealGroup } from "./motion/reveal.component";
import { revealItemVariants } from "./motion/reveal.variants";

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
          <Motion.article className="experience-row" variants={revealItemVariants} key={item.company}>
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
          </Motion.article>
        ))}
      </RevealGroup>
    </div>
  </section>
);

export default Experience;
