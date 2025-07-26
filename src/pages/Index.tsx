import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkflowShowcase } from "@/components/WorkflowShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20"> {/* Add padding top for fixed navbar */}
        <HeroSection />
        <WorkflowShowcase />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
