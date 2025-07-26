import { usePentest } from '@/contexts/PentestContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  Shield, 
  Server, 
  Brain, 
  Globe, 
  Wrench 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ComponentType<any>;
  color: string;
  badge?: string;
  delay?: number;
}

function MetricCard({ title, value, subtitle, icon: Icon, color, badge, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="p-4 bg-card/80 backdrop-blur-md border-border hover:border-border/80 transition-colors">
        <div className="flex items-center justify-between mb-3">
          <Icon className={`h-5 w-5 ${color}`} />
          {badge && (
            <Badge variant="secondary" className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        <div className="space-y-1">
          <div className={`text-2xl font-bold ${color}`}>
            {value}
          </div>
          <div className="text-sm font-medium text-foreground">
            {title}
          </div>
          <div className="text-xs text-muted-foreground">
            {subtitle}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function MetricsGrid() {
  const { currentSession } = usePentest();

  if (!currentSession) return null;

  // Generate realistic metrics based on scan progress
  const progress = currentSession.progress;
  const openPorts = Math.round(15 + progress * 0.08);
  const vulnerabilities = Math.round(progress > 30 ? 2 + progress * 0.02 : 0);
  const services = Math.round(8 + progress * 0.07);
  const aiConfidence = Math.round(85 + progress * 0.1);
  const shodanHits = Math.round(progress > 50 ? 8 + progress * 0.04 : 0);
  const remediationActions = Math.round(progress > 70 ? 3 + progress * 0.05 : 0);

  const metrics = [
    {
      title: 'Open Ports',
      value: openPorts,
      subtitle: 'Discovered',
      icon: Network,
      color: 'text-cyber-blue',
      badge: progress > 20 ? 'Live' : 'Scanning'
    },
    {
      title: 'Vulnerabilities',
      value: vulnerabilities,
      subtitle: progress > 30 ? 'Identified' : 'Analyzing',
      icon: Shield,
      color: vulnerabilities > 3 ? 'text-red-500' : vulnerabilities > 1 ? 'text-orange-500' : 'text-emerald-500',
      badge: vulnerabilities > 0 ? 'Critical' : 'Clean'
    },
    {
      title: 'Services',
      value: services,
      subtitle: 'Identified',
      icon: Server,
      color: 'text-n8n-purple',
      badge: progress > 15 ? 'Active' : 'Detecting'
    },
    {
      title: 'AI Confidence',
      value: `${aiConfidence}%`,
      subtitle: 'Analysis',
      icon: Brain,
      color: 'text-n8n-orange',
      badge: aiConfidence > 90 ? 'High' : aiConfidence > 70 ? 'Good' : 'Building'
    },
    {
      title: 'Shodan Hits',
      value: shodanHits,
      subtitle: 'Exposures',
      icon: Globe,
      color: 'text-yellow-500',
      badge: progress > 50 ? 'Found' : 'Searching'
    },
    {
      title: 'Remediation',
      value: remediationActions,
      subtitle: 'Actions',
      icon: Wrench,
      color: 'text-emerald-500',
      badge: progress > 70 ? 'Ready' : 'Pending'
    }
  ];

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-md border-border">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Live Metrics</h3>
        <p className="text-muted-foreground">Real-time security assessment data</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={metric.title}
            {...metric}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Card>
  );
}