"use client";
export default function Problem() {
  const pains = [
    {
      emoji: "📱",
      title: "WhatsApp Chaos",
      desc: "100+ messages every morning just to confirm who's picking up whom. Missed messages, wrong locations, angry employees.",
    },
    {
      emoji: "📊",
      title: "Excel Nightmares",
      desc: "Roster sheets that break every Monday. No live updates, no accountability, no history. Just a file that nobody trusts.",
    },
    {
      emoji: "🚗",
      title: "Zero Driver Visibility",
      desc: "You have no idea where your cabs are. Employees call the driver directly. The driver doesn't pick up. HR gets the complaint.",
    },
    {
      emoji: "⚠️",
      title: "Female Safety Gaps",
      desc: "No escort tracking, no SOS alerts, no audit trail. One incident and your company is in the news for the wrong reasons.",
    },
    {
      emoji: "🧾",
      title: "Vendor Billing Disputes",
      desc: "Every month your vendor sends a bill you can't verify. No trip logs, no route data, no proof. You just pay and hope.",
    },
    {
      emoji: "🕐",
      title: "Last Minute Changes",
      desc: "An employee cancels at 6am. The scheduler is asleep. The driver shows up anyway. The vendor charges you for the trip.",
    },
  ];

  return (
    <section style={{
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
          <div key={pain.title} style={{
            background: "#1A2744",
            borderRadius: "16px",
            padding: "32px",
            border: "1px solid rgba(240, 244, 255, 0.06)",
            transition: "border-color 0.2s, transform 0.2s",
            cursor: "default",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255, 107, 43, 0.3)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(240, 244, 255, 0.06)";
            (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          }}
          >
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>
              {pain.emoji}
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
          There are over{" "}
          <span style={{ color: "#FF6B2B" }}>2 million SMEs in India</span>{" "}
          managing employee transport this way right now.{" "}
          <span style={{ color: "#00D4AA" }}>Rydex fixes this.</span>
        </p>
      </div>

    </section>
  );
}
