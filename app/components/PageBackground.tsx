"use client";
import FloatingLines from "./FloatingLines";

export default function PageBackground() {
  return (
    <div style={{
      position: "fixed",
      top: "100vh",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      pointerEvents: "none",
    }}>
      <FloatingLines
        linesGradient={["#0A0F1E", "#00D4AA", "#0A0F1E", "#FF6B2B", "#0A0F1E"]}
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[4, 6, 4]}
        lineDistance={[5, 4, 5]}
        animationSpeed={0.4}
        interactive={false}
        parallax={false}
        mixBlendMode="screen"
      />
    </div>
  );
}
