"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Smartphone, Globe } from "lucide-react";
import { projects } from "../../data/portfolio";

const storeIcons: Record<string, { label: string; icon: React.ElementType }> = {
  playStore: { label: "Play Store", icon: Smartphone },
  appStore: { label: "App Store", icon: Smartphone },
  website: { label: "Website", icon: Globe },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ background: "#0B0B0B" }}>
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* back button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 transition-colors"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", letterSpacing: "0.1em", color: "#A3A3A3" }}
          >
            <ArrowLeft size={14} />
            BACK TO PROJECTS
          </Link>
        </motion.div>

        {/* header */}
        <motion.div
          className="mt-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            className="inline-block px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(212,175,55,0.15)", fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", color: "#D4AF37" }}
          >
            {project.period}
          </span>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {project.name}
          </h1>
        </motion.div>

        {/* images */}
        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(212,175,55,0.3) transparent" }}
        >
          {project.images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#161616" }}
            >
              <img
                src={img}
                alt={`${project.name} screenshot ${i + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
        </motion.div>

        {/* description + links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#F5F5F5",
                marginBottom: "1rem",
              }}
            >
              About this project
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#A3A3A3",
              }}
            >
              {project.details}
            </p>

            {/* tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#D4AF37",
                    background: "rgba(212,175,55,0.15)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid rgba(212,175,55,0.25)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* links sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div
              className="rounded-2xl p-6"
              style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", color: "#D4AF37", marginBottom: "1rem" }}
              >
                LINKS
              </p>
              <div className="flex flex-col gap-3">
                {Object.entries(project.links).map(([key, url]) => {
                  if (!url) return null;
                  const store = storeIcons[key];
                  const Icon = store?.icon || ExternalLink;
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        textDecoration: "none",
                      }}
                    >
                      <Icon size={16} style={{ color: "#D4AF37", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#F5F5F5" }}>
                        {store?.label || key}
                      </span>
                      <ExternalLink size={12} style={{ color: "#A3A3A3", marginLeft: "auto", flexShrink: 0 }} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
