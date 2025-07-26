import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { toast } from "@/hooks/use-toast";

export const InteractiveDemo = () => {
  const [progress, setProgress] = useState(33);
  const [isEnabled, setIsEnabled] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [inputValue, setInputValue] = useState("");

  const handleTest = () => {
    toast({
      title: "Test Executed!",
      description: `Input: "${inputValue}" | Progress: ${progress}% | Enabled: ${isEnabled}`,
    });
  };

  const runProgressTest = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          toast({
            title: "Progress Complete!",
            description: "Test completed successfully",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <Card className="bg-gradient-card border border-primary/10 shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">Interactive Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="space-y-2">
          <Label htmlFor="test-input" className="text-sm font-medium">
            Test Input
          </Label>
          <Input
            id="test-input"
            placeholder="Enter test data..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-primary/20 focus:border-primary"
          />
        </div>

        {/* Progress Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Progress Test</Label>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
          <Button variant="outline" onClick={runProgressTest} className="w-full">
            Run Progress Test
          </Button>
        </div>

        {/* Switch Section */}
        <div className="flex items-center justify-between">
          <Label htmlFor="test-switch" className="text-sm font-medium">
            Enable Test Mode
          </Label>
          <Switch
            id="test-switch"
            checked={isEnabled}
            onCheckedChange={setIsEnabled}
          />
        </div>

        {/* Slider Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Value Slider</Label>
            <span className="text-sm font-mono text-muted-foreground">{sliderValue[0]}</span>
          </div>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="hero" onClick={handleTest}>
            Execute Test
          </Button>
          <Button variant="glow" onClick={() => toast({ title: "Glow Button", description: "Animation test!" })}>
            Glow Test
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};