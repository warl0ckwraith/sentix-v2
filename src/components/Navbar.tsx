import { Shield, Menu, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Enhanced mobile menu UX
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-gradient-to-r from-gray-900/80 via-purple-900/80 to-violet-900/80 backdrop-blur-lg border-b border-white/10 shadow-lg"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200"
          aria-label="Go to homepage"
        >
          <div className="p-2 bg-gradient-hero rounded-lg shadow-glow">
            <Shield className="h-6 sm:h-8 w-6 sm:w-8 text-white" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold font-heading bg-gradient-to-r from-[#FF6B6B] via-[#FF73B3] to-[#7B68EE] bg-clip-text text-transparent">
              Sentix AI
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Network Pentesting Automation</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8" role="navigation">
          <Link 
            to="/platform" 
            className={`text-white/90 hover:text-white focus:text-white transition-all duration-200 font-medium text-sm py-2 px-3 rounded-md hover:bg-white/10 relative group ${
              location.pathname === '/platform' ? 'text-white' : ''
            }`}
            aria-label="Learn about our platform"
          >
            Platform
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <Link 
            to="/features" 
            className={`text-white/90 hover:text-white focus:text-white transition-all duration-200 font-medium text-sm py-2 px-3 rounded-md hover:bg-white/10 relative group ${
              location.pathname === '/features' ? 'text-white' : ''
            }`}
            aria-label="View features"
          >
            Features
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
          <Link 
            to="/pricing" 
            className={`text-white/90 hover:text-white focus:text-white transition-all duration-200 font-medium text-sm py-2 px-3 rounded-md hover:bg-white/10 relative group ${
              location.pathname === '/pricing' ? 'text-white' : ''
            }`}
            aria-label="View pricing"
          >
            Pricing
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="font-medium text-sm px-4 py-2 h-auto min-h-touch text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label="Sign in to your account"
          >
            <LogIn className="h-4 w-4 mr-2" aria-hidden="true" />
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="font-semibold text-sm px-6 py-2 h-auto min-h-touch bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
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
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-border/50 animate-slide-in-right"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-1 pt-4">
              <Link 
                to="/platform" 
                className="text-white/90 hover:text-white focus:text-white transition-colors font-medium px-4 py-3 rounded-md hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </Link>
              <Link 
                to="/features" 
                className="text-white/90 hover:text-white focus:text-white transition-colors font-medium px-4 py-3 rounded-md hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-white/90 hover:text-white focus:text-white transition-colors font-medium px-4 py-3 rounded-md hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="justify-start font-medium h-auto min-h-touch py-3 px-4 text-white/90 hover:text-white hover:bg-white/10"
                  aria-label="Sign in to your account"
                >
                  <LogIn className="h-4 w-4 mr-2" aria-hidden="true" />
                  Sign In
                </Button>
                <Button 
                  size="sm" 
                  className="font-semibold h-auto min-h-touch py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
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