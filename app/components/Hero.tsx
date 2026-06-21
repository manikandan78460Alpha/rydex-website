"use client";
import Aurora from "./Aurora";
import CountUp from "./CountUp";

const stats = [
  { number: 5, suffix: "", label: "Role Levels" },
  { number: 20, suffix: "+", label: "Modules Built" },
  { number: 100, suffix: "%", label: "Web Based" },
  { number: 60, suffix: "%", label: "Lower Cost vs Traditional Platforms" },
];

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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>

        {/* Eyebrow Tag */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255, 107, 43, 0.08)",
          border: "1px solid rgba(255, 107, 43, 0.25)",
          borderRadius: "100px",
          padding: "6px 16px",
          marginBottom: "32px",
        }}>
          <div style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#FF6B2B",
            boxShadow: "0 0 8px #FF6B2B",
          }} />
          <span style={{
            fontSize: "13px",
            color: "#FF6B2B",
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

        {/* Stats Row with CountUp */}
        <div style={{
          display: "flex",
          gap: "0",
          justifyContent: "center",
          flexWrap: "wrap",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "20px",
          padding: "32px 48px",
          maxWidth: "900px",
          margin: "0 auto",
          backdropFilter: "blur(10px)",
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              textAlign: "center",
              padding: "0 40px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              flex: "1",
              minWidth: "160px",
            }}>
              <div style={{
                fontSize: "42px",
                fontWeight: 800,
                fontFamily: "Space Grotesk, sans-serif",
                color: i % 2 === 0 ? "#00D4AA" : "#FF6B2B",
                lineHeight: 1,
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2px",
              }}>
                <CountUp
                  to={stat.number}
                  duration={2.5}
                  delay={i * 0.2}
                />
                <span>{stat.suffix}</span>
              </div>
              <div style={{
                fontSize: "13px",
                color: "#8892AA",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.4,
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
