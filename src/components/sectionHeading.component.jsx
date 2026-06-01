const SectionHeading = ({ number, eyebrow, title, copy }) => (
  <div className="section-heading">
    <p className="eyebrow">
      <span>{number}.</span> {eyebrow}
    </p>
    <h2>{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
);

export default SectionHeading;
