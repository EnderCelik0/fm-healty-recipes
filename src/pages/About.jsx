import BeyondPlate from "../components/About/BeyondPlate";
import Mission from "../components/About/Mission";
import Philosophy from "../components/About/Philosophy";
import WhyWeExist from "../components/About/WhyWeExist";
import CTACard from "../components/common/CTACard";
export default function About() {
  return (
    <div>
      <Mission />
      <WhyWeExist />
      <Philosophy />
      <BeyondPlate />
      <CTACard />
    </div>
);
}
