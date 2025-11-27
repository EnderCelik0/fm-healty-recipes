import CTACard from "../components/common/CTACard";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import RealLife from "../components/Home/RealLife";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <RealLife />
      <CTACard />
    </div>
  );
}
