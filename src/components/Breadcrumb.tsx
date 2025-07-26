import { ChevronLeft, Home } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
  showBack?: boolean;
}

export const Breadcrumb = ({ 
  items = [], 
  showHome = true, 
  showBack = true 
}: BreadcrumbProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  // Auto-generate breadcrumbs based on current path if none provided
  const generateBreadcrumbs = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    if (pathParts.includes('workflows')) {
      breadcrumbs.push({ label: 'Workflows', href: '/workflows' });
    }
    if (pathParts.includes('platform')) {
      breadcrumbs.push({ label: 'Platform', href: '/platform' });
    }
    if (pathParts.includes('features')) {
      breadcrumbs.push({ label: 'Features', href: '/features' });
    }
    if (pathParts.includes('pricing')) {
      breadcrumbs.push({ label: 'Pricing', href: '/pricing' });
    }

    return breadcrumbs;
  };

  const allItems = items.length > 0 ? items : generateBreadcrumbs();

  return (
    <nav className="flex flex-wrap items-center gap-2 py-4" aria-label="Breadcrumb">
      <div className="flex items-center gap-2">
        {showBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="h-11 w-11 p-0 hover:bg-accent/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            aria-label="Go back to previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        )}
        
        {showHome && (
          <Link
            to="/"
            className="flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50 focus:ring-2 focus:ring-primary/20"
            aria-label="Navigate to homepage"
          >
            <Home className="h-4 w-4 flex-shrink-0" />
            <span className="hidden sm:inline font-medium">Home</span>
          </Link>
        )}
      </div>

      {allItems.length > 0 && (
        <>
          <span className="text-muted-foreground text-sm hidden sm:inline">/</span>
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2 overflow-hidden">
            {allItems.map((item, index) => (
              <li key={item.href} className="flex items-center gap-1 sm:gap-2">
                {index > 0 && <span className="text-muted-foreground text-sm hidden sm:inline">/</span>}
                <Link
                  to={item.href}
                  className="min-h-[44px] px-2 sm:px-3 py-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50 focus:ring-2 focus:ring-primary/20 font-medium truncate max-w-[120px] sm:max-w-none"
                  title={item.label}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </>
      )}
    </nav>
  );
};