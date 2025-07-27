import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChatUpload } from "@/components/ChatUpload";
import { 
  AlertTriangle, 
  Globe,
  Lock,
  Zap,
  Rocket
} from "lucide-react";

export const WorkflowBuilderSection = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState("");

  return (
    <div className="py-16 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Transitional Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Start Your Automated Pentest with a Click
          </h2>
        </div>

        {/* Workflow Builder Card */}
        <Card className="max-w-4xl mx-auto p-6 lg:p-8 bg-card/80 backdrop-blur-md border-border">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-orange-500 mr-3" />
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Try Sentix Now
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
          
          {/* Email Notifications */}
          <div className="mb-8">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Email Notifications (Optional)
            </label>
            <Input
              placeholder="security@company.com"
              value={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.value)}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4" />
              <span>Enterprise-grade security analysis</span>
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-n8n-purple hover:from-primary/90 hover:to-n8n-purple/90 text-white font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Launch AI Pentest
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};