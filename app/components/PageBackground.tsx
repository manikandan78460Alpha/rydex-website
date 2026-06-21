"use client";
import FloatingLines from "./FloatingLines";

export default function PageBackground() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      opacity: 0.2,
    }}>
      <FloatingLines
        linesGradient={["#00D4AA", "#FF6B2B", "#00D4AA"]}
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[5, 8, 5]}
        lineDistance={[4, 3, 4]}
        animationSpeed={0.3}
        interactive={false}
        parallax={false}
        mixBlendMode="screen"
      />
    </div>
  );
}
