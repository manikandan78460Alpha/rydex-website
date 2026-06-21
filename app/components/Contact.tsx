"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import BorderGlow from "./BorderGlow";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{
      padding: "100px 24px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}>

      {/* Header */}
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            fontSize: "13px",
            color: "#FF6B2B",
            fontFamily: "JetBrains Mono, monospace",
            fontWeight: 500,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}>
            Get Started
          </span>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700,
            fontFamily: "Space Grotesk, sans-serif",
            marginTop: "16px",
            lineHeight: 1.2,
          }}>
            Book a Demo.{" "}
            <span style={{
              background: "linear-gradient(135deg, #FF6B2B, #00D4AA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              See it Live.
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
            Tell us about your company and we&apos;ll reach out within 24 hours to schedule a personalized walkthrough.
          </p>
        </div>
      </ScrollReveal>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "start",
      }}>

        {/* Left — Info */}
        <ScrollReveal direction="left">
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                title: "Talk to Our Team",
                desc: "We personally onboard every client. No sales bots, no automated emails — a real conversation.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                ),
                title: "Live Demo in 30 Minutes",
                desc: "See your actual use case — your shifts, your zones, your vendor setup — running live on Rydex.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                ),
                title: "Full Onboarding Included",
                desc: "We set everything up, hand you learning materials, and stay with you through your first live trip.",
              },
            ].map((item) => (
              <BorderGlow
                key={item.title}
                backgroundColor="#1A2744"
                borderRadius={16}
                glowColor="0 212 170"
                colors={["#00D4AA", "#FF6B2B", "#0A0F1E"]}
                glowIntensity={0.8}
                fillOpacity={0.15}
              >
                <div style={{
                  padding: "24px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(0, 212, 170, 0.08)",
                    border: "1px solid rgba(0, 212, 170, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#F0F4FF",
                      marginBottom: "6px",
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: "#8892AA",
                      fontSize: "14px",
                      lineHeight: 1.7,
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </BorderGlow>
            ))}

          </div>
        </ScrollReveal>

        {/* Right — Form */}
        <ScrollReveal direction="right">
          <BorderGlow
            backgroundColor="#1A2744"
            borderRadius={20}
            glowColor="255 107 43"
            colors={["#FF6B2B", "#00D4AA", "#0A0F1E"]}
            glowIntensity={0.8}
            fillOpacity={0.15}
          >
            <div style={{ padding: "40px" }}>
              {submitted ? (
                <div style={{
                  textAlign: "center",
                  padding: "40px 0",
                }}>
                  <div style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(0, 212, 170, 0.1)",
                    border: "1px solid rgba(0, 212, 170, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#F0F4FF",
                    marginBottom: "12px",
                  }}>
                    We&apos;ll be in touch!
                  </h3>
                  <p style={{
                    color: "#8892AA",
                    fontSize: "15px",
                    lineHeight: 1.7,
                  }}>
                    Expect a call from the Rydex team within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <h3 style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#F0F4FF",
                    marginBottom: "8px",
                  }}>
                    Request a Demo
                  </h3>

                  {/* Name + Company */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                      { name: "name", placeholder: "Your Name" },
                      { name: "company", placeholder: "Company Name" },
                    ].map((field) => (
                      <input
                        key={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          color: "#F0F4FF",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                        }}
                      />
                    ))}
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {[
                      { name: "email", placeholder: "Work Email" },
                      { name: "phone", placeholder: "Phone Number" },
                    ].map((field) => (
                      <input
                        key={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "10px",
                          padding: "12px 16px",
                          color: "#F0F4FF",
                          fontFamily: "Inter, sans-serif",
                          fontSize: "14px",
                          outline: "none",
                          width: "100%",
                        }}
                      />
                    ))}
                  </div>

                  {/* Employee Count */}
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    style={{
                      background: "#1A2744",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      color: formData.employees ? "#F0F4FF" : "#8892AA",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                    }}
                  >
                    <option value="" disabled>Number of Employees Using Transport</option>
                    <option value="50-200">50 – 200</option>
                    <option value="200-500">200 – 500</option>
                    <option value="500-1000">500 – 1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>

                  {/* Message */}
                  <textarea
                    name="message"
                    placeholder="Tell us about your current transport setup (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      padding: "12px 16px",
                      color: "#F0F4FF",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      outline: "none",
                      width: "100%",
                      resize: "none",
                    }}
                  />

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      background: loading ? "rgba(255,107,43,0.5)" : "linear-gradient(135deg, #FF6B2B, #ff8c57)",
                      color: "#fff",
                      padding: "14px 32px",
                      borderRadius: "10px",
                      border: "none",
                      fontWeight: 600,
                      fontSize: "16px",
                      fontFamily: "Space Grotesk, sans-serif",
                      cursor: loading ? "not-allowed" : "pointer",
                      boxShadow: "0 0 30px rgba(255, 107, 43, 0.35)",
                      width: "100%",
                      marginTop: "8px",
                    }}
                  >
                    {loading ? "Sending..." : "Book My Demo →"}
                  </button>

                  <p style={{
                    color: "#8892AA",
                    fontSize: "12px",
                    textAlign: "center",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    No spam. No pressure. Just a conversation.
                  </p>
                </div>
              )}
            </div>
          </BorderGlow>
        </ScrollReveal>

      </div>
    </section>
  );
}
