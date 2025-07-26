import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Target, 
  Globe, 
  Database, 
  Key,
  FileText,
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from "lucide-react";

export default function Features() {
  const featureCategories = {
    scanning: [
      { icon: Globe, title: "Network Discovery", description: "Automated network mapping and service enumeration" },
      { icon: Target, title: "Vulnerability Assessment", description: "OWASP Top 10 and CVE database scanning" },
      { icon: Database, title: "Database Testing", description: "SQL injection and NoSQL vulnerability detection" },
      { icon: Key, title: "Authentication Testing", description: "Bypass techniques and credential analysis" }
    ],
    automation: [
      { icon: Zap, title: "Workflow Engine", description: "Drag-and-drop pentesting workflow creation" },
      { icon: Shield, title: "AI-Powered Analysis", description: "Machine learning for vulnerability prioritization" },
      { icon: FileText, title: "Auto-Reporting", description: "Executive and technical report generation" },
      { icon: AlertTriangle, title: "Risk Scoring", description: "CVSS-based risk assessment and ranking" }
    ],
    compliance: [
      { icon: CheckCircle, title: "OWASP Compliance", description: "Full OWASP Top 10 coverage and testing" },
      { icon: Shield, title: "PCI DSS", description: "Payment card industry security assessments" },
      { icon: TrendingUp, title: "ISO 27001", description: "Information security management compliance" },
      { icon: FileText, title: "Custom Frameworks", description: "Build custom compliance testing workflows" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20"> {/* Add padding top for fixed navbar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Breadcrumb showBack={false} />
        </div>
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary">
              Features & Capabilities
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Everything You Need for</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Professional Pentesting
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Comprehensive security testing capabilities powered by AI and automation
            </p>
          </div>
        </motion.section>

        {/* Features Tabs */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <Tabs defaultValue="scanning" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/5 border-white/10">
                <TabsTrigger value="scanning" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Scanning & Testing
                </TabsTrigger>
                <TabsTrigger value="automation" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  AI & Automation
                </TabsTrigger>
                <TabsTrigger value="compliance" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
                  Compliance
                </TabsTrigger>
              </TabsList>

              <TabsContent value="scanning">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {featureCategories.scanning.map((feature, index) => (
                    <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-orange-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="automation">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {featureCategories.automation.map((feature, index) => (
                    <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-orange-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="compliance">
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {featureCategories.compliance.map((feature, index) => (
                    <Card key={index} className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-orange-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-white/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven penetration testing
            </p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
              Start Free Trial
            </Button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}