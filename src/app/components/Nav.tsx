import { useState, useEffect } from "react";
import { profile } from "../data/portfolio";

const navItems = [
  { label: "Profile", href: "profile" },
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Education", href: "education" },
  { label: "References", href: "references" },
  { label: "Contact", href: "contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("profile");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11,11,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.15)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-0 flex items-center justify-between h-16">
        <button
          onClick={() => handleNav("profile")}
          className="flex items-center gap-2"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "#D4AF37" }}
          >
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "12px", fontWeight: 700, color: "#F5F5F5" }}>
              {profile.name.split(" ").map((n) => n[0]).join("")}
            </span>
          </div>
          {scrolled && (
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600, color: "#F5F5F5" }}>
              {profile.name}
            </span>
          )}
        </button>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="px-4 py-2 rounded-lg transition-all duration-200"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: active === item.href ? "#F5F5F5" : "#A3A3A3",
                background: active === item.href ? "rgba(212,175,55,0.25)" : "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-px w-5" style={{ background: "#A3A3A3" }} />
          ))}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-1" style={{ background: "rgba(11,11,11,0.97)" }}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className="text-left px-4 py-3 rounded-lg transition-all"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                color: active === item.href ? "#F5F5F5" : "#A3A3A3",
                background: active === item.href ? "rgba(212,175,55,0.2)" : "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
