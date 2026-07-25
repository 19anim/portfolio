import { createElement } from "react";
import { motion as Motion, useReducedMotion } from "motion/react";

const MOTION_TAGS = {
  div: Motion.div,
  p: Motion.p,
  span: Motion.span,
  article: Motion.article,
  section: Motion.section,
  form: Motion.form,
  footer: Motion.footer,
  ul: Motion.ul,
  li: Motion.li,
};

const resolveTag = (as) => MOTION_TAGS[as] || Motion.div;

export const Reveal = ({
  as = "div",
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.24 },
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const tag = resolveTag(as);

  if (prefersReducedMotion) {
    return createElement(tag, { className, ...props }, children);
  }

  return createElement(
    tag,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport,
      variants: {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] },
        },
      },
      ...props,
    },
    children,
  );
};

export const RevealGroup = ({
  as = "div",
  children,
  className = "",
  stagger = 0.08,
  viewport = { once: true, amount: 0.18 },
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();
  const tag = resolveTag(as);

  if (prefersReducedMotion) {
    return createElement(tag, { className, ...props }, children);
  }

  return createElement(
    tag,
    {
      className,
      initial: "hidden",
      whileInView: "visible",
      viewport,
      variants: {
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      },
      ...props,
    },
    children,
  );
};
