"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import BorderGlow from "./BorderGlow";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -5);
    rotateY.set((offsetX / (rect.width / 2)) * 5);
  }

  function handleMouseEnter() {
    scale.set(1.03);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 800,
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}

const icons = {
  roster: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  map: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
    </svg>
  ),
  pin: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2" width="10" height="14" rx="2" />
      <path d="M12 16v6" />
      <line x1="9" y1="7" x2="15" y2="7" />
    </svg>
  ),
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  vendor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  roles: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  export: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  sos: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2" />
    </svg>
  ),
};

const features = [
  {
    icon: icons.roster,
    title: "Smart Roster Management",
    desc: "Build weekly rosters for all your employees across shifts, zones, and offices in minutes. Bulk import via Excel or add manually.",
    tag: "Core",
  },
  {
    icon: icons.map,
    title: "Live Route & Zone Mapping",
    desc: "Define pickup zones, assign vehicles, and auto-generate optimized routes. No more manual cab allocation every morning.",
    tag: "Operations",
  },
  {
    icon: icons.pin,
    title: "PIN-Based Trip Verification",
    desc: "Every employee gets a unique trip PIN. Driver verifies at pickup. No PIN, no trip. Full accountability on every ride.",
    tag: "Security",
  },
  {
    icon: icons.shield,
    title: "Female Safety Compliance",
    desc: "Rotating escort PINs, SOS alerts, and a full audit trail for every female employee trip. Built-in, not bolted-on.",
    tag: "Compliance",
  },
  {
    icon: icons.vendor,
    title: "Vendor & Fleet Control",
    desc: "Manage multiple vendors, their vehicles, and drivers from one dashboard. Track utilization and resolve billing disputes with real data.",
    tag: "Finance",
  },
  {
    icon: icons.roles,
    title: "5-Level Role Hierarchy",
    desc: "Admin, Scheduler, Ops Supervisor, Driver, and Employee. Every role sees exactly what they need and nothing more.",
    tag: "Access",
  },
  {
    icon: icons.export,
    title: "Reports & Data Exports",
    desc: "Trip logs, driver feedback, non-adherence reports, and vendor summaries — all exportable. Your data, your way.",
    tag: "Reporting",
  },
  {
    icon: icons.sos,
    title: "SOS & Incident Alerts",
    desc: "One tap SOS from the employee app. Instant notification to ops supervisors with live location. Safety is not optional.",
    tag: "Safety",
  },
];

export default function Features() {
  return (
    <section id="features" style={{
      padding: "100px 24px",
      background: "rgba(255,255,255,0.01)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

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
              What Rydex Does
            </span>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              fontFamily: "Space Grotesk, sans-serif",
              marginTop: "16px",
              lineHeight: 1.2,
            }}>
              Everything Your Ops Team{" "}
              <span style={{
                background: "linear-gradient(135deg, #00D4AA, #FF6B2B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Actually Needs.
              </span>
            </h2>
            <p style={{
              color: "#8892AA",
              fontSize: "18px",
              marginTop: "16px",
              maxWidth: "560px",
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}>
              Built from real conversations with transport coordinators, HR teams, and ops managers across India.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08} direction="up">
              <TiltCard>
                <BorderGlow
                  backgroundColor="#1A2744"
                  borderRadius={16}
                  glowColor="162 212 170"
                  colors={["#00D4AA", "#FF6B2B", "#0A0F1E"]}
                  glowIntensity={0.8}
                  fillOpacity={0.15}
                >
                  <div style={{
                    padding: "32px",
                    cursor: "default",
                    transformStyle: "preserve-3d",
                  }}>
                    <div style={{
                      display: "inline-block",
                      fontSize: "11px",
                      fontFamily: "JetBrains Mono, monospace",
                      color: "#00D4AA",
                      background: "rgba(0, 212, 170, 0.08)",
                      border: "1px solid rgba(0, 212, 170, 0.2)",
                      borderRadius: "100px",
                      padding: "3px 10px",
                      marginBottom: "20px",
                      letterSpacing: "0.5px",
                    }}>
                      {feature.tag}
                    </div>
                    <div style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "14px",
                      background: "rgba(0, 212, 170, 0.08)",
                      border: "1px solid rgba(0, 212, 170, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "20px",
                      transform: "translateZ(20px)",
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      marginBottom: "12px",
                      color: "#F0F4FF",
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      color: "#8892AA",
                      fontSize: "14px",
                      lineHeight: 1.7,
                    }}>
                      {feature.desc}
                    </p>
                  </div>
                </BorderGlow>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
