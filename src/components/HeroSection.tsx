import { Badge } from "@/components/ui/badge";
import { 
  Shield
} from "lucide-react";

export const HeroSection = () => {

  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 bg-[length:60px_60px]" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Main Hero Content */}
        <div className="text-center min-h-screen flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-background/20 backdrop-blur-sm border-white/20">
              <Shield className="h-4 w-4 mr-2" />
              Powered by Advanced AI & LLM Technology
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Automate Network
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Penetration Testing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create intelligent pentesting workflows that automate reconnaissance, 
            vulnerability analysis, and reporting using cutting-edge LLM technology
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              { number: "50K+", label: "Security Tests Automated" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "10x", label: "Faster Than Manual Testing" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <p className="text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};