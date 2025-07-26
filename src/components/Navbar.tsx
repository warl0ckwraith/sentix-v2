import { Shield, Menu, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-hero rounded-lg shadow-glow">
            <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#FF6B6B] via-[#FF73B3] to-[#7B68EE] bg-clip-text text-transparent">
              Sentix AI
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Network Pentesting Automation</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#platform" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105">
            Platform
          </a>
          <a href="#features" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105">
            Features
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105">
            Pricing
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hover:scale-105 transition-transform duration-200">
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-to-r from-[#FF6B6B] to-[#FF73B3] hover:opacity-90 transition-all duration-200 hover:scale-105">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden hover:scale-105 transition-transform duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border/50 animate-fade-in">
          <div className="flex flex-col space-y-4 pt-4">
            <a href="#platform" className="text-foreground hover:text-primary transition-colors">Platform</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" size="sm" className="justify-start">
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button variant="default" size="sm" className="bg-gradient-to-r from-[#FF6B6B] to-[#FF73B3]">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};