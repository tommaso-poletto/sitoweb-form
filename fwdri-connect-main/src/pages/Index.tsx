import { Layout } from "@/components/layout/Layout";
import { NewHeroSection } from "@/components/sections/NewHeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { AppShowcaseSection } from "@/components/sections/AppShowcaseSection";
import { WhoItsForSection } from "@/components/sections/WhoItsForSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <Layout>
      <NewHeroSection />
      <ProblemSection />
      <AppShowcaseSection />
      <WhoItsForSection />
      <CommunitySection />
      <FinalCTASection />
    </Layout>
  );
};

export default Index;
