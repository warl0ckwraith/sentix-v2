import { usePentest } from '@/contexts/PentestContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CheckCircle2, 
  Info, 
  AlertTriangle, 
  XCircle,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

export function ActivityFeed() {
  const { activityFeed } = usePentest();

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'success':
        return CheckCircle2;
      case 'warning':
        return AlertTriangle;
      case 'error':
        return XCircle;
      default:
        return Info;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-emerald-500';
      case 'warning':
        return 'text-orange-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-cyber-blue';
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'warning':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'error':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/20';
    }
  };

  return (
    <Card className="p-6 bg-card/80 backdrop-blur-md border-border">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Activity Feed</h3>
          <Badge variant="secondary" className="bg-cyber-blue/10 text-cyber-blue">
            Live
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm mt-1">
          Real-time scan events and updates
        </p>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <AnimatePresence initial={false}>
          {activityFeed.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-32 text-muted-foreground"
            >
              <Clock className="h-8 w-8 mb-2" />
              <p className="text-sm">Waiting for scan activities...</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {activityFeed.map((event, index) => {
                const Icon = getEventIcon(event.type);
                const iconColor = getEventColor(event.type);
                const badgeClass = getBadgeVariant(event.type);

                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors"
                  >
                    <Icon className={`h-5 w-5 mt-0.5 ${iconColor} flex-shrink-0`} />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-medium text-foreground leading-tight">
                          {event.message}
                        </p>
                        <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                          {formatDistanceToNow(event.timestamp, { addSuffix: true })}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge className={`text-xs ${badgeClass}`}>
                          {event.type.toUpperCase()}
                        </Badge>
                        {event.phase && (
                          <Badge variant="outline" className="text-xs">
                            {event.phase.replace('_', ' ').toUpperCase()}
                          </Badge>
                        )}
                      </div>
                      
                      {event.details && (
                        <div className="mt-2 text-xs text-muted-foreground bg-muted/30 rounded p-2">
                          <pre className="whitespace-pre-wrap font-mono">
                            {JSON.stringify(event.details, null, 2)}
                          </pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>
      </ScrollArea>
    </Card>
  );
}