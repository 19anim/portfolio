# Premium Tech Animation Design

## Goal

Add polished portfolio motion that makes the site feel modern and interactive without distracting from the content or hurting performance.

The animation direction is **Premium tech**: subtle, precise motion on top of the existing dark developer-interface identity.

## Existing Visual Direction

The current portfolio already uses a strong identity:

- Dark canvas: `#101010`
- Soft panels: `#161616` and `#1a1a1a`
- Signature green: `#00d992`
- Sharp zero-radius cards
- Mono labels and terminal-inspired details
- Hero grid background and terminal card

The animation work should reinforce this identity rather than redesigning it.

## Motion Principles

1. **One memorable layer:** the cursor-reactive green spotlight and project-card light response are the signature effects.
2. **Short opening sequence:** the page should feel intentionally composed, but never blocked by a loader.
3. **Small movement, high polish:** use mostly opacity and transform changes with restrained distance and duration.
4. **Projects get the strongest interaction:** cards should feel tactile because they represent the portfolio work.
5. **Respect user preferences:** reduced-motion users should receive static or near-static states.

## Animation Features

### Global Cursor Spotlight

Add a fixed background layer behind the page content.

Behavior:

- On desktop pointer devices, a soft radial green glow follows the mouse.
- The glow is low opacity and blends into the existing dark canvas and grid.
- It never blocks clicks.
- On touch devices or reduced-motion settings, it is disabled or kept static.

Purpose:

- Give the whole site a subtle premium interactive feel.
- Reinforce the green accent system without adding more decorative elements.

### Hero Page Opening

The hero reveals in a short staged sequence:

1. Eyebrow appears.
2. Main headline fades and slides up.
3. Intro copy appears.
4. CTA buttons appear together.
5. Availability row appears.
6. Terminal card enters slightly from the right.
7. Footer line fades in last.

Timing:

- Total perceived opening should be under about one second.
- There is no blocking intro screen or loader.
- The page remains usable immediately.

Purpose:

- Make the first impression feel deliberate.
- Use the existing terminal card as the hero's animated anchor.

### Scroll Reveals

Add a reusable reveal wrapper for section-level motion.

Behavior:

- Section headings fade and slide up when entering the viewport.
- Content rows and grids stagger their children slightly.
- Reveals happen once.
- Vertical movement stays small, roughly 18–28px.

Affected areas:

- About section
- Experience rows
- Projects section
- Other projects subsection
- Contact section

Purpose:

- Add rhythm while scrolling.
- Avoid noisy paragraph-by-paragraph animation.

### Project Card 3D Hover

Featured project cards receive the strongest hover interaction.

Desktop behavior:

- Card tilts based on cursor position.
- Maximum tilt is subtle, around 6–8 degrees.
- Card lifts slightly.
- Border brightens toward the green accent.
- Screenshot becomes full color and scales slightly.
- A soft green radial highlight follows the cursor inside the card.

Mobile and reduced-motion behavior:

- No cursor tilt.
- Keep static card styling or simple border/color feedback.

Purpose:

- Make project screenshots feel tactile.
- Create the primary “cool” interaction without making the whole site flashy.

### Buttons and Badge Micro-Interactions

CTA buttons:

- Slight lift on hover.
- Arrow moves a few pixels.
- Primary button can receive a soft green glow.

Skill/tool badges:

- Subtle border/accent color change.
- Tiny lift only.

Purpose:

- Make controls feel responsive.
- Keep micro-interactions secondary to project cards.

## Implementation Design

Use the existing `motion` package already present in `package.json`.

Do not add GSAP or another animation library unless implementation proves the current package cannot handle the desired effect cleanly.

Likely new components:

- `src/components/motion/reveal.component.jsx`
- `src/components/motion/spotlight.component.jsx`
- `src/components/motion/tiltCard.component.jsx`

Likely updated files:

- `src/App.jsx`
- `src/components/landing.component.jsx`
- `src/components/projects.component.jsx`
- `src/components/aboutMe.component.jsx`
- `src/components/experience.component.jsx`
- `src/components/contact.component.jsx`
- `src/components/sectionHeading.component.jsx`
- `src/App.css`
- `src/index.css`

Component responsibilities:

- `Spotlight` owns global cursor tracking and renders the fixed background glow.
- `Reveal` owns scroll-triggered entrance motion and reduced-motion fallback.
- `TiltCard` owns pointer-based project-card tilt and local card highlight.
- Page components stay responsible for content and layout.

## Accessibility and Performance

- Respect `prefers-reduced-motion` through Motion APIs and CSS fallbacks.
- Disable cursor tracking effects on coarse pointer devices.
- Use `transform` and `opacity` for entrance animations.
- Avoid expensive layout-changing animations.
- Keep keyboard focus visible.
- Ensure animated layers use `pointer-events: none` when decorative.
- Avoid constant looping effects except the existing terminal cursor blink.

## Responsive Design

Desktop:

- Enable spotlight and project-card tilt.
- Preserve the current grid and card layouts.

Tablet:

- Keep scroll reveals and button/badge micro-interactions.
- Reduce or disable strong tilt if pointer behavior is unreliable.

Mobile:

- Disable cursor-following effects.
- Keep content readable and tap targets stable.
- Preserve the current stacked card behavior.

## Verification

After implementation:

1. Run lint using the project script.
2. Run production build using the project script.
3. Open the app locally.
4. Confirm the hero opening sequence feels under one second and does not block interaction.
5. Confirm project-card 3D hover works on desktop and does not cause layout shift.
6. Confirm sections reveal smoothly while scrolling.
7. Confirm mobile layout has no horizontal overflow.
8. Confirm reduced-motion settings remove or heavily reduce motion effects.

## Out of Scope

- Full visual redesign of the portfolio.
- Blocking loading screen.
- Page routing transitions.
- Heavy particle backgrounds.
- Scroll-scrubbed pinned scenes.
- Adding GSAP unless a specific limitation appears during implementation.
