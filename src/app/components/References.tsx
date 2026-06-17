import { motion } from "motion/react";
import { references } from "../data/portfolio";
import { Mail, Phone } from "lucide-react";

export function References() {
  return (
    <section id="references" className="py-24 px-6" style={{ background: "#0B0B0B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-5 mb-14">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", color: "#D4AF37" }}>007</span>
          <div className="w-8 h-px" style={{ background: "#D4AF37" }} />
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 600,
            background: "linear-gradient(135deg, #F5F5F5 0%, #D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.01em",
          }}>
            References
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {references.map((ref, i) => (
            <motion.div
              key={ref.name}
              className="rounded-2xl p-7"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 600, color: "#F5F5F5", marginBottom: "0.3rem" }}>
                {ref.name}
              </h3>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", color: "#D4AF37", marginBottom: "1rem" }}>
                {ref.role.toUpperCase()}
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { icon: Mail, text: ref.email },
                  { icon: Phone, text: ref.phone },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon size={13} style={{ color: "#D4AF37", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#A3A3A3" }}>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
