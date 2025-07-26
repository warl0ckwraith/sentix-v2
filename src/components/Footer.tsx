export const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 border-t border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-muted-foreground text-sm mb-4 md:mb-0">
          © 2025 Sentix AI. All rights reserved.
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <a 
            href="/terms" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="/privacy" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};