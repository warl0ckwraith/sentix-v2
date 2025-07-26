import { Shield, Menu, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-hero rounded-lg">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-cyber bg-clip-text text-transparent">
              Sentix AI
            </h1>
            <p className="text-xs text-muted-foreground">Network Pentesting Automation</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#platform" className="text-foreground hover:text-primary transition-colors">
            Platform
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#platform" className="text-foreground hover:text-primary">Platform</a>
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="sm">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};