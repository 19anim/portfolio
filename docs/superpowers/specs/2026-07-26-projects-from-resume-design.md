# Projects From Resume Design

## Goal

Update the portfolio projects area so it reflects the newer resume content while keeping the portfolio concise and responsive.

The page should keep three featured projects and introduce a smaller Other Projects area for secondary work.

## Source of Truth

The project content comes from `public/resume.pdf`, especially the project sections:

- FCO Hub — Full-Stack FC Online Companion Platform
- Play and Share — Full-Stack Social Travel Platform
- E-Commerce Shop — JagerTheJagerShop
- TAMT Wedding — Online Wedding Invitation

The website data remains centralized in `src/components/portfolio.data.js`.

## Content Structure

### Featured Projects

The featured project list contains exactly three projects:

1. FCO Hub
2. Play And Share
3. JAGERTHEJAGER Shop

FCO Hub is first because the resume presents it as the flagship project and it is the newest, most complete full-stack product.

### Other Projects

The Other Projects area contains secondary work that should remain visible without competing with the flagship projects:

1. TAMT Wedding

The data structure should allow more other projects to be added later without changing the component shape.

## Data Design

`src/components/portfolio.data.js` will expose two project arrays:

- `projects` for featured project cards.
- `otherProjects` for compact secondary project cards.

Each project entry should include:

- `number`
- `title`
- `type`
- `description`
- `tools`
- `href`

Featured projects also include `image` for the existing large cards.

FCO Hub needs a new featured entry using resume-derived copy:

- Title: `FCO Hub`
- Type: `Full-stack FC Online companion platform`
- Description should mention advanced player search, squad building, upgrade simulation, live team-color evaluation, automated data pipeline, and admin/monetization capabilities in a concise portfolio tone.
- Tools should prioritize the portfolio-relevant stack: React, Tailwind CSS, Node.js, Express, MongoDB, Playwright, Cheerio, Vitest.
- Live URL: `https://fcodaphim.netlify.app/`

If no FCO Hub screenshot asset exists, implementation should use a graceful visual fallback rather than blocking the update.

## UI Design

`src/components/projects.component.jsx` will keep the existing Projects section and add one subsection below the featured grid.

Structure:

1. Existing `SectionHeading` for Selected Work.
2. Featured projects grid using the current card design.
3. New `Other Projects` heading or compact intro.
4. Compact other-project cards below the featured grid.

Other-project cards should show:

- Project type and number.
- Project title.
- Short description.
- Tool badges.
- Live project link.

They do not need the large preview image treatment used by featured projects.

## Responsive Design

The layout must work well across desktop, tablet, and mobile.

Expected behavior:

- Desktop: featured projects use the existing responsive grid; other projects appear below in compact cards.
- Tablet: cards wrap naturally without overflow.
- Mobile: all project cards stack in a single column, spacing remains readable, and links/buttons stay easy to tap.

CSS changes should reuse the existing design language from `src/App.css`: cards, badges, spacing, and section rhythm.

## Error Handling and Edge Cases

- If `otherProjects` is empty in the future, the component should avoid rendering an empty Other Projects subsection.
- External links should keep `target="_blank"` and `rel="noreferrer"`.
- Missing featured images should not break rendering; use a fallback visual treatment if needed.

## Verification

After implementation:

1. Run lint or build using the project scripts.
2. Confirm the project section renders three featured projects.
3. Confirm the Other Projects subsection renders TAMT Wedding.
4. Confirm responsive CSS does not introduce horizontal overflow or cramped mobile cards.

## Out of Scope

- Changing resume PDF content.
- Adding project navigation items.
- Creating a carousel.
- Adding repository links unless requested separately.
- Redesigning unrelated portfolio sections.
