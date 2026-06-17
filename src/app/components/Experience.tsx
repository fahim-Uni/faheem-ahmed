import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { experiences } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "#0B0B0B" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="002" title="Experience" />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-8"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                      style={{ background: "rgba(212,175,55,0.15)" }}
                    >
                      <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#F5F5F5", fontWeight: 500 }}>
                        {exp.company}
                      </p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#A3A3A3", marginTop: "1px" }}>
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <span
                    className="inline-block px-3 py-1 rounded-full"
                    style={{ background: "rgba(212,175,55,0.15)", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", color: "#D4AF37" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <div className="lg:col-span-3">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "#F5F5F5",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#D4AF37" }}
                        />
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#A3A3A3" }}>
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
