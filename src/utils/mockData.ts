import { PentestSession, ScanTarget, WorkflowStep, ScanResults, ActivityEvent } from '@/types/pentest';

export function createMockScanTarget(target: string, scanType: 'quick' | 'deep' | 'custom'): ScanTarget {
  return {
    id: `target_${Date.now()}`,
    target,
    type: target.includes('/') ? 'cidr' : 
          /^\d+\.\d+\.\d+\.\d+$/.test(target) ? 'ip' : 'domain',
    scanType,
    createdAt: new Date()
  };
}

export function createMockWorkflowSteps(): WorkflowStep[] {
  return [
    {
      id: 'step_1',
      name: 'Port Scan',
      phase: 'reconnaissance',
      status: 'completed',
      progress: 100,
      startTime: new Date(Date.now() - 300000),
      endTime: new Date(Date.now() - 240000),
      output: 'Found 23 open ports'
    },
    {
      id: 'step_2',
      name: 'Service Detection',
      phase: 'reconnaissance',
      status: 'completed',
      progress: 100,
      startTime: new Date(Date.now() - 240000),
      endTime: new Date(Date.now() - 180000),
      output: 'Identified 15 services'
    },
    {
      id: 'step_3',
      name: 'Vulnerability Analysis',
      phase: 'vulnerability_analysis',
      status: 'running',
      progress: 67,
      startTime: new Date(Date.now() - 180000)
    },
    {
      id: 'step_4',
      name: 'AI Risk Assessment',
      phase: 'vulnerability_analysis',
      status: 'pending',
      progress: 0
    },
    {
      id: 'step_5',
      name: 'Threat Intelligence',
      phase: 'threat_intelligence',
      status: 'pending',
      progress: 0
    },
    {
      id: 'step_6',
      name: 'Report Generation',
      phase: 'reporting',
      status: 'pending',
      progress: 0
    }
  ];
}

export function createMockScanResults(): ScanResults {
  return {
    id: `results_${Date.now()}`,
    targetId: 'target_123',
    openPorts: [22, 80, 443, 3306, 8080, 8443, 9200],
    services: [
      { port: 22, service: 'ssh', version: 'OpenSSH 8.2', state: 'open' },
      { port: 80, service: 'http', version: 'Apache 2.4.41', state: 'open' },
      { port: 443, service: 'https', version: 'Apache 2.4.41', state: 'open' },
      { port: 3306, service: 'mysql', version: '8.0.25', state: 'open' },
      { port: 8080, service: 'http-proxy', state: 'open' },
      { port: 8443, service: 'https-alt', state: 'open' },
      { port: 9200, service: 'elasticsearch', version: '7.10.0', state: 'open' }
    ],
    vulnerabilities: [
      {
        id: 'vuln_1',
        cve: 'CVE-2023-1234',
        severity: 'critical',
        title: 'Remote Code Execution in Apache',
        description: 'Buffer overflow vulnerability allows remote code execution',
        port: 80,
        service: 'http',
        cvssScore: 9.8,
        exploitAvailable: true
      },
      {
        id: 'vuln_2',
        cve: 'CVE-2023-5678',
        severity: 'high',
        title: 'SQL Injection in MySQL',
        description: 'Improper input validation leads to SQL injection',
        port: 3306,
        service: 'mysql',
        cvssScore: 7.5,
        exploitAvailable: false
      },
      {
        id: 'vuln_3',
        severity: 'medium',
        title: 'Information Disclosure',
        description: 'Server exposes sensitive information in error messages',
        port: 8080,
        service: 'http-proxy',
        cvssScore: 5.3,
        exploitAvailable: false
      }
    ],
    riskScore: 87,
    threatLevel: 'critical',
    aiConfidence: 94,
    shodanHits: 12,
    remediationActions: [
      'Update Apache to latest version',
      'Implement input validation for MySQL queries',
      'Configure proper error handling',
      'Close unnecessary ports',
      'Enable firewall restrictions'
    ]
  };
}

export function createMockActivityEvents(): ActivityEvent[] {
  const now = Date.now();
  return [
    {
      id: 'activity_1',
      timestamp: new Date(now - 30000),
      type: 'success',
      message: 'Port scan completed - 23 open ports found',
      phase: 'reconnaissance'
    },
    {
      id: 'activity_2',
      timestamp: new Date(now - 45000),
      type: 'info',
      message: 'Started service version detection',
      phase: 'reconnaissance'
    },
    {
      id: 'activity_3',
      timestamp: new Date(now - 60000),
      type: 'info',
      message: 'Nmap scan initiated on 192.168.1.100',
      phase: 'reconnaissance'
    },
    {
      id: 'activity_4',
      timestamp: new Date(now - 90000),
      type: 'success',
      message: 'Workflow triggered via webhook',
      phase: 'reconnaissance'
    }
  ];
}

// Simulate real-time progress updates
export function simulateProgressUpdates(
  onProgress: (progress: number) => void,
  onPhaseChange: (phase: any) => void,
  onActivity: (activity: ActivityEvent) => void
) {
  let progress = 0;
  let currentPhase = 'reconnaissance';
  
  const interval = setInterval(() => {
    progress += Math.random() * 5;
    
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      onActivity({
        id: `activity_${Date.now()}`,
        timestamp: new Date(),
        type: 'success',
        message: 'Penetration test completed successfully'
      });
      return;
    }
    
    // Phase transitions
    if (progress > 30 && currentPhase === 'reconnaissance') {
      currentPhase = 'vulnerability_analysis';
      onPhaseChange(currentPhase);
      onActivity({
        id: `activity_${Date.now()}`,
        timestamp: new Date(),
        type: 'info',
        message: 'Starting vulnerability analysis phase'
      });
    } else if (progress > 60 && currentPhase === 'vulnerability_analysis') {
      currentPhase = 'threat_intelligence';
      onPhaseChange(currentPhase);
      onActivity({
        id: `activity_${Date.now()}`,
        timestamp: new Date(),
        type: 'info',
        message: 'Beginning threat intelligence gathering'
      });
    } else if (progress > 85 && currentPhase === 'threat_intelligence') {
      currentPhase = 'reporting';
      onPhaseChange(currentPhase);
      onActivity({
        id: `activity_${Date.now()}`,
        timestamp: new Date(),
        type: 'info',
        message: 'Generating comprehensive security report'
      });
    }
    
    onProgress(progress);
  }, 2000 + Math.random() * 3000); // Random intervals between 2-5 seconds
  
  return () => clearInterval(interval);
}