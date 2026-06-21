"use client";
import ScrollReveal from "./ScrollReveal";
import BorderGlow from "./BorderGlow";

const features = [
  "Role-Based Access Control",
  "PIN-Based Trip Verification",
  "Female Safety & Escort Tracking",
  "Live Route & Zone Management",
  "Vendor & Fleet Management",
  "Bulk Employee Import",
  "SOS & Incident Alerts",
  "Trip Reports & Data Export",
  "Employee Self-Cancellation",
  "100% Web Based",
  "Dedicated Onboarding Support",
  "Competitive Pricing",
];

const columns = [
  {
    name: "Rydex",
    tag: "You Are Here",
    highlight: true,
    color: "#00D4AA",
    values: [true, true, true, true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Legacy Platforms",
    tag: "Enterprise Tools",
    highlight: false,
    color: "#8892AA",
    values: [true, false, false, true, true, false, true, true, false, false, false, false],
  },
  {
    name: "Manual Processes",
    tag: "WhatsApp + Excel",
    highlight: false,
    color: "#8892AA",
    values: [false, false, false, false, false, true, false, false, false, true, false, true],
  },
  {
    name: "Basic Tools",
    tag: "Generic Software",
    highlight: false,
    color: "#8892AA",
    values: [false, false, false, false, true, false, false, true, false, true, false, true],
  },
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3a4560" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Comparison() {
  return (
    <section id="comparison" style={{
      padding: "100px 24px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>

      {/* Header */}
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            fontSize: "13px",
            color: "#00D4AA",
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            Why Rydex
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            fontFamily: "Space Grotesk, sans-serif",
            marginTop: "16px",
            lineHeight: 1.2,
          }}>
            The Choice is{" "}
            <span style={{
              background: "linear-gradient(135deg, #00D4AA, #FF6B2B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Pretty Clear.
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
            See how Rydex stacks up against the alternatives your team might be considering.
          </p>
        </div>
      </ScrollReveal>

      {/* Table */}
      <ScrollReveal direction="up">
        <BorderGlow
          backgroundColor="#0d1528"
          borderRadius={20}
          glowColor="0 212 170"
          colors={["#00D4AA", "#FF6B2B", "#0A0F1E"]}
          glowIntensity={0.6}
          fillOpacity={0.1}
        >
          <div style={{ overflowX: "auto" }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "600px",
            }}>

              {/* Column Headers */}
              <thead>
                <tr>
                  <th style={{
                    padding: "24px 24px",
                    textAlign: "left",
                    color: "#8892AA",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    width: "35%",
                  }}>
                    Feature
                  </th>
                  {columns.map((col) => (
                    <th key={col.name} style={{
                      padding: "24px 16px",
                      textAlign: "center",
                      width: "16%",
                    }}>
                      <div style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "6px",
                        background: col.highlight ? "rgba(0, 212, 170, 0.08)" : "transparent",
                        border: col.highlight ? "1px solid rgba(0, 212, 170, 0.2)" : "none",
                        borderRadius: "12px",
                        padding: col.highlight ? "12px 20px" : "12px 8px",
                      }}>
                        <span style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "16px",
                          fontWeight: 700,
                          color: col.highlight ? "#00D4AA" : "#F0F4FF",
                        }}>
                          {col.name}
                        </span>
                        <span style={{
                          fontFamily: "JetBrains Mono, monospace",
                          fontSize: "10px",
                          color: col.highlight ? "#00D4AA" : "#8892AA",
                          opacity: 0.8,
                        }}>
                          {col.tag}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Rows */}
              <tbody>
                {features.map((feature, rowIndex) => (
                  <tr key={feature} style={{
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    background: rowIndex % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
                  }}>
                    <td style={{
                      padding: "16px 24px",
                      color: "#F0F4FF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                    }}>
                      {feature}
                    </td>
                    {columns.map((col) => (
                      <td key={col.name} style={{
                        padding: "16px",
                        textAlign: "center",
                        background: col.highlight ? "rgba(0, 212, 170, 0.03)" : "transparent",
                      }}>
                        {col.values[rowIndex] ? <CheckIcon /> : <CrossIcon />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </BorderGlow>
      </ScrollReveal>

      {/* Bottom Note */}
      <ScrollReveal delay={0.2}>
        <p style={{
          textAlign: "center",
          color: "#8892AA",
          fontSize: "13px",
          marginTop: "24px",
          fontFamily: "JetBrains Mono, monospace",
        }}>
          * Comparison based on general market research and publicly available information.
        </p>
      </ScrollReveal>

    </section>
  );
}
