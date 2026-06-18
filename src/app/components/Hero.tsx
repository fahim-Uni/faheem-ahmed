import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { profile } from "../data/portfolio";

export function Hero() {
  return (
    <section
      id="profile"
      className="relative min-h-screen flex flex-col justify-center px-6 py-24 overflow-hidden"
      style={{ background: "#0B0B0B" }}
    >
      {/* background grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* glowing orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* left content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* badge */}
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border"
              style={{ borderColor: "rgba(212,175,55,0.4)", background: "rgba(212,175,55,0.1)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#D4AF37" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", color: "#D4AF37" }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            {/* name */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
                fontWeight: 700,
                color: "#F5F5F5",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              {(() => {
                const first = profile.name.split(" ")[0];
                const last = profile.name.split(" ")[1];
                const total = first.length + 1 + last.length;
                return (
                  <>
                    {first.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, 20] }}
                        transition={{
                          duration: 4.5,
                          times: [0, 0.07, 0.82, 1],
                          repeat: Infinity,
                          delay: i * 0.12,
                          ease: "easeOut",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <br />
                    {last.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        style={{ color: "#D4AF37" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, 20] }}
                        transition={{
                          duration: 4.5,
                          times: [0, 0.07, 0.82, 1],
                          repeat: Infinity,
                          delay: (first.length + 1 + i) * 0.12,
                          ease: "easeOut",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </>
                );
              })()}
            </h1>

            {/* title */}
            <p
              className="mt-5"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.1rem", color: "#A3A3A3", letterSpacing: "0.02em" }}
            >
              {profile.title}
            </p>

            {/* summary */}
            <p
              className="mt-6 max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.8, color: "#A3A3A3" }}
            >
              {profile.summary}
            </p>

            {/* social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Linkedin size={16} style={{ color: "#D4AF37" }} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Github size={16} style={{ color: "#D4AF37" }} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Mail size={16} style={{ color: "#D4AF37" }} />
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Phone size={16} style={{ color: "#D4AF37" }} />
              </a>
            </div>

            {/* contact chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: MapPin, text: profile.location },
                { icon: Phone, text: profile.phone },
                { icon: Mail, text: profile.email },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg"
                  style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Icon size={13} style={{ color: "#D4AF37" }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#A3A3A3" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* stats */}
            <div className="mt-14 flex gap-10">
              {profile.stats.map(({ value, label }) => (
                <div key={label}>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      color: "#F5F5F5",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    className="mt-1"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.14em", color: "rgba(142,142,147,0.6)" }}
                  >
                    {label.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4"
              style={{ borderColor: "rgba(212,175,55,0.3)" }}
            >
              <div className="w-full h-full">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full"
                  style={{ objectPosition: "%" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0B0B0B)" }}
      />
    </section>
  );
}
