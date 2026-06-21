"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Rydex", href: "#why-rydex" },
    { label: "Comparison", href: "#comparison" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "16px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "rgba(10, 15, 30, 0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(0, 212, 170, 0.1)",
    }}>

      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Image
          src="/logo-hexagon.png"
          alt="Rydex Logo"
          width={70}
          height={70}
          style={{
            filter: "drop-shadow(0 0 8px rgba(0, 212, 170, 0.6))",
          }}
        />
        <span style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 700,
          fontSize: "24px",
          color: "#F0F4FF",
          letterSpacing: "0.5px",
        }}>
          RYDEX
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div style={{
        display: "flex",
        gap: "36px",
        alignItems: "center",
      }}>
        {navLinks.map((item) => (
          
            key={item.label}
            href={item.href}
            style={{
              color: "#8892AA",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00D4AA")}
            onMouseLeave={e => (e.currentTarget.style.color = "#8892AA")}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      
        href="#contact"
        style={{
          background: "linear-gradient(135deg, #FF6B2B, #ff8c57)",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "14px",
          fontFamily: "Space Grotesk, sans-serif",
          boxShadow: "0 0 20px rgba(255, 107, 43, 0.3)",
          transition: "box-shadow 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 107, 43, 0.6)")}
        onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 107, 43, 0.3)")}
      >
        Request Access
      </a>

     </div>
  );
}
