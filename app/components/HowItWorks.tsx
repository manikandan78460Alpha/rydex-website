"use client";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Onboard Your Company",
    desc: "Super Admin sets up your company profile, offices, and zones. Add your vendors, fleet, and drivers. Takes less than a day.",
    color: "#FF6B2B",
  },
  {
    number: "02",
    title: "Build Your Roster",
    desc: "Import employees via Excel or add manually. Assign shifts, pickup zones, and home locations. Rydex auto-generates routes.",
    color: "#00D4AA",
  },
  {
    number: "03",
    title: "Run Your First Trip",
    desc: "Drivers get assignments. Employees get their PIN. Ops supervisors track everything live. Your WhatsApp group finally goes quiet.",
    color: "#FF6B2B",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: "100px 24px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>

      {/* Header */}
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span style={{
            fontSize: "13px",
            color: "#FF6B2B",
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            Getting Started
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            fontFamily: "Space Grotesk, sans-serif",
            marginTop: "16px",
            lineHeight: 1.2,
          }}>
            Up and Running{" "}
            <span style={{
              background: "linear-gradient(135deg, #FF6B2B, #00D4AA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              in One Day.
            </span>
          </h2>
          <p style={{
            color: "#8892AA",
            fontSize: "18px",
            marginTop: "16px",
            maxWidth: "520px",
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}>
            No lengthy implementation. No consultants. No training sessions. Just three steps and you&apos;re live.
          </p>
        </div>
      </ScrollReveal>

      {/* Steps */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "32px",
        position: "relative",
      }}>
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.15} direction="up">
            <div style={{
              background: "#1A2744",
              borderRadius: "20px",
              padding: "40px 32px",
              border: `1px solid rgba(255,255,255,0.06)`,
              position: "relative",
              overflow: "hidden",
              height: "100%",
            }}>

              {/* Big background number */}
              <div style={{
                position: "absolute",
                top: "-20px",
                right: "20px",
                fontSize: "120px",
                fontWeight: 800,
                fontFamily: "Space Grotesk, sans-serif",
                color: step.color,
                opacity: 0.06,
                lineHeight: 1,
                userSelect: "none",
              }}>
                {step.number}
              </div>

              {/* Step number badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `rgba(${step.color === "#FF6B2B" ? "255,107,43" : "0,212,170"}, 0.1)`,
                border: `1px solid ${step.color}40`,
                marginBottom: "24px",
              }}>
                <span style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: step.color,
                }}>
                  {step.number}
                </span>
              </div>

              <h3 style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "22px",
                fontWeight: 700,
                color: "#F0F4FF",
                marginBottom: "16px",
              }}>
                {step.title}
              </h3>

              <p style={{
                color: "#8892AA",
                fontSize: "15px",
                lineHeight: 1.8,
              }}>
                {step.desc}
              </p>

              {/* Bottom accent line */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: `linear-gradient(90deg, ${step.color}, transparent)`,
              }} />

            </div>
          </ScrollReveal>
        ))}
      </div>

    </section>
  );
}
