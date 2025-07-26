import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Shield, 
  Network, 
  Globe, 
  Database, 
  Wifi, 
  Server,
  Eye,
  Play,
  Star,
  Users
} from "lucide-react";

export const WorkflowShowcase = () => {
  const workflows = [
    {
      id: 1,
      title: "Web Application Security Assessment",
      description: "Comprehensive OWASP Top 10 vulnerability scanning with AI-driven exploit detection",
      category: "Web Security",
      icon: Globe,
      author: "SecurityTeam",
      remixes: "15.2K",
      preview: "/api/placeholder/400/300",
      tags: ["OWASP", "SQL Injection", "XSS", "Authentication"],
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Network Infrastructure Penetration",
      description: "Advanced network discovery, port scanning, and service enumeration workflow",
      category: "Network Security",
      icon: Network,
      author: "PenTestPro",
      remixes: "12.8K",
      preview: "/api/placeholder/400/300",
      tags: ["Nmap", "Service Discovery", "Network Mapping", "TCP/UDP"],
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Wireless Security Analysis",
      description: "WiFi penetration testing with WPA/WPA2 cracking and rogue AP detection",
      category: "Wireless Security",
      icon: Wifi,
      author: "WiFiHacker",
      remixes: "9.4K",
      preview: "/api/placeholder/400/300",
      tags: ["WiFi", "WPA2", "Handshake", "Evil Twin"],
      difficulty: "Expert"
    },
    {
      id: 4,
      title: "Database Security Audit",
      description: "SQL injection testing and database configuration security assessment",
      category: "Database Security",
      icon: Database,
      author: "DBSecurity",
      remixes: "7.1K",
      preview: "/api/placeholder/400/300",
      tags: ["SQL Injection", "NoSQL", "MongoDB", "MySQL"],
      difficulty: "Intermediate"
    }
  ];

  const categories = ["Popular", "Network Security", "Web Security", "Wireless Security", "Database Security", "Cloud Security"];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-cyber-green/20 text-cyber-green border-cyber-green/30";
      case "Intermediate": return "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30";
      case "Advanced": return "bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30";
      case "Expert": return "bg-cyber-red/20 text-cyber-red border-cyber-red/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FF73B3] to-[#7B68EE] bg-clip-text text-transparent">
              Community Workflows
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover and remix proven penetration testing workflows created by cybersecurity experts worldwide
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              size="sm"
              className={index === 0 ? "bg-primary" : "bg-card hover:bg-card/80"}
            >
              {category}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="ml-4">
            View All
          </Button>
        </div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((workflow) => (
            <Link 
              key={workflow.id} 
              to={`/workflows/${workflow.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
            >
              <Card className="group overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer">
                {/* Preview Image */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-red/20 flex items-center justify-center">
                    <workflow.icon className="h-16 w-16 text-primary/60" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                      {workflow.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className={`text-xs border ${getDifficultyColor(workflow.difficulty)}`}>
                      {workflow.difficulty}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Run
                  </Button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Users className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">{workflow.author}</span>
                  </div>

                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {workflow.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {workflow.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {workflow.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {workflow.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{workflow.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="h-4 w-4" />
                      <span>{workflow.remixes} runs</span>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Workflows
          </Button>
        </div>
      </div>
    </div>
  );
};