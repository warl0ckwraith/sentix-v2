import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { FileUpload } from '@/components/FileUpload';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Globe, 
  Lock, 
  AlertTriangle,
  Play,
  Settings,
  Clock,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

export function WorkflowBuilder() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState<'quick' | 'deep' | 'custom'>('quick');
  const [isPublic, setIsPublic] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const navigate = useNavigate();

  const handleLaunchScan = () => {
    if (!target.trim()) return;
    
    // Navigate to dashboard with target parameters
    const params = new URLSearchParams({
      target: target.trim(),
      scanType,
      notifications: emailNotifications.toString(),
      public: isPublic.toString()
    });
    
    navigate(`/dashboard?${params.toString()}`);
  };

  const scanTypeOptions = [
    {
      value: 'quick',
      label: 'Quick Scan',
      description: 'Basic port scan and service detection',
      duration: '5-10 minutes',
      icon: Clock
    },
    {
      value: 'deep',
      label: 'Deep Scan',
      description: 'Comprehensive vulnerability assessment',
      duration: '15-30 minutes',
      icon: Shield
    },
    {
      value: 'custom',
      label: 'Custom Workflow',
      description: 'Upload your own n8n workflow',
      duration: 'Variable',
      icon: Settings
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 bg-card/80 backdrop-blur-md border-border shadow-glow">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-8 w-8 text-n8n-orange mr-3" />
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-n8n-orange via-cyber-blue to-n8n-purple bg-clip-text text-transparent">
                Pentesting Workflow Builder
              </span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch AI-powered security assessments with automated n8n workflows and real-time progress tracking
          </p>
        </div>

        <div className="space-y-6">
          {/* Target Input */}
          <div className="space-y-2">
            <Label htmlFor="target" className="text-base font-medium">
              Target Information
            </Label>
            <Input
              id="target"
              placeholder="Enter IP address, domain, or CIDR range (e.g., 192.168.1.100, example.com, 10.0.0.0/24)"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="text-lg py-3"
            />
          </div>

          {/* Scan Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Scan Configuration</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {scanTypeOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card 
                      className={`p-4 cursor-pointer transition-all duration-200 ${
                        scanType === option.value 
                          ? 'border-cyber-blue bg-cyber-blue/5' 
                          : 'border-border hover:border-muted-foreground'
                      }`}
                      onClick={() => setScanType(option.value as any)}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon className={`h-5 w-5 mt-1 ${
                          scanType === option.value ? 'text-cyber-blue' : 'text-muted-foreground'
                        }`} />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-medium">{option.label}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {option.duration}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Custom Workflow Upload */}
          {scanType === 'custom' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <FileUpload />
            </motion.div>
          )}

          {/* Configuration Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {isPublic ? <Globe className="h-5 w-5 text-cyber-blue" /> : <Lock className="h-5 w-5 text-muted-foreground" />}
                <div>
                  <Label className="font-medium">Workflow Visibility</Label>
                  <p className="text-sm text-muted-foreground">
                    {isPublic ? 'Results shared with community' : 'Private results only'}
                  </p>
                </div>
              </div>
              <Switch
                checked={isPublic}
                onCheckedChange={setIsPublic}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-5 w-5 text-n8n-orange" />
                <div>
                  <Label className="font-medium">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive scan completion alerts
                  </p>
                </div>
              </div>
              <Switch
                checked={emailNotifications}
                onCheckedChange={setEmailNotifications}
              />
            </div>
          </div>

          {/* Launch Button */}
          <motion.div
            className="pt-6"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <Button
              onClick={handleLaunchScan}
              disabled={!target.trim()}
              size="lg"
              className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-cyber-blue to-n8n-orange hover:from-cyber-blue/80 hover:to-n8n-orange/80 transition-all duration-300"
            >
              <Play className="h-5 w-5 mr-3" />
              Launch AI Pentest
            </Button>
          </motion.div>

          {/* Footer Information */}
          <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground border-t border-border">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4" />
              <span>Enterprise-grade security analysis</span>
            </div>
            <div>
              Powered by n8n, Gemini AI & Docker
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}