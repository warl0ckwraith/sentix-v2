import { Navbar } from "@/components/Navbar";
import { PentestDashboard } from "@/components/PentestDashboard";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
      <PentestDashboard />
    </div>
    </div>
  );
};

export default DashboardPage;