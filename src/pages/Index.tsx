import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WorkflowShowcase } from "@/components/WorkflowShowcase";
import { ChatUpload } from "@/components/ChatUpload";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20"> {/* Add padding top for fixed navbar */}
        <HeroSection />
        
        {/* Chat Upload Section */}
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FF73B3] to-[#7B68EE] bg-clip-text text-transparent mb-4">
                Client Onboarding
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Upload your completed questionnaire or ask about our penetration testing services
              </p>
            </div>
            <ChatUpload />
          </div>
        </div>
        
        <WorkflowShowcase />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
