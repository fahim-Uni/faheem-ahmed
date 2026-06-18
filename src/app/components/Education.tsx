import { motion } from "motion/react";
import { SectionLabel } from "./SectionLabel";
import { education, certifications, awards } from "../data/portfolio";
import { Award, FileCheck } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6" style={{ background: "#0B0B0B" }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="005" title="Education" />

        {/* degrees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="rounded-2xl p-7 flex gap-5"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}>
                <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#F5F5F5",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.1em",
                      background: edu.status === "In Progress" ? "rgba(212,175,55,0.15)" : "rgba(22,163,74,0.15)",
                      color: edu.status === "In Progress" ? "#D4AF37" : "#4ADE80",
                      border: `1px solid ${edu.status === "In Progress" ? "rgba(212,175,55,0.3)" : "rgba(74,222,128,0.3)"}`,
                    }}
                  >
                    {edu.status.toUpperCase()}
                  </span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#A3A3A3" }}>{edu.institution}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(163,163,163,0.6)", marginTop: "2px" }}>{edu.location}</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#D4AF37", marginTop: "8px" }}>{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* certs + awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileCheck size={16} style={{ color: "#D4AF37" }} />
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#D4AF37" }}>
                CERTIFICATIONS
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="flex items-start justify-between py-4 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#A3A3A3", maxWidth: "75%", lineHeight: 1.5 }}>
                    {cert.name}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(163,163,163,0.6)", flexShrink: 0, marginLeft: "1rem" }}>
                    {cert.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award size={16} style={{ color: "#D4AF37" }} />
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#D4AF37" }}>
                HONOURS & AWARDS
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {awards.map((award, i) => (
                <motion.div
                  key={award.name}
                  className="flex items-start justify-between py-4 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#A3A3A3", maxWidth: "75%", lineHeight: 1.5 }}>
                    {award.name}
                  </p>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "rgba(163,163,163,0.6)", flexShrink: 0, marginLeft: "1rem" }}>
                    {award.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
