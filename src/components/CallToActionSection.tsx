import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Rocket } from "lucide-react";

export const CallToActionSection = () => {
  return (
    <div className="py-20 px-4 sm:px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-12 bg-card/90 backdrop-blur-md border-border/50">
          <div className="flex items-center justify-center mb-6">
            <Rocket className="h-12 w-12 text-primary mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                🚀 Build Your Pentesting Workflow Now
              </span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Design, automate, and optimize your offensive security processes—all in one LLM-powered platform.
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
            Start Building
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          
          <div className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free trial available
          </div>
        </Card>
      </div>
    </div>
  );
};