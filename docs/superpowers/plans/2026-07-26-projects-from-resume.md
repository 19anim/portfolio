# Projects From Resume Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the portfolio projects area from the resume so it shows three featured projects plus a responsive Other Projects subsection.

**Architecture:** Keep portfolio content centralized in `src/components/portfolio.data.js`. Keep rendering in `src/components/projects.component.jsx`, adding a reusable project-card fallback path for featured projects without images and a compact card layout for `otherProjects`. Keep styling in `src/App.css`, reusing the existing card, badge, grid, and responsive design language.

**Tech Stack:** React 19, Vite 7, JavaScript ES modules, Tailwind CSS/DaisyUI classes, project CSS in `src/App.css`.

## Global Constraints

- The featured project list contains exactly three projects: FCO Hub, Play And Share, JAGERTHEJAGER Shop.
- FCO Hub is first because the resume presents it as the flagship project and it is the newest, most complete full-stack product.
- The Other Projects area contains TAMT Wedding.
- `src/components/portfolio.data.js` exposes `projects` for featured project cards and `otherProjects` for compact secondary project cards.
- Each project entry includes `number`, `title`, `type`, `description`, `tools`, and `href`.
- Featured projects also include `image` when a screenshot asset exists.
- FCO Hub live URL is `https://fcodaphim.netlify.app/`.
- If no FCO Hub screenshot asset exists, use a graceful visual fallback rather than blocking the update.
- Other-project cards show project type and number, project title, short description, tool badges, and live project link.
- Other-project cards do not need the large preview image treatment used by featured projects.
- If `otherProjects` is empty in the future, do not render an empty Other Projects subsection.
- External links keep `target="_blank"` and `rel="noreferrer"`.
- Do not change resume PDF content.
- Do not add project navigation items.
- Do not create a carousel.
- Do not add repository links unless requested separately.
- Do not redesign unrelated portfolio sections.
- Prefix shell commands with `rtk`.

---

## File Structure

- Modify: `src/components/portfolio.data.js`
  - Responsibility: all portfolio content data.
  - Changes: add FCO Hub as featured project `01`, renumber Play And Share/JAGERTHEJAGER Shop, move TAMT Wedding into `otherProjects`.
- Modify: `src/components/projects.component.jsx`
  - Responsibility: render the projects section.
  - Changes: render featured projects with image fallback support; render Other Projects only when `otherProjects.length > 0`.
- Modify: `src/App.css`
  - Responsibility: global portfolio styling and responsive behavior.
  - Changes: add fallback preview styling and compact Other Projects styles; ensure tablet/mobile rules stack cleanly.

---

### Task 1: Update Project Data

**Files:**
- Modify: `src/components/portfolio.data.js:1-82`

**Interfaces:**
- Consumes: existing image imports `playAndShare`, `tamtWedding`, `jagerShop`.
- Produces: `projects: Array<{ number: string, title: string, type: string, image?: string, description: string, tools: string[], href: string }>`.
- Produces: `otherProjects: Array<{ number: string, title: string, type: string, description: string, tools: string[], href: string }>`.

- [ ] **Step 1: Replace the project data block**

Open `src/components/portfolio.data.js` and replace the current `export const projects = [...]` block with this exact code:

