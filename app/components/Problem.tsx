"use client";
import BorderGlow from "./BorderGlow";

const icons = {
  whatsapp: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="9" y1="10" x2="15" y2="10" />
      <line x1="9" y1="14" x2="13" y2="14" />
    </svg>
  ),
  excel: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  driver: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  ),
  safety: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  billing: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
      <line x1="14" y1="15" x2="18" y2="15" />
    </svg>
  ),
  clock: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function Problem() {
  const pains = [
    {
      icon: icons.whatsapp,
      title: "WhatsApp Chaos",
      desc: "100+ messages every morning just to confirm who's picking up whom. Missed messages, wrong locations, angry employees.",
    },
    {
      icon: icons.excel,
      title: "Excel Nightmares",
      desc: "Roster sheets that break every Monday. No live updates, no accountability, no history. Just a file that nobody trusts.",
    },
    {
      icon: icons.driver,
      title: "Zero Driver Visibility",
      desc: "You have no idea where your cabs are. Employees call the driver directly. The driver doesn't pick up. HR gets the complaint.",
    },
    {
      icon: icons.safety,
      title: "Female Safety Gaps",
      desc: "No escort tracking, no SOS alerts, no audit trail. One incident and your company is in the news for the wrong reasons.",
    },
    {
      icon: icons.billing,
      title: "Vendor Billing Disputes",
      desc: "Every month your vendor sends a bill you can't verify. No trip logs, no route data, no proof. You just pay and hope.",
    },
    {
      icon: icons.clock,
      title: "Last Minute Changes",
      desc: "An employee cancels at 6am. The scheduler is asleep. The driver shows up anyway. The vendor charges you for the trip.",
    },
  ];

  return (
   <section id="why-rydex" style={{
  padding: "100px 24px",
  maxWidth: "1200px",
  margin: "0 auto",
}}>

      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <span style={{
          fontSize: "13px",
          color: "#FF6B2B",
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 500,
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
          Sound Familiar?
        </span>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 52px)",
          fontWeight: 700,
          fontFamily: "Space Grotesk, sans-serif",
          marginTop: "16px",
          lineHeight: 1.2,
        }}>
          Managing Employee Transport in India{" "}
          <span style={{ color: "#FF6B2B" }}>is Broken.</span>
        </h2>
        <p style={{
          color: "#8892AA",
          fontSize: "18px",
          marginTop: "16px",
          maxWidth: "560px",
          margin: "16px auto 0",
          lineHeight: 1.7,
        }}>
          Every ops team we spoke to had the same story. Different company, same chaos.
        </p>
      </div>

      {/* Pain Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
      }}>
        {pains.map((pain) => (
          <BorderGlow
  key={pain.title}
  backgroundColor="#1A2744"
  borderRadius={16}
  glowColor="255 107 43"
  colors={["#FF6B2B", "#00D4AA", "#0A0F1E"]}
  glowIntensity={0.8}
  fillOpacity={0.15}
>
<div style={{
  padding: "32px",
  cursor: "default",
}}>
            {/* Icon Box */}
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "14px",
              background: "rgba(255, 107, 43, 0.08)",
              border: "1px solid rgba(255, 107, 43, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
              {pain.icon}
            </div>

            <h3 style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: "12px",
              color: "#F0F4FF",
            }}>
              {pain.title}
            </h3>
            <p style={{
              color: "#8892AA",
              fontSize: "15px",
              lineHeight: 1.7,
            }}>
              {pain.desc}
            </p>
          </div>
</BorderGlow>
        ))}
      </div>

      {/* Bottom Line */}
      <div style={{
        textAlign: "center",
        marginTop: "64px",
        padding: "32px",
        background: "rgba(255, 107, 43, 0.06)",
        border: "1px solid rgba(255, 107, 43, 0.15)",
        borderRadius: "16px",
      }}>
        <p style={{
          fontSize: "clamp(18px, 2.5vw, 24px)",
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 600,
          color: "#F0F4FF",
          lineHeight: 1.6,
        }}>
          There are thousands of{" "}
          <span style={{ color: "#FF6B2B" }}>corporates and growing enterprises across India</span>{" "}
          still managing employee transport this way right now.{" "}
          <span style={{ color: "#00D4AA" }}>Rydex fixes this.</span>
        </p>
      </div>

    </section>
  );
}
