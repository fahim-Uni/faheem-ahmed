import { motion } from "motion/react";
import { profile } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: "#0B0B0B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* number */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 lg:flex-col lg:items-start">
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(212,175,55,0.15)", fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#D4AF37" }}
              >
                001
              </span>
              <div className="w-8 h-px lg:w-px lg:h-8" style={{ background: "#D4AF37" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#A3A3A3" }}>
                ABOUT
              </span>
            </div>
          </div>

          {/* content */}
          <div className="flex-1">
            <motion.h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 700,
                color: "#F5F5F5",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "2rem",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              Turning ideas into{" "}
              <span style={{ color: "#D4AF37" }}>seamless mobile experiences</span>
            </motion.h2>

            <div className="flex flex-col gap-5 max-w-2xl">
              {profile.about.map((para, i) => (
                <motion.p
                  key={i}
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#A3A3A3" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
