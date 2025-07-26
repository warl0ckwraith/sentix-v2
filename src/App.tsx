import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PentestProvider } from "@/contexts/PentestContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import WorkflowDetail from "./pages/WorkflowDetail";
import Platform from "./pages/Platform";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <PentestProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/workflows/:workflowName" element={<WorkflowDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </PentestProvider>
  </QueryClientProvider>
);

export default App;
