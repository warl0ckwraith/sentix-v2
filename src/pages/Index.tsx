import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestCard } from "@/components/TestCard";
import { StatusDisplay } from "@/components/StatusDisplay";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { Play, Zap, Code, Settings } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [totalTests, setTotalTests] = useState(0);

  const testCategories = [
    {
      id: "ui",
      title: "UI Components",
      description: "Test buttons, forms, and interactive elements",
      status: "active" as const,
      icon: <Code className="h-5 w-5" />
    },
    {
      id: "api",
      title: "API Integration",
      description: "Test external service connections and data flow",
      status: "testing" as const,
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: "performance",
      title: "Performance",
      description: "Measure loading times and optimization metrics",
      status: "completed" as const,
      icon: <Settings className="h-5 w-5" />
    }
  ];

  const handleRunTest = (categoryId: string, title: string) => {
    setTotalTests(prev => prev + 1);
    toast({
      title: `${title} Test Started`,
      description: `Running test suite for ${title.toLowerCase()}...`,
    });
  };

  const runAllTests = () => {
    setTotalTests(prev => prev + testCategories.length);
    toast({
      title: "All Tests Started",
      description: "Running complete test suite across all categories",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-float">
            Testing Playground
          </h1>
          <p className="text-xl mb-6 text-white/90">
            Interactive component testing and experimentation environment
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-primary-glow text-white px-4 py-2">
              <Play className="h-4 w-4 mr-2" />
              {totalTests} Tests Run
            </Badge>
            <Badge className="bg-green-500 text-white px-4 py-2">
              System Online
            </Badge>
          </div>
          <Button variant="hero" onClick={runAllTests} className="text-lg px-8 py-3">
            <Zap className="h-5 w-5 mr-2" />
            Run All Tests
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Test Categories */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Test Categories</h2>
              <p className="text-muted-foreground">
                Select a category to run specific tests and experiments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testCategories.map((category) => (
                <TestCard
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  status={category.status}
                  onTest={() => handleRunTest(category.id, category.title)}
                />
              ))}
            </div>

            {/* Interactive Demo Section */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Interactive Demo</h3>
              <InteractiveDemo />
            </div>
          </div>

          {/* Right Column - Status & Controls */}
          <div className="space-y-6">
            <StatusDisplay />
            
            <Card className="bg-gradient-card border border-primary/10 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => toast({ title: "Settings", description: "Configuration panel opened" })}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Test Settings
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => toast({ title: "Logs", description: "Test logs displayed" })}
                >
                  <Code className="h-4 w-4 mr-2" />
                  View Logs
                </Button>
                <Button 
                  variant="glow" 
                  className="w-full justify-start"
                  onClick={() => toast({ title: "Performance", description: "Running performance analysis..." })}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Performance Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;