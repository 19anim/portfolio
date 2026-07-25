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
