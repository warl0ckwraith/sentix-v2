import { usePentest } from '@/contexts/PentestContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Database, 
  Container, 
  Cpu, 
  MemoryStick,
  Wifi,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

export function SystemHealth() {
  const { systemHealth } = usePentest();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return CheckCircle2;
      case 'degraded':
        return AlertTriangle;
      case 'down':
        return XCircle;
      default:
        return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-emerald-500';
      case 'degraded':
        return 'text-orange-500';
      case 'down':
        return 'text-red-500';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'degraded':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'down':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-border';
    }
  };

  const StatusIcon = getStatusIcon(systemHealth.n8nStatus);
  const statusColor = getStatusColor(systemHealth.n8nStatus);
  const statusBadge = getStatusBadge(systemHealth.n8nStatus);

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-md border-border">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">System Health</h3>
          <Badge className={statusBadge}>
            {systemHealth.n8nStatus.toUpperCase()}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mt-1">
          Infrastructure and service monitoring
        </p>
      </div>

      <div className="space-y-6">
        {/* n8n Status */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <Wifi className="h-5 w-5 text-n8n-orange" />
            <div>
              <div className="font-medium">n8n Workflow Engine</div>
              <div className="text-sm text-muted-foreground">Automation platform</div>
            </div>
          </div>
          <StatusIcon className={`h-5 w-5 ${statusColor}`} />
        </motion.div>

        {/* Docker Containers */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            <Container className="h-5 w-5 text-cyber-blue" />
            <div>
              <div className="font-medium">Docker Containers</div>
              <div className="text-sm text-muted-foreground">
                {systemHealth.dockerContainers.running}/{systemHealth.dockerContainers.total} running
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-cyber-blue">
              {Math.round((systemHealth.dockerContainers.running / systemHealth.dockerContainers.total) * 100)}%
            </div>
          </div>
        </motion.div>

        {/* Resource Usage */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Cpu className="h-4 w-4 text-n8n-purple" />
                <span className="text-sm font-medium">CPU Usage</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {systemHealth.cpuUsage}%
              </span>
            </div>
            <Progress value={systemHealth.cpuUsage} className="h-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <MemoryStick className="h-4 w-4 text-emerald-500" />
                <span className="text-sm font-medium">Memory Usage</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {systemHealth.memoryUsage}%
              </span>
            </div>
            <Progress value={systemHealth.memoryUsage} className="h-2" />
          </motion.div>
        </div>

        {/* API Limits */}
        <div className="pt-4 border-t border-border">
          <div className="text-sm font-medium mb-3 flex items-center space-x-2">
            <Database className="h-4 w-4 text-muted-foreground" />
            <span>API Rate Limits</span>
          </div>
          
          <div className="space-y-3">
            {Object.entries(systemHealth.apiLimits).map(([service, limits], index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between"
              >
                <div className="text-sm text-muted-foreground capitalize">
                  {service}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-muted-foreground">
                    {limits.used}/{limits.limit}
                  </span>
                  <Progress 
                    value={(limits.used / limits.limit) * 100} 
                    className="w-16 h-1" 
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}