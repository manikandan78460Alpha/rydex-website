import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import PageBackground from "./components/PageBackground";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <PageBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
      </div>
    </main>
  );
}
