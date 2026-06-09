import React from "react";
import Hero from "../components/Hero";
import ComprehensiveSolutions from "../components/ComprehensiveSolutions";
import TrustMetrics from "../components/TrustMetrics";
import TechnologyAdvantage from "../components/TechnologyAdvantage";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import VRCta from "../components/VRCta";
export default function Home() {
  return (
    <>
      {" "}
      <Hero /> <ComprehensiveSolutions /> <TrustMetrics />{" "}
      <TechnologyAdvantage /> <Testimonials /> <FAQ /> <VRCta />{" "}
    </>
  );
}
