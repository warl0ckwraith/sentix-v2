import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePentest } from '@/contexts/PentestContext';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardMain } from '@/components/dashboard/DashboardMain';
import { Button } from '@/components/ui/button';
import { createMockScanTarget, createMockWorkflowSteps, simulateProgressUpdates } from '@/utils/mockData';

export default function Dashboard() {
  const { currentSession, dispatch } = usePentest();
  const [searchParams] = useSearchParams();
  
  // Auto-start demo if target is provided
  useEffect(() => {
    const targetParam = searchParams.get('target');
    const scanTypeParam = searchParams.get('scanType') as 'quick' | 'deep' | 'custom';
    
    if (targetParam && !currentSession) {
      const target = createMockScanTarget(targetParam, scanTypeParam || 'quick');
      const steps = createMockWorkflowSteps();
      
      const session = {
        id: `session_${Date.now()}`,
        target,
        state: 'scanning' as const,
        currentPhase: 'reconnaissance' as const,
        progress: 0,
        steps,
        startTime: new Date(),
        estimatedEndTime: new Date(Date.now() + 20 * 60 * 1000) // 20 minutes
      };
      
      dispatch({ type: 'START_SCAN', payload: session });
      
      // Simulate progress
      const cleanup = simulateProgressUpdates(
        (progress) => {
          dispatch({ type: 'UPDATE_PROGRESS', payload: { sessionId: session.id, progress } });
        },
        (phase) => {
          // Update current phase in session
        },
        (activity) => {
          dispatch({ type: 'ADD_ACTIVITY', payload: activity });
        }
      );
      
      return cleanup;
    }
  }, [searchParams, currentSession, dispatch]);

  const isScanning = currentSession && (currentSession.state === 'scanning' || currentSession.state === 'analyzing');

  return (
    <DashboardLayout>
      {isScanning ? (
        <DashboardMain />
      ) : (
        <div className="min-h-screen bg-background p-6 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="text-6xl">🔍</div>
            <h1 className="text-2xl font-semibold text-muted-foreground">
              No Active Scan
            </h1>
            <p className="text-muted-foreground max-w-md">
              Launch a penetration test from the home page to view real-time scanning progress and results here.
            </p>
            <Button 
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="mt-4"
            >
              Return to Home
            </Button>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}