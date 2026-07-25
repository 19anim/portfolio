import { motion as Motion } from "motion/react";
import SectionHeading from "./sectionHeading.component";
import { otherProjects, projects } from "./portfolio.data";
import { Reveal, RevealGroup } from "./motion/reveal.component";
import { revealItemVariants } from "./motion/reveal.variants";
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
          <Motion.div className="project-card-shell" variants={revealItemVariants} key={project.number}>
            <TiltCard>
              <ProjectImage project={project} />
              <ProjectDetails project={project} />
            </TiltCard>
          </Motion.div>
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
              <Motion.article className="card project-card other-project-card" variants={revealItemVariants} key={project.number}>
                <ProjectDetails project={project} linkLabel="Open project" />
              </Motion.article>
            ))}
          </RevealGroup>
        </Reveal>
      )}
    </div>
  </section>
);

export default Projects;
