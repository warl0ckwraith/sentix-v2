import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Clock, 
  User, 
  Play, 
  Star,
  Target,
  AlertTriangle,
  FileText
} from "lucide-react";

export default function WorkflowDetail() {
  const { workflowName } = useParams<{ workflowName: string }>();

  // Mock workflow data - in real app, fetch based on workflowName
  const workflow = {
    name: workflowName?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Web App Security Assessment",
    description: "Comprehensive security testing workflow for web applications including OWASP Top 10 vulnerabilities, authentication bypass testing, and automated reporting.",
    author: "SecurityExpert_2024",
    rating: 4.8,
    duration: "2-4 hours",
    difficulty: "Intermediate",
    steps: [
      "Initial reconnaissance and target enumeration",
      "Vulnerability scanning and analysis",
      "Manual security testing",
      "Exploitation and proof-of-concept",
      "Report generation and recommendations"
    ],
    tools: ["Nmap", "Burp Suite", "SQLMap", "OWASP ZAP", "Custom Scripts"],
    compliance: ["OWASP", "PCI DSS", "ISO 27001"]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              Public Workflow
            </Badge>
            <Badge variant="outline" className={
              workflow.difficulty === 'Beginner' ? 'border-green-500 text-green-500' :
              workflow.difficulty === 'Intermediate' ? 'border-yellow-500 text-yellow-500' :
              'border-red-500 text-red-500'
            }>
              {workflow.difficulty}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">{workflow.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">{workflow.description}</p>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{workflow.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span>{workflow.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{workflow.duration}</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Play className="h-5 w-5 mr-2" />
            Run Workflow
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Workflow Steps */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Workflow Steps
              </h2>
              <div className="space-y-4">
                {workflow.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tools & Compliance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {workflow.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary">{tool}</Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {workflow.compliance.map((standard, index) => (
                    <Badge key={index} variant="outline">{standard}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <span className="text-foreground">{workflow.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="text-foreground">{workflow.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Rating:</span>
                  <span className="text-foreground">{workflow.rating}/5</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Prerequisites
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Basic networking knowledge</li>
                <li>• Familiarity with web technologies</li>
                <li>• Understanding of security concepts</li>
                <li>• Access to testing environment</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}