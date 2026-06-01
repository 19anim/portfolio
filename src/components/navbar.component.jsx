import { useState } from "react";
import { navItems } from "./portfolio.data";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar shell min-h-17 p-0" aria-label="Main navigation">
        <div className="navbar-start">
          <button className="brand" onClick={() => scrollTo("top")} aria-label="Back to top">
            <span className="brand-mark">&gt;_</span>
            <span>tuanan.dev</span>
          </button>
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-sm menu-toggle"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            menu
          </button>
          <div className={`nav-links ${open ? "is-open" : ""}`}>
            {navItems.map(([number, id, label]) => (
              <button
                className="btn btn-ghost btn-sm"
                key={id}
                onClick={() => {
                  scrollTo(id);
                  setOpen(false);
                }}
              >
                <span>{number}.</span> {label}
              </button>
            ))}
            <a className="btn btn-primary btn-sm" href="/resume.pdf" download>
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
