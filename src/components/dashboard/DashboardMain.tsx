import { usePentest } from '@/contexts/PentestContext';
import { ProgressTracker } from './ProgressTracker';
import { ExecutiveSummary } from './ExecutiveSummary';
import { MetricsGrid } from './MetricsGrid';
import { ActivityFeed } from './ActivityFeed';
import { SystemHealth } from './SystemHealth';
import { motion } from 'framer-motion';

export function DashboardMain() {
  const { currentSession } = usePentest();

  if (!currentSession) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background p-6"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyber-blue to-n8n-orange bg-clip-text text-transparent mb-2">
            Active Penetration Test
          </h1>
          <p className="text-muted-foreground">
            Target: <span className="font-mono text-foreground">{currentSession.target.target}</span>
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Progress & Executive Summary */}
          <div className="lg:col-span-2 space-y-6">
            <ProgressTracker />
            <ExecutiveSummary />
            <MetricsGrid />
          </div>

          {/* Right Column - Activity & System Health */}
          <div className="space-y-6">
            <ActivityFeed />
            <SystemHealth />
          </div>
        </div>
      </div>
    </motion.div>
  );
}