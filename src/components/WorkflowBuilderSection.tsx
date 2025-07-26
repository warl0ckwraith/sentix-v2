import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChatUpload } from "@/components/ChatUpload";
import { 
  AlertTriangle, 
  Globe,
  Lock,
  Zap
} from "lucide-react";

export const WorkflowBuilderSection = () => {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <div className="py-20 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Transitional Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Ready to Build Your Workflow?
          </h2>
        </div>

        {/* Workflow Builder Card */}
        <Card className="max-w-4xl mx-auto p-8 bg-card/80 backdrop-blur-md border-border">
          <div className="mb-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Pentesting Workflow Builder
                </span>
              </h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Upload questionnaires, describe requirements, and let AI design custom penetration testing workflows with n8n automation
            </p>
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
    </div>
  );
};