```js
export const projects = [
  {
    number: "01",
    title: "FCO Hub",
    type: "Full-stack FC Online companion platform",
    description:
      "A full-stack FC Online companion platform with advanced player search, squad building, upgrade simulation, live team-color evaluation, automated data pipelines, and admin monetization tools.",
    tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Playwright", "Cheerio", "Vitest"],
    href: "https://fcodaphim.netlify.app/",
  },
  {
    number: "02",
    title: "Play And Share",
    type: "Full-stack travel platform",
    image: playAndShare,
    description:
      "A social travel app for sharing destinations, creating trip timelines, collaborative trip planning, and splitting expenses with friends.",
    tools: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "Cloudinary"],
    href: "https://playandshare.netlify.app/",
  },
  {
    number: "03",
    title: "JAGERTHEJAGER Shop",
    type: "Full-stack e-commerce",
    image: jagerShop,
    description:
      "An online store with product browsing, accounts, cart and checkout flows, shipping estimates, plus an admin dashboard for products and orders.",
    tools: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    href: "https://jagerthejagershop.netlify.app/",
  },
];

export const otherProjects = [
  {
    number: "01",
    title: "TAMT Wedding",
    type: "Online wedding invitation",
    description:
      "A responsive wedding invitation with event details, schedules, location information, mobile-optimized animations, and RSVP management for guests.",
    tools: ["React", "Tailwind CSS", "Motion", "DaisyUI", "SheetDB"],
    href: "https://tamtwedding.netlify.app/",
  },
];
```

- [ ] **Step 2: Verify imports remain valid**

At the top of `src/components/portfolio.data.js`, keep these imports:

```js
import playAndShare from "../assets/playandshare.png";
import tamtWedding from "../assets/tamtwedding.png";
import jagerShop from "../assets/jagerthejagershop.png";
```

If `tamtWedding` becomes unused after moving TAMT Wedding to `otherProjects`, remove only that import so lint does not fail:

```js
import playAndShare from "../assets/playandshare.png";
import jagerShop from "../assets/jagerthejagershop.png";
```

- [ ] **Step 3: Run lint to check data syntax**

Run:

```bash
rtk npm run lint
```

Expected: either no errors, or only existing unrelated warnings. There should be no `no-unused-vars` error for `tamtWedding`.

- [ ] **Step 4: Commit data changes**

Run:

```bash
rtk git add src/components/portfolio.data.js
rtk git commit -m "Update portfolio project data from resume" -m "Co-Authored-By: Claude <noreply@anthropic.com>"
```

Expected: commit succeeds.

---

### Task 2: Render Featured and Other Projects

**Files:**
- Modify: `src/components/projects.component.jsx:1-43`

**Interfaces:**
- Consumes from Task 1: `projects` and `otherProjects` arrays from `./portfolio.data`.
- Produces: Projects section that renders three featured cards and conditionally renders Other Projects compact cards.

- [ ] **Step 1: Replace the component implementation**

Open `src/components/projects.component.jsx` and replace the whole file with this exact code:

```jsx
import SectionHeading from "./sectionHeading.component";
import { otherProjects, projects } from "./portfolio.data";

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

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="card project-card" key={project.number}>
            <ProjectImage project={project} />
            <ProjectDetails project={project} />
          </article>
        ))}
      </div>

      {otherProjects.length > 0 && (
        <div className="other-projects">
          <div className="other-projects-heading">
            <p>MORE WORK</p>
            <h3>Other Projects</h3>
          </div>
          <div className="other-projects-grid">
            {otherProjects.map((project) => (
              <article className="card project-card other-project-card" key={project.number}>
                <ProjectDetails project={project} linkLabel="Open project" />
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  </section>
);

export default Projects;
```

- [ ] **Step 2: Run lint to catch React issues**

Run:

```bash
rtk npm run lint
```

Expected: no component errors. There should be no missing import errors for `otherProjects`, `projects`, `ProjectImage`, or `ProjectDetails`.

- [ ] **Step 3: Commit render changes**

Run:

```bash
rtk git add src/components/projects.component.jsx
rtk git commit -m "Render other projects section" -m "Co-Authored-By: Claude <noreply@anthropic.com>"
```

Expected: commit succeeds.

---

### Task 3: Add Responsive Styling and Verify Build

**Files:**
- Modify: `src/App.css:379-432`
- Modify: `src/App.css:551-589`
- Modify: `src/App.css:667-674`

**Interfaces:**
- Consumes from Task 2: class names `project-image-fallback`, `other-projects`, `other-projects-heading`, `other-projects-grid`, and `other-project-card`.
- Produces: responsive visual behavior for featured fallback cards and Other Projects cards.

