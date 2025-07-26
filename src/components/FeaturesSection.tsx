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
      color: "from-n8n-orange to-n8n-purple",
      ariaLabel: "Reconnaissance feature for automated network discovery"
    },
    {
      icon: Target,
      title: "Vulnerability Scanning",
      subtitle: "AI-powered vulnerability detection",
      description: "Leverage machine learning to uncover CVEs, misconfigurations, and more—faster.",
      color: "from-n8n-purple to-cyber-blue",
      ariaLabel: "Vulnerability scanning with AI-powered detection"
    },
    {
      icon: Activity,
      title: "Exploitation",
      subtitle: "Intelligent exploit automation",
      description: "Trigger payloads with contextual understanding and precision.",
      color: "from-cyber-blue to-n8n-orange",
      ariaLabel: "Intelligent exploit automation capabilities"
    },
    {
      icon: FileText,
      title: "Reporting",
      subtitle: "LLM-generated security reports",
      description: "Turn raw results into polished, actionable insights for clients and compliance.",
      color: "from-n8n-orange to-n8n-purple",
      ariaLabel: "Automated reporting with LLM-generated insights"
    }
  ];

  return (
    <section 
      className="py-20 lg:py-32 px-4 sm:px-6 bg-background"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <h2 
            id="features-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6"
          >
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            Everything You Need to Pentest Better
          </h3>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Unlock the full power of LLMs with a toolchain that streamlines every stage of the pentest lifecycle.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 lg:p-8 bg-card/60 backdrop-blur-sm border-border hover:bg-card/80 hover:shadow-card transition-all duration-300 group focus-within:ring-2 focus-within:ring-ring animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              role="article"
              aria-labelledby={`feature-${index}-title`}
            >
              <div 
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-subtle`}
                aria-hidden="true"
              >
                <feature.icon className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
              </div>
              <h4 
                id={`feature-${index}-title`}
                className="text-lg lg:text-xl font-bold font-heading text-foreground mb-2"
              >
                {feature.title}
              </h4>
              <p className="text-sm font-semibold text-primary mb-3 lg:mb-4">{feature.subtitle}</p>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};