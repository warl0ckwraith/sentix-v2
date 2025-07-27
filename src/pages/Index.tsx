import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkflowBuilderSection } from "@/components/WorkflowBuilderSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { WorkflowShowcase } from "@/components/WorkflowShowcase";
import { CallToActionSection } from "@/components/CallToActionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20"> {/* Add padding top for fixed navbar */}
        <HeroSection />
        
        {/* Visual Separator - reduced gap for better flow */}
        <div className="h-[120px] bg-gradient-to-b from-background via-muted/20 to-background relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
        </div>
        
        <WorkflowBuilderSection />
        <FeaturesSection />
        <WorkflowShowcase />
        <CallToActionSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
