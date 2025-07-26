import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePentest } from '@/contexts/PentestContext';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { WorkflowBuilder } from '@/components/workflow/WorkflowBuilder';
import { DashboardMain } from '@/components/dashboard/DashboardMain';
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
        <div className="min-h-screen bg-background p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyber-blue to-n8n-orange bg-clip-text text-transparent mb-4">
                AI-Powered Pentesting Platform
              </h1>
              <p className="text-lg text-muted-foreground">
                Launch intelligent security assessments with automated workflows
              </p>
            </div>
            <WorkflowBuilder />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}