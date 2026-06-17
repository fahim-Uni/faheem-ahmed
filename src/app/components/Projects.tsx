import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { projects } from "../data/portfolio";
import { ExternalLink, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

const platformMeta: Record<string, { label: string; icon: React.ElementType; color: string }> = {
  android: { label: "Android", icon: Smartphone, color: "#3DDC84" },
  ios: { label: "iOS", icon: Smartphone, color: "#F5F5F5" },
  web: { label: "Web", icon: Globe, color: "#D4AF37" },
};

export function Projects() {
  const grouped = ["android", "ios", "web"]
    .map((p) => ({ platform: p, items: projects.filter((pr) => pr.platform.includes(p as "android" | "ios" | "web")) }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: "#0B0B0B" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="004" title="Projects" />

        {/* static info container */}
        <motion.div
          className="rounded-2xl p-6 mb-12 flex flex-wrap items-center gap-6 md:gap-10"
          style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          {[
            { value: `${projects.length}`, label: "Total Projects" },
            { value: "3", label: "Platforms" },
            { value: "3+", label: "Years Exp" },
            { value: "10K+", label: "Downloads" },
          ].map(({ value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>
                {value}
              </p>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#A3A3A3", maxWidth: "70px" }}>
                {label.toUpperCase()}
              </p>
              <div className="w-px h-8 hidden md:block" style={{ background: "rgba(255,255,255,0.08)" }} />
            </div>
          ))}
        </motion.div>

        {grouped.map(({ platform, items }) => {
          const meta = platformMeta[platform];
          const Icon = meta.icon;
          return (
            <div key={platform} className="mb-14 last:mb-0">
              {/* platform header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(212,175,55,0.15)" }}>
                  <Icon size={16} style={{ color: meta.color }} />
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#D4AF37" }}>
                  {meta.label}
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
              </div>

              {/* project cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((project, i) => (
                  <Link key={project.name} href={`/projects/${project.slug}`}>
                    <motion.div
                      className="group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      style={{
                        background: "#161616",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-40px" }}
                      transition={{ duration: 0.45, delay: i * 0.06 }}
                    >
                      {/* top accent bar */}
                      <div
                        className="absolute top-0 left-6 right-6 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        style={{ background: "linear-gradient(90deg, #D4AF37, #FFD700)" }}
                      />

                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="px-2.5 py-1 rounded-full"
                          style={{ background: "rgba(212,175,55,0.15)", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#D4AF37" }}
                        >
                          {project.period}
                        </span>
                        <ExternalLink size={14} style={{ color: "rgba(255,255,255,0.4)" }} className="group-hover:text-[#FFD700] transition-colors" />
                      </div>

                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.05rem",
                          fontWeight: 600,
                          color: "#F5F5F5",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {project.name}
                      </h3>

                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px",
                          lineHeight: 1.7,
                          color: "#A3A3A3",
                          flex: 1,
                        }}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: "10px",
                              letterSpacing: "0.08em",
                              color: "#D4AF37",
                              background: "rgba(212,175,55,0.15)",
                              padding: "3px 9px",
                              borderRadius: "6px",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
