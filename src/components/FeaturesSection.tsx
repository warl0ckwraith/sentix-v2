import { Card } from "@/components/ui/card";
import { 
  Search, 
  Target, 
  Activity, 
  FileText
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Reconnaissance",
      subtitle: "Automated discovery and enumeration",
      description: "Deploy scanning routines and gather target intelligence seamlessly.",
      color: "from-n8n-orange to-n8n-purple"
    },
    {
      icon: Target,
      title: "Vulnerability Scanning",
      subtitle: "AI-powered vulnerability detection",
      description: "Leverage machine learning to uncover CVEs, misconfigurations, and more—faster.",
      color: "from-n8n-purple to-cyber-blue"
    },
    {
      icon: Activity,
      title: "Exploitation",
      subtitle: "Intelligent exploit automation",
      description: "Trigger payloads with contextual understanding and precision.",
      color: "from-cyber-blue to-n8n-orange"
    },
    {
      icon: FileText,
      title: "Reporting",
      subtitle: "LLM-generated security reports",
      description: "Turn raw results into polished, actionable insights for clients and compliance.",
      color: "from-n8n-orange to-n8n-purple"
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Everything You Need to Pentest Better
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Unlock the full power of LLMs with a toolchain that streamlines every stage of the pentest lifecycle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group cursor-pointer">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm font-semibold text-primary mb-3">{feature.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};