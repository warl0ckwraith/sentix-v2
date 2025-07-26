import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TestCardProps {
  title: string;
  description: string;
  status: "active" | "testing" | "completed";
  onTest: () => void;
  className?: string;
}

export const TestCard = ({ title, description, status, onTest, className }: TestCardProps) => {
  const statusColors = {
    active: "bg-primary text-primary-foreground",
    testing: "bg-yellow-500 text-white",
    completed: "bg-green-500 text-white"
  };

  return (
    <Card className={cn(
      "bg-gradient-card border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-card hover:scale-105",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
          <Badge className={statusColors[status]} variant="secondary">
            {status}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="hero" 
          onClick={onTest}
          className="w-full"
        >
          Run Test
        </Button>
      </CardContent>
    </Card>
  );
};