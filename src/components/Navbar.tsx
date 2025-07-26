import { Shield, Menu, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 bg-background/95 backdrop-blur-md border-b border-border/50"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-hero rounded-lg shadow-glow">
            <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading bg-gradient-to-r from-[#FF6B6B] via-[#FF73B3] to-[#7B68EE] bg-clip-text text-transparent">
              Sentix AI
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Network Pentesting Automation</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8" role="navigation">
          <a 
            href="#platform" 
            className="text-foreground hover:text-primary focus:text-primary transition-colors duration-200 font-medium text-sm py-2 px-1 rounded-md"
            aria-label="Learn about our platform"
          >
            Platform
          </a>
          <a 
            href="#features" 
            className="text-foreground hover:text-primary focus:text-primary transition-colors duration-200 font-medium text-sm py-2 px-1 rounded-md"
            aria-label="View features"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className="text-foreground hover:text-primary focus:text-primary transition-colors duration-200 font-medium text-sm py-2 px-1 rounded-md"
            aria-label="View pricing"
          >
            Pricing
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="font-medium text-sm px-4 py-2 h-auto min-h-touch hover:bg-accent/50 transition-colors duration-200"
            aria-label="Sign in to your account"
          >
            <LogIn className="h-4 w-4 mr-2" aria-hidden="true" />
            Sign In
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="font-semibold text-sm px-6 py-2 h-auto min-h-touch bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-200 shadow-subtle"
            aria-label="Get started with Sentix AI"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2 h-auto min-h-touch w-auto min-w-touch hover:bg-accent/50 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-border/50 animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-1 pt-4">
              <a 
                href="#platform" 
                className="text-foreground hover:text-primary focus:text-primary transition-colors font-medium px-4 py-3 rounded-md hover:bg-accent/30"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </a>
              <a 
                href="#features" 
                className="text-foreground hover:text-primary focus:text-primary transition-colors font-medium px-4 py-3 rounded-md hover:bg-accent/30"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-primary focus:text-primary transition-colors font-medium px-4 py-3 rounded-md hover:bg-accent/30"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start font-medium h-auto min-h-touch py-3 px-4 hover:bg-accent/50"
                  aria-label="Sign in to your account"
                >
                  <LogIn className="h-4 w-4 mr-2" aria-hidden="true" />
                  Sign In
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="font-semibold h-auto min-h-touch py-3 px-4 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  aria-label="Get started with Sentix AI"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};