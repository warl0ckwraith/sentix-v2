import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
}