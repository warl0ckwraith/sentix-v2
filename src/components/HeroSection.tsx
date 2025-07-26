import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ChatUpload } from "@/components/ChatUpload";
import { 
  Shield, 
  Target, 
  Search, 
  Activity, 
  AlertTriangle, 
  FileText,
  Send,
  Globe,
  Lock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle AI workflow creation
    console.log("Creating pentesting workflow:", prompt);
  };

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
        <div className="text-center mb-16">
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

          {/* AI Workflow Creator */}
          <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-md border-border">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Pentesting Workflow Builder</h3>
              <p className="text-muted-foreground">Upload questionnaires, describe requirements, and let AI design custom penetration testing workflows with n8n automation</p>
            </div>
            
            {/* Chat Upload Interface */}
            <div className="mb-6">
              <ChatUpload />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant={isPublic ? "default" : "secondary"}
                  size="sm"
                  onClick={() => setIsPublic(!isPublic)}
                  className="bg-secondary hover:bg-secondary/80"
                >
                  {isPublic ? <Globe className="h-4 w-4 mr-2" /> : <Lock className="h-4 w-4 mr-2" />}
                  {isPublic ? "Public Workflow" : "Private Workflow"}
                </Button>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4" />
                  <span>Enterprise-grade security analysis</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                Powered by n8n & LLM
              </div>
            </div>
          </Card>
        </div>

        {/* Workflow Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            {
              icon: Search,
              title: "Reconnaissance",
              description: "Automated discovery and enumeration",
              color: "from-n8n-orange to-n8n-purple"
            },
            {
              icon: Target,
              title: "Vulnerability Scanning",
              description: "AI-powered vulnerability detection",
              color: "from-n8n-purple to-cyber-blue"
            },
            {
              icon: Activity,
              title: "Exploitation",
              description: "Intelligent exploit automation",
              color: "from-cyber-blue to-n8n-orange"
            },
            {
              icon: FileText,
              title: "Reporting",
              description: "LLM-generated security reports",
              color: "from-n8n-orange to-n8n-purple"
            }
          ].map((category, index) => (
            <Card key={index} className="p-6 bg-card/60 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group cursor-pointer">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          {[
            { number: "50K+", label: "Security Tests Automated" },
            { number: "99.9%", label: "Accuracy Rate" },
            { number: "10x", label: "Faster Than Manual Testing" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-accent bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};