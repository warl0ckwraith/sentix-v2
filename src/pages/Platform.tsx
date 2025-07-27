import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Lock,
  Brain,
  Workflow
} from "lucide-react";

export default function Platform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced LLM technology analyzes vulnerabilities and suggests remediation strategies automatically."
    },
    {
      icon: Workflow,
      title: "Automated Workflows",
      description: "Create, customize, and execute penetration testing workflows with zero manual intervention."
    },
    {
      icon: Shield,
      title: "Comprehensive Security",
      description: "Cover OWASP Top 10, network security, API testing, and compliance requirements."
    },
    {
      icon: BarChart3,
      title: "Real-time Reporting",
      description: "Generate detailed reports with executive summaries and technical findings instantly."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share workflows, findings, and collaborate with your security team in real-time."
    },
    {
      icon: Lock,
      title: "Enterprise Grade",
      description: "SOC 2 Type II compliant with enterprise-level security and scalability."
    }
  ];

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
              Platform Overview
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">The Most Advanced</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Pentesting Platform
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Sentix AI combines artificial intelligence with proven penetration testing methodologies 
              to deliver comprehensive security assessments at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                <Zap className="h-5 w-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Platform Capabilities</h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Everything you need to conduct professional penetration testing with the power of AI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <feature.icon className="h-12 w-12 text-orange-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-white/5">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/70">Security Tests Automated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/70">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10x</div>
                <div className="text-white/70">Faster Than Manual Testing</div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}