export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-5 mb-14">
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "#D4AF37",
        }}
      >
        {index}
      </span>
      <div className="w-8 h-px" style={{ background: "#D4AF37" }} />
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 600,
          background: "linear-gradient(135deg, #F5F5F5 0%, #D4AF37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
