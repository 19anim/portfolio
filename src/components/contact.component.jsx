import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./sectionHeading.component";
import { Reveal } from "./motion/reveal.component";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState("sending");
    try {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: "nptatdt@gmail.com",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setState("sent");
    } catch {
      setState("error");
    }
  };

  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <section id="contact" className="section contact-section">
      <div className="shell contact-grid">
        <div>
          <SectionHeading number="04" eyebrow="CONTACT" title="Let's build something useful." />
          <Reveal as="p" className="section-copy" delay={0.08}>
            I&apos;m open to software engineering roles and freelance web projects. Tell me what
            you&apos;re working on, and I&apos;ll reply within 24-48 hours.
          </Reveal>
          <Reveal className="contact-links" delay={0.14}>
            <a href="mailto:nptatdt@gmail.com"><span>EMAIL</span>nptatdt@gmail.com</a>
            <a href="https://www.linkedin.com/in/19anim/" target="_blank" rel="noreferrer">
              <span>LINKEDIN</span>linkedin.com/in/19anim ↗
            </a>
            <a href="https://github.com/19anim" target="_blank" rel="noreferrer">
              <span>GITHUB</span>github.com/19anim ↗
            </a>
          </Reveal>
        </div>

        <Reveal as="form" className="card contact-form" delay={0.1} onSubmit={handleSubmit}>
          <div className="form-row">
            <label>NAME<input className="input" name="name" value={form.name} onChange={updateForm} required placeholder="Your name" /></label>
            <label>EMAIL<input className="input" name="email" type="email" value={form.email} onChange={updateForm} required placeholder="you@company.com" /></label>
          </div>
          <label>SUBJECT<input className="input" name="subject" value={form.subject} onChange={updateForm} required placeholder="Role, project, or idea" /></label>
          <label>MESSAGE<textarea className="textarea" name="message" value={form.message} onChange={updateForm} required rows="5" placeholder="A few details about what you need..." /></label>
          <button className="btn btn-success submit-button" disabled={state === "sending"}>
            {state === "sending" ? "Sending..." : "Send message"}
          </button>
          {state === "sent" && <p className="form-status success">Message sent. I&apos;ll be in touch soon.</p>}
          {state === "error" && <p className="form-status error">Message failed to send. Please email me directly.</p>}
        </Reveal>
      </div>
      <Reveal as="footer" className="shell footer">
        <span>© 2026 Nguyen Phi Tuan An</span>
        <span>BUILT WITH REACT // DESIGNED TO SHIP</span>
      </Reveal>
    </section>
  );
};

export default Contact;
