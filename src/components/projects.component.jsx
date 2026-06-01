import SectionHeading from "./sectionHeading.component";
import { projects } from "./portfolio.data";

const Projects = () => (
  <section id="projects" className="section section-soft">
    <div className="shell">
      <SectionHeading
        number="03"
        eyebrow="SELECTED WORK"
        title="Products, not just pages."
        copy="A few projects that show how I approach full-stack delivery, user experience, and practical problem solving."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.number}>
            <a href={project.href} target="_blank" rel="noreferrer" className="project-image">
              <img src={project.image} alt={`${project.title} preview`} />
              <span>OPEN LIVE SITE ↗</span>
            </a>
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
                  View live project <span>↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
