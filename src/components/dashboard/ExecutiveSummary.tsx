import { usePentest } from '@/contexts/PentestContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  TrendingUp, 
  Clock, 
  AlertTriangle 
} from 'lucide-react';
import { motion } from 'framer-motion';

export function ExecutiveSummary() {
  const { currentSession } = usePentest();

  if (!currentSession) return null;

  // Mock data for demonstration
  const riskScore = Math.round(currentSession.progress * 0.87); // Simulated risk score
  const threatLevel = riskScore > 80 ? 'critical' : riskScore > 60 ? 'high' : riskScore > 40 ? 'medium' : 'low';
  const aiConfidence = Math.round(85 + currentSession.progress * 0.1);
  const estimatedTimeLeft = currentSession.estimatedEndTime 
    ? Math.max(0, Math.round((currentSession.estimatedEndTime.getTime() - Date.now()) / (1000 * 60)))
    : 0;

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'critical': return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'high': return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-green-500 bg-green-500/10 border-green-500/20';
      default: return 'text-muted-foreground bg-muted/10 border-border';
    }
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-md border-border">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Executive Overview</h3>
        <p className="text-muted-foreground">Real-time security assessment summary</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Risk Score Gauge */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="hsl(var(--border))"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="hsl(var(--cyber-blue))"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - riskScore / 100)}`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-cyber-blue">{riskScore}</div>
              <div className="text-xs text-muted-foreground">Risk Score</div>
            </div>
          </div>
          <Badge className={getThreatColor(threatLevel)}>
            {threatLevel.toUpperCase()} RISK
          </Badge>
        </motion.div>

        {/* Key Metrics */}
        <div className="space-y-4">
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-cyber-blue" />
              <div>
                <div className="font-medium">AI Confidence</div>
                <div className="text-sm text-muted-foreground">Analysis reliability</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-cyber-blue">{aiConfidence}%</div>
              <Progress value={aiConfidence} className="w-16 h-2" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5 text-n8n-orange" />
              <div>
                <div className="font-medium">Time Remaining</div>
                <div className="text-sm text-muted-foreground">Estimated completion</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-n8n-orange">
                {estimatedTimeLeft > 0 ? `${estimatedTimeLeft}m` : 'Completing...'}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-emerald-500" />
              <div>
                <div className="font-medium">Scan Progress</div>
                <div className="text-sm text-muted-foreground">Overall completion</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-emerald-500">
                {Math.round(currentSession.progress)}%
              </div>
              <Progress value={currentSession.progress} className="w-16 h-2" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <AlertTriangle className="h-4 w-4" />
            <span>Enterprise-grade security analysis</span>
          </div>
          <div className="text-muted-foreground">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </Card>
  );
}