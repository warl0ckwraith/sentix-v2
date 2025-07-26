import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { FileUpload } from "@/components/FileUpload";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  Globe,
  Lock,
  Zap,
  Target,
  Clock,
  Shield,
  FileCode,
  Mail,
  Play
} from "lucide-react";

export const WorkflowBuilderSection = () => {
  const navigate = useNavigate();
  const [target, setTarget] = useState("");
  const [scanType, setScanType] = useState<'quick' | 'deep' | 'custom'>('quick');
  const [isPublic, setIsPublic] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);

  const handleLaunchScan = () => {
    if (!target.trim()) return;
    
    const searchParams = new URLSearchParams({
      target: target.trim(),
      scanType,
      isPublic: isPublic.toString(),
      emailNotifications: emailNotifications.toString()
    });
    
    navigate(`/dashboard?${searchParams.toString()}`);
  };

  const scanTypeOptions = [
    {
      value: 'quick' as const,
      label: 'Quick Scan',
      description: 'Basic port scan and service detection',
      duration: '5-10 minutes',
      icon: Zap
    },
    {
      value: 'deep' as const,
      label: 'Deep Scan',
      description: 'Comprehensive vulnerability assessment',
      duration: '30-60 minutes',
      icon: Shield
    },
    {
      value: 'custom' as const,
      label: 'Custom Workflow',
      description: 'Upload your own n8n workflow',
      duration: 'Variable',
      icon: FileCode
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Transitional Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
            Ready to Build Your Workflow?
          </h2>
        </div>

        {/* Workflow Builder Card */}
        <Card className="max-w-4xl mx-auto p-6 lg:p-8 bg-card/80 backdrop-blur-md border-border">
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center mb-6">
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
          
          {/* Scan Configuration */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Target Input */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-5 w-5 text-primary" />
                <Label htmlFor="target" className="text-lg font-semibold">
                  Scan Target
                </Label>
              </div>
              <Input
                id="target"
                type="text"
                placeholder="192.168.1.1, example.com, or 10.0.0.0/24"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="text-lg p-4 bg-background/50 border-2 border-border hover:border-primary/50 focus:border-primary transition-colors"
              />
              <p className="text-sm text-muted-foreground">
                Enter an IP address, domain name, or CIDR range for automated security assessment
              </p>
            </div>

            {/* Scan Type Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="h-5 w-5 text-primary" />
                <Label className="text-lg font-semibold">
                  Scan Configuration
                </Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scanTypeOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <Card
                      key={option.value}
                      className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        scanType === option.value
                          ? 'ring-2 ring-primary bg-primary/5'
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setScanType(option.value)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{option.label}</h3>
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {option.duration}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Custom Workflow Upload (only for custom scan type) */}
            {scanType === 'custom' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FileCode className="h-5 w-5 text-primary" />
                  <Label className="text-lg font-semibold">
                    Custom Workflow Variables
                  </Label>
                </div>
                <FileUpload />
                <p className="text-sm text-muted-foreground">
                  Upload your n8n workflow file (.json) for custom penetration testing procedures
                </p>
              </motion.div>
            )}

            {/* Advanced Configuration */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <Label className="text-lg font-semibold">
                  Advanced Configuration
                </Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex items-center gap-3">
                    {isPublic ? (
                      <Globe className="h-5 w-5 text-primary" />
                    ) : (
                      <Lock className="h-5 w-5 text-muted-foreground" />
                    )}
                    <div>
                      <Label htmlFor="workflow-visibility" className="font-medium">
                        Workflow Visibility
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {isPublic ? 'Public workflow' : 'Private workflow'}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="workflow-visibility"
                    checked={isPublic}
                    onCheckedChange={setIsPublic}
                  />
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <Label htmlFor="email-notifications" className="font-medium">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Receive scan completion alerts
                      </p>
                    </div>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Launch Button */}
          <motion.div 
            className="flex items-center justify-between pt-6 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Enterprise-grade security analysis</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Powered by AI & n8n
              </div>
              <Button
                onClick={handleLaunchScan}
                disabled={!target.trim()}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-3 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Play className="h-5 w-5 mr-2" />
                Launch AI Pentest
              </Button>
            </div>
          </motion.div>
        </Card>
      </div>
    </div>
  );
};