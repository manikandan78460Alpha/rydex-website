"use client";
import Aurora from "./Aurora";

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "120px 24px 80px",
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Aurora Background */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        opacity: 0.9,
      }}>
        <Aurora
          colorStops={["#0A0F1E", "#00D4AA", "#FF6B2B"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.5}
        />
      </div>

      {/* Content sits above Aurora */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Eyebrow Tag */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(0, 212, 170, 0.08)",
          border: "1px solid rgba(0, 212, 170, 0.25)",
          borderRadius: "100px",
          padding: "6px 16px",
          marginBottom: "32px",
        }}>
          <div style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#00D4AA",
            boxShadow: "0 0 8px #00D4AA",
          }} />
          <span style={{
            fontSize: "13px",
            color: "#00D4AA",
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}>
            The Smarter Way to Move Your Workforce
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: "clamp(36px, 6vw, 80px)",
          fontWeight: 700,
          lineHeight: 1.1,
          maxWidth: "900px",
          margin: "0 auto 24px",
          fontFamily: "Space Grotesk, sans-serif",
        }}>
          Employee Transport,{" "}
          <span style={{
            background: "linear-gradient(135deg, #FF6B2B, #00D4AA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Finally Solved.
          </span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontSize: "clamp(16px, 2vw, 20px)",
          color: "#8892AA",
          maxWidth: "620px",
          lineHeight: 1.7,
          marginBottom: "48px",
          margin: "0 auto 48px",
        }}>
          Stop managing employee cabs on WhatsApp groups and Excel sheets.
          Rydex gives your ops team one powerful dashboard to handle routes,
          drivers, shifts, and live tracking — all in one place.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "80px",
        }}>
          <a href="#contact" style={{
            background: "linear-gradient(135deg, #FF6B2B, #ff8c57)",
            color: "#fff",
            padding: "14px 32px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
            fontFamily: "Space Grotesk, sans-serif",
            boxShadow: "0 0 30px rgba(255, 107, 43, 0.35)",
          }}>
            Request Early Access
          </a>

          <a href="#features" style={{
            background: "transparent",
            color: "#F0F4FF",
            padding: "14px 32px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
            fontFamily: "Space Grotesk, sans-serif",
            border: "1px solid rgba(240, 244, 255, 0.15)",
          }}>
            See Features →
          </a>
        </div>

        {/* Stats Row */}
        <div style={{
          display: "flex",
          gap: "48px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}>
          {[
            { number: "6", label: "Role Levels" },
            { number: "20+", label: "Modules Built" },
            { number: "100%", label: "Web Based" },
            { number: "0", label: "WhatsApp Groups Needed" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "36px",
                fontWeight: 700,
                fontFamily: "Space Grotesk, sans-serif",
                color: "#00D4AA",
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: "13px",
                color: "#8892AA",
                marginTop: "4px",
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