- [ ] **Step 1: Add fallback preview styling**

In `src/App.css`, immediately after the existing `.project-image img` rule, add:

```css
.project-image-fallback {
  display: grid;
  min-height: 210px;
  aspect-ratio: 1.65 / 1;
  place-items: center;
  padding: 28px;
  color: var(--green);
  background:
    linear-gradient(135deg, rgba(0, 217, 146, 0.16), transparent 52%),
    #151515;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: clamp(22px, 4vw, 38px);
  font-weight: 800;
  letter-spacing: -1.5px;
  text-align: center;
  text-transform: uppercase;
}
```

- [ ] **Step 2: Add Other Projects styling**

In `src/App.css`, immediately after the existing `.project-content > p` rule, add:

```css
.other-projects {
  margin-top: 56px;
}

.other-projects-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 18px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 14px;
}

.other-projects-heading p {
  margin: 0;
  color: var(--green);
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.6px;
}

.other-projects-heading h3 {
  margin: 0;
}

.other-projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.other-project-card .project-content {
  min-height: 100%;
}

.other-project-card .text-link {
  margin-top: 18px;
}
```

- [ ] **Step 3: Update tablet responsive rules**

In the `@media (max-width: 920px)` block, after the existing `.project-image img { height: 100%; }` rule, add:

```css
  .project-image-fallback {
    height: 100%;
    min-height: 260px;
  }

  .other-projects-grid {
    grid-template-columns: 1fr;
  }

  .other-project-card {
    display: flex;
  }
```

This keeps featured project cards in the existing split image/content layout on tablet, while compact other cards stay text-only.

- [ ] **Step 4: Update mobile responsive rules**

In the `@media (max-width: 700px)` block, after the existing `.project-image { border-right: 0; border-bottom: 1px solid var(--line); }` rule, add:

```css
  .project-image-fallback {
    min-height: 190px;
  }

  .other-projects {
    margin-top: 42px;
  }

  .other-projects-heading {
    display: grid;
    gap: 6px;
  }
```

- [ ] **Step 5: Run lint**

Run:

```bash
rtk npm run lint
```

Expected: no lint errors.

- [ ] **Step 6: Run production build**

Run:

```bash
rtk npm run build
```

Expected: build succeeds and outputs Vite build artifacts under `dist/`.

- [ ] **Step 7: Manually inspect responsive behavior**

Run the dev server:

```bash
rtk npm run dev
```

Open the local Vite URL in a browser and inspect the Projects section at these viewport widths:

- 1200px: three featured projects visible as cards; Other Projects appears below.
- 900px: featured cards use split image/content layout; Other Projects is single-column text card.
- 390px: all cards stack without horizontal overflow; buttons and tags are readable/tappable.

Expected content:

- Featured project 1: FCO Hub.
- Featured project 2: Play And Share.
- Featured project 3: JAGERTHEJAGER Shop.
- Other Projects: TAMT Wedding.

Stop the dev server after inspection.

- [ ] **Step 8: Commit styling and verification changes**

Run:

```bash
rtk git add src/App.css
rtk git commit -m "Style responsive other projects section" -m "Co-Authored-By: Claude <noreply@anthropic.com>"
```

Expected: commit succeeds.

---

## Self-Review

- Spec coverage: Task 1 implements centralized data, exactly three featured projects, FCO Hub first, Other Projects data, and resume-derived copy. Task 2 implements conditional Other Projects rendering, external link attributes, and missing image fallback rendering. Task 3 implements fallback styling, compact other cards, responsiveness, and verification.
- Placeholder scan: no placeholder steps are present; every code-changing step includes exact code.
- Type consistency: `projects` and `otherProjects` property names match between data, component imports, and CSS class consumers. `ProjectDetails` accepts `project` and optional `linkLabel`; `ProjectImage` accepts `project`.
