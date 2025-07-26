import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface StatusItem {
  id: string;
  label: string;
  status: "success" | "pending" | "error";
  timestamp: Date;
}

export const StatusDisplay = () => {
  const [statuses, setStatuses] = useState<StatusItem[]>([
    { id: "1", label: "System Health Check", status: "success", timestamp: new Date() },
    { id: "2", label: "API Connection", status: "success", timestamp: new Date() },
    { id: "3", label: "Database Status", status: "pending", timestamp: new Date() },
    { id: "4", label: "External Services", status: "error", timestamp: new Date() }
  ]);

  const getIcon = (status: StatusItem["status"]) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
    }
  };

  const getBadgeVariant = (status: StatusItem["status"]) => {
    switch (status) {
      case "success":
        return "bg-green-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      case "error":
        return "bg-red-500 text-white";
    }
  };

  return (
    <Card className="bg-gradient-card border border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="animate-pulse w-2 h-2 bg-primary rounded-full"></div>
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {statuses.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-primary/5">
            <div className="flex items-center gap-3">
              {getIcon(item.status)}
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
            <Badge className={getBadgeVariant(item.status)} variant="secondary">
              {item.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};