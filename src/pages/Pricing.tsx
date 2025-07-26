import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, Zap, Shield, Users, Crown } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "$99",
      period: "per month",
      description: "Perfect for freelancers and small teams",
      features: [
        "Up to 5 security assessments/month",
        "Basic vulnerability scanning",
        "Standard reporting templates",
        "Email support",
        "Community workflows",
        "Basic API access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      icon: Shield,
      price: "$299",
      period: "per month",
      description: "Ideal for growing security teams",
      features: [
        "Unlimited security assessments",
        "Advanced AI-powered analysis",
        "Custom workflow builder",
        "Priority support",
        "Advanced reporting & analytics",
        "Team collaboration tools",
        "API integrations",
        "Compliance frameworks"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "Custom",
      period: "pricing",
      description: "For large organizations with custom needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "On-premise deployment",
        "Advanced security features",
        "SLA guarantees",
        "Training & onboarding",
        "24/7 phone support"
      ],
      popular: false,
      cta: "Contact Sales"
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
              Pricing Plans
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Choose Your</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Security Plan
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Flexible pricing options to fit your security testing needs and budget
            </p>
          </div>
        </motion.section>

        {/* Pricing Cards */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 h-full ${
                    plan.popular ? 'border-orange-500/50 scale-105' : ''
                  }`}>
                    <div className="text-center mb-8">
                      <plan.icon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-white/70 mb-6">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                        {plan.price !== "Custom" && (
                          <span className="text-white/70 ml-2">{plan.period}</span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                          : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 bg-white/5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto text-left space-y-6">
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Do you offer a free trial?</h3>
                <p className="text-white/70">Yes! We offer a 14-day free trial for all our plans so you can experience the full power of Sentix AI.</p>
              </Card>
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-white/70">Absolutely. You can change your plan at any time, and we'll prorate the billing accordingly.</p>
              </Card>
              <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">What kind of support do you provide?</h3>
                <p className="text-white/70">We provide comprehensive support including documentation, video tutorials, email support, and phone support for Enterprise customers.</p>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}