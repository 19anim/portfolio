const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const LandingPage = () => (
  <section id="top" className="hero-section">
    <div className="hero-grid shell">
      <div className="hero-copy">
        <p className="eyebrow">FULL-STACK WEB DEVELOPER</p>
        <h1>
          I build useful
          <br />
          web products<span>.</span>
        </h1>
        <p className="hero-intro">
          I&apos;m Nguyen Phi Tuan An, a software engineer based in Vietnam. I turn ideas into
          reliable, user-friendly web experiences for teams and clients.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            View selected work <span>↗</span>
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo("contact")}>
            Let&apos;s talk
          </button>
        </div>
        <div className="availability">
          <span className="status-dot"></span>
          Open to software roles and freelance projects
        </div>
      </div>

      <div className="mockup-code terminal-card">
        <pre data-prefix="01">
          <code>const developer = {"{"}</code>
        </pre>
        <pre data-prefix="02">
          <code>&nbsp;name: <em>&quot;Nguyen Phi Tuan An&quot;</em>,</code>
        </pre>
        <pre data-prefix="03">
          <code>&nbsp;experience: <em>&quot;5+ years&quot;</em>,</code>
        </pre>
        <pre data-prefix="04">
          <code>&nbsp;focus: [<em>&quot;web apps&quot;</em>, <em>&quot;UI&quot;</em>, <em>&quot;automation&quot;</em>],</code>
        </pre>
        <pre data-prefix="05">
          <code>&nbsp;availableFor: [<em>&quot;roles&quot;</em>, <em>&quot;freelance&quot;</em>],</code>
        </pre>
        <pre data-prefix="06">
          <code>{"}"};</code>
        </pre>
        <pre data-prefix="07" className="terminal-result">
          <code>developer.build(<em>&quot;your next idea&quot;</em>);<i></i></code>
        </pre>
      </div>
    </div>
    <div className="hero-footer shell">
      <p>SCROLL TO EXPLORE</p>
      <div></div>
      <p>HO CHI MINH CITY, VN</p>
    </div>
  </section>
);

export default LandingPage;
