import { usePentest } from '@/contexts/PentestContext';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Shield, 
  Target, 
  Zap, 
  FileText, 
  CheckCircle2, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const phaseIcons = {
  reconnaissance: Search,
  vulnerability_analysis: Shield,
  threat_intelligence: Target,
  exploitation: Zap,
  reporting: FileText
};

const phaseLabels = {
  reconnaissance: 'Reconnaissance',
  vulnerability_analysis: 'Vulnerability Analysis',
  threat_intelligence: 'Threat Intelligence', 
  exploitation: 'Exploitation',
  reporting: 'Reporting'
};

export function ProgressTracker() {
  const { currentSession } = usePentest();

  if (!currentSession) return null;

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle2;
      case 'running':
        return Clock;
      case 'failed':
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-emerald-500';
      case 'running':
        return 'text-cyber-blue';
      case 'failed':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-md border-border">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Workflow Progress</h3>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-cyber-blue">
            {Math.round(currentSession.progress)}%
          </div>
          <Badge variant="secondary" className="bg-cyber-blue/10 text-cyber-blue">
            {currentSession.state.charAt(0).toUpperCase() + currentSession.state.slice(1)}
          </Badge>
        </div>
        <Progress value={currentSession.progress} className="mt-2" />
      </div>

      <div className="space-y-4">
        {currentSession.steps.map((step, index) => {
          const PhaseIcon = phaseIcons[step.phase];
          const StepIcon = getStepIcon(step.status);
          const stepColor = getStepColor(step.status);

          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
            >
              <div className="flex items-center space-x-3">
                <PhaseIcon className="h-5 w-5 text-muted-foreground" />
                <StepIcon className={`h-4 w-4 ${stepColor}`} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium">{step.name}</h4>
                  <span className="text-sm text-muted-foreground">
                    {step.progress}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {phaseLabels[step.phase]}
                  </Badge>
                  {step.output && (
                    <span className="text-xs text-muted-foreground">
                      {step.output}
                    </span>
                  )}
                </div>
                {step.status === 'running' && (
                  <Progress value={step.progress} className="mt-2 h-1" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}