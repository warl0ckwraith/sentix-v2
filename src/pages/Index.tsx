import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkflowShowcase } from "@/components/WorkflowShowcase";
import { FileUpload } from "@/components/FileUpload";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* File Upload Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Client Onboarding</h2>
            <p className="text-muted-foreground">Upload your completed questionnaire to get started</p>
          </div>
          <FileUpload />
        </div>
      </div>
      
      <WorkflowShowcase />
      <Footer />
    </div>
  );
};

export default Index;
