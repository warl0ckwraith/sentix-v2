import { Badge } from "@/components/ui/badge";
import { 
  Shield
} from "lucide-react";

export const HeroSection = () => {

  return (
    <main 
      id="main-content"
      className="relative min-h-screen bg-gradient-hero overflow-hidden"
      role="banner"
    >
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-20 bg-[length:60px_60px]" 
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        {/* Main Hero Content */}
        <div className="text-center min-h-screen flex flex-col justify-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <Badge 
              variant="secondary" 
              className="px-4 py-2 text-sm bg-background/20 backdrop-blur-sm border-white/20 font-medium"
              role="status"
              aria-label="Technology badge"
            >
              <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
              Powered by Advanced AI & LLM Technology
            </Badge>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 leading-tight max-w-5xl mx-auto">
            Automate Network
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Penetration Testing
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-body">
            Create intelligent pentesting workflows that automate reconnaissance, 
            vulnerability analysis, and reporting using cutting-edge LLM technology
          </p>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12"
            role="region"
            aria-label="Performance statistics"
          >
            {[
              { number: "50K+", label: "Security Tests Automated", description: "Over fifty thousand security tests automated to date" },
              { number: "99.9%", label: "Accuracy Rate", description: "Ninety-nine point nine percent accuracy rate in detection" },
              { number: "10x", label: "Faster Than Manual Testing", description: "Ten times faster than traditional manual testing methods" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-3 bg-gradient-accent bg-clip-text text-transparent"
                  aria-label={stat.description}
                >
                  {stat.number}
                </div>
                <p className="text-white/80 font-medium text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};