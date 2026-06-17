import { motion } from "motion/react";
import { profile, languages } from "../data/portfolio";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "#0B0B0B" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* section label */}
        <div className="flex items-center gap-5 mb-14">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", color: "#D4AF37" }}>006</span>
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
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* contact + languages */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="rounded-2xl p-6"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#D4AF37", marginBottom: "1.2rem" }}>
                GET IN TOUCH
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Mail, text: profile.email },
                  { icon: Phone, text: profile.phone },
                  { icon: MapPin, text: profile.location },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon size={14} style={{ color: "#D4AF37", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#A3A3A3", lineHeight: 1.5 }}>
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl p-6"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#D4AF37", marginBottom: "1.2rem" }}>
                LANGUAGES
              </p>
              <div className="flex flex-col gap-3">
                {languages.map(({ lang, level }) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#A3A3A3" }}>{lang}</span>
                    <span
                      className="px-2.5 py-0.5 rounded-full"
                      style={{ fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", color: "#D4AF37", background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.3)" }}
                    >
                      {level.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* availability */}
          <div className="lg:col-span-2">
            <motion.div
              className="rounded-2xl p-6"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#D4AF37", marginBottom: "1.2rem" }}>
                AVAILABILITY
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#A3A3A3", lineHeight: 1.8 }}>
                Open to new opportunities. Feel free to reach out via email or phone for collaboration, freelance projects, or full-time roles.
              </p>
            </motion.div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-16 pt-8 flex items-center justify-between border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "rgba(163,163,163,0.4)" }}>
            {profile.name} — {new Date().getFullYear()}
          </span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.1em", color: "rgba(163,163,163,0.4)" }}>
            {profile.title}
          </span>
        </div>
      </div>
    </section>
  );
}
