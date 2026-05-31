import { Bus } from "lucide-react";
import KgtAppsHero from "./KgtAppsHero";
import BusinessGrowth from "./BusinessGrowth";
import CompleteSolutions from "./CompleteSolutions"
import BusinessDeservesBest from "./BusinessDeservesBest";
import BusinessExpansionSteps from "./BusinessExpansionSteps";
import BusinessSizes from "./businessSizes";
import TryKGTApps from "./TryKGTApps";
import TestimonialSlider from "./TestimonialSlider";

export default function KgtAppsPage() {
  return (
    <>
      <KgtAppsHero />
      <BusinessGrowth />
        <CompleteSolutions />
        <BusinessDeservesBest />
        <BusinessExpansionSteps />
        <BusinessSizes />
        <TryKGTApps />
        <TestimonialSlider />
      
    </>
  );
}
