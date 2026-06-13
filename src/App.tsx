import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Triptych } from "./components/Triptych";
import { Features } from "./components/Features";
import { Comparison } from "./components/Comparison";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Triptych />
        <Features />
        <Comparison />
        <HowItWorks />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
