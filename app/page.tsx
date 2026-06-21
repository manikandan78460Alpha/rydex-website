"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Comparison from "./components/Comparison";
import Contact from "./components/Contact";
import PageBackground from "./components/PageBackground";

export default function Home() {
  return (
    <>
      <PageBackground />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <Comparison />
        <Contact />
      </main>
    </>
  );
}
