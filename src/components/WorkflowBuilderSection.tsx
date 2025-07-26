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
    <div className="py-20 px-4 sm:px-6 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              AI-Powered Pentesting
            </span>
            <br />
            <span className="text-foreground">Workflow Builder</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Configure intelligent security assessments with automated workflows and AI-driven analysis
          </p>
        </motion.div>

        {/* Main Workflow Builder Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Card className="max-w-5xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border-border/50 shadow-2xl">
            
            {/* Configuration Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
              
              {/* Left Column - Target Configuration */}
              <motion.div 
                className="lg:col-span-2 space-y-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Target Input */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <Label htmlFor="target" className="text-xl font-bold text-foreground">
                      Scan Target
                    </Label>
                  </div>
                  <Input
                    id="target"
                    type="text"
                    placeholder="192.168.1.1, example.com, or 10.0.0.0/24"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    className="text-lg p-6 bg-background/70 border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 rounded-xl backdrop-blur-sm shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Enter an IP address, domain name, or CIDR range for automated security assessment
                  </p>
                </div>

                {/* Scan Type Selection */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <Label className="text-xl font-bold text-foreground">
                      Scan Configuration
                    </Label>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {scanTypeOptions.map((option) => {
                      const IconComponent = option.icon;
                      return (
                        <Card
                          key={option.value}
                          className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                            scanType === option.value
                              ? 'ring-2 ring-primary bg-gradient-to-r from-primary/10 to-accent/10 border-primary/50 shadow-lg shadow-primary/20'
                              : 'hover:bg-muted/30 border-border/50 hover:border-primary/30'
                          }`}
                          onClick={() => setScanType(option.value)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-lg ${scanType === option.value ? 'bg-primary/20' : 'bg-muted/50'}`}>
                                <IconComponent className={`h-6 w-6 ${scanType === option.value ? 'text-primary' : 'text-muted-foreground'}`} />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-foreground">{option.label}</h3>
                                <p className="text-muted-foreground">
                                  {option.description}
                                </p>
                              </div>
                            </div>
                            <Badge 
                              variant="secondary" 
                              className={`text-sm px-3 py-1 ${scanType === option.value ? 'bg-primary/20 text-primary' : ''}`}
                            >
                              {option.duration}
                            </Badge>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Advanced Settings */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {/* Custom Workflow Upload */}
                {scanType === 'custom' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <FileCode className="h-6 w-6 text-accent" />
                      </div>
                      <Label className="text-lg font-bold text-foreground">
                        Custom Workflow
                      </Label>
                    </div>
                    <FileUpload />
                  </motion.div>
                )}

                {/* Advanced Configuration */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-destructive" />
                    </div>
                    <Label className="text-lg font-bold text-foreground">
                      Configuration
                    </Label>
                  </div>
                  <div className="space-y-4">
                    <Card className="p-6 bg-background/50 border border-border/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {isPublic ? (
                            <Globe className="h-5 w-5 text-primary" />
                          ) : (
                            <Lock className="h-5 w-5 text-muted-foreground" />
                          )}
                          <div>
                            <Label htmlFor="workflow-visibility" className="font-semibold text-foreground">
                              Workflow Visibility
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              {isPublic ? 'Share with community' : 'Keep private'}
                            </p>
                          </div>
                        </div>
                        <Switch
                          id="workflow-visibility"
                          checked={isPublic}
                          onCheckedChange={setIsPublic}
                        />
                      </div>
                    </Card>

                    <Card className="p-6 bg-background/50 border border-border/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <div>
                            <Label htmlFor="email-notifications" className="font-semibold text-foreground">
                              Email Reports
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Automatic delivery
                            </p>
                          </div>
                        </div>
                        <Switch
                          id="email-notifications"
                          checked={emailNotifications}
                          onCheckedChange={setEmailNotifications}
                        />
                      </div>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Launch Section */}
            <motion.div 
              className="flex items-center justify-between pt-8 border-t border-border/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span className="font-medium">Enterprise-grade security analysis</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  Powered by AI & n8n automation
                </div>
              </div>
              
              <Button
                onClick={handleLaunchScan}
                disabled={!target.trim()}
                size="lg"
                className="bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-primary-foreground font-bold px-10 py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Play className="h-6 w-6 mr-3" />
                Launch AI Pentest
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};