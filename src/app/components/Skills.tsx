import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { skillGroups } from "../data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "#0B0B0B" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="003" title="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="rounded-2xl p-7"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full" style={{ background: "#D4AF37" }} />
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#D4AF37",
                  }}
                >
                  {group.category.toUpperCase()}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="transition-all duration-200 hover:border-[#FFD700] hover:text-[#FFD700] cursor-default"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "#A3A3A3",
                      background: "#161616",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "8px",
                      padding: "5px 12px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